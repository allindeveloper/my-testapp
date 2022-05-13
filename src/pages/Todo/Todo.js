import todoStyles from "./todo.module.css";
import Header from "../../components/Header/Header";
import CustomInput from "../../components/Input/CustomInput";
import CustomButton from "../../components/Button/CustomButton";
import TodoItem from "../../components/Item/TodoItem";
import { useState } from "react";
const Todo = () => {
  const dummyTodos = [
    {
      id: 1,
      name: "Task 1",
    },
    {
      id: 2,
      name: "Task 2",
    },
    {
      id: 3,
      name: "Task 3",
    },
    {
      id: 4,
      name: "Task 4",
    },
    {
      id: 5,
      name: "Task 5",
    },
    {
      id: 6,
      name: "Task 6",
    },
    {
      id: 7,
      name: "Task 7",
    },
    {
      id: 8,
      name: "Task 8",
    },
    {
      id: 9,
      name: "Task 9",
    },
    {
      id: 10,
      name: "Task 10",
    },
    {
      id: 11,
      name: "Task 11",
    },
    {
      id: 12,
      name: "Task 12",
    },
  ];
  const [todoValue, setTodoValue] = useState("");


  const onInputChange = (event) => {
    const newTodo = event.target.value;
    setTodoValue(newTodo) // update the input value to the state
  }

  const submitTodo = () =>{
    if(todoValue === ""){
        alert("Please enter a todo item")
    }else {
        //  add the new todo to the array
        alert(`Heyy your new todo item ${todoValue} has been submitted.`)
        setTodoValue("")
    }
  }

  const deleteTodo = (todoItem) => {
    alert(`${todoItem.name} with id ${todoItem.id} has been deleted`)
  }
  return (
    <div className={todoStyles.todo}>
      <Header title="Todos" />
      <div className={todoStyles.todoWrapper}>
        {dummyTodos.map((item) => (
          <TodoItem key={item.id.toString()} deleteTodo={deleteTodo} todoItem={item} />
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
