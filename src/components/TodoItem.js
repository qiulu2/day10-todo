import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

function detailTodo() {

}

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);

    function makeAsDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function deleteTodo() {
        dispatch({
            type: "DELETE_TODO",
            payload: {id: props.todo.id}
        })
    }

    return <div className={"todo-item"}>
        <span className={
            props.todo.done ? "todo-done" : ""}
              onClick={makeAsDone}>
        {props.todo.text}
        </span>
        <button className="delete-btn" onClick={deleteTodo}>❌</button>
        <button className="detail-btn" onClick={detailTodo}>👀</button>
    </div>
}