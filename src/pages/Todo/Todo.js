import todoStyles from "./todo.module.css";
import Header from "../../components/Header/Header";
import CustomInput from "../../components/Input/CustomInput";
import CustomButton from "../../components/Button/CustomButton";
import TodoItem from "../../components/Item/TodoItem";
import { useState } from "react";
const Todo = () => {

  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([])

  const onInputChange = (event) => {
    const newTodo = event.target.value;
    setTodoValue(newTodo) // update the input value to the state
  }

  const submitTodo = () =>{
    if(todoValue === ""){
        alert("Please enter a todo item")
    }else {
        //  add the new todo to the array
        const randomNumber = Math.floor(Math.random() * 101) //0 - 100
        const newArray = todos.concat({
          name:todoValue,
          id:randomNumber
        });
        setTodos(newArray)
        alert(`Heyy your new todo item ${todoValue} has been submitted.`)
        setTodoValue("")
    }
  }

  const deleteTodo = (todoItem) => {
    alert(`${todoItem.name} with id ${todoItem.id} has been deleted`)
    
  //   todos.filter((todos,)=>{
      
    // })
  //  todos.filter(todoItem.id)
    // filter the todos using todoItem.id

    // then assign the filter result to a new variable

    // then set the value of todos array to this new variable in the above step


  }
  return (
    <div className={todoStyles.todo}>
      <Header title="Todos" count={todos.length} />
      <div className={todoStyles.todoWrapper}>
        {todos && todos.length>0 && todos.map((item) => (
          <TodoItem key={item?.id.toString()} deleteTodo={deleteTodo} todoItem={item} />
        ))}
      </div>

      <div className={todoStyles.bottomSection}>
        <div>
          <CustomInput value={todoValue} onInputChange={onInputChange} />
        </div>
        <div>
          <CustomButton handleClick={submitTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
