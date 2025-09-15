import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {api} from "../api/mockApi";


const updateDone = (props) => {
    return api.put("/todos/" + props.todo.id, {done: !props.todo.done});
}

const DeleteTodo = (props) => {
    return api.delete("/todos/" + props.todo.id);
}

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const navigate = useNavigate();
    const {showDetailBtn = true} = props;

    function makeAsDone() {
        updateDone(props)
            .then(res => res.data)
            .then(todo => dispatch({
                type: "UPDATE_TODO",
                payload: todo,
            }));
    }

    function deleteTodo() {
        DeleteTodo(props)
            .then(res => res.data)
            .then(todo => dispatch({type: "DELETE_TODO", payload: todo}));
    }

    function detailTodo() {
        navigate(`/todos/${props.todo.id}`)
    }

    return <div className={"todo-item"}>
        <span className={
            props.todo.done ? "todo-done" : ""}
              onClick={makeAsDone}>
        {props.todo.text}
        </span>
        <button className="delete-btn" onClick={deleteTodo}>❌</button>
        {
            showDetailBtn && (<button className="detail-btn" onClick={detailTodo}>👀</button>)
        }
    </div>
}