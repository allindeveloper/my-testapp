import todoItemStyles from "./todoitem.module.css";
import Label from "../Label/Label";
import close from "../../assets/images/cancel.png";
import {PropTypes} from "prop-types";
const TodoItem = ({todoItem, deleteTodo}) => {
  return (
    <div className={todoItemStyles.middleSection}>
      <div>
        <Label title={todoItem?.name} />
      </div>
      <div>
        <img src={close} onClick={()=>deleteTodo(todoItem)} width="19" alt="Delete" />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
    todoItem: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func
}

TodoItem.defaultProps = {
    todoItem: "Task A"
}
export default TodoItem;
