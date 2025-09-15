import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";


export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const navigate = useNavigate();
    const {showDetailBtn = true} = props;
    const {updateDone, deleteTodo} = useTodoService()

    function handleUpdateTodo() {
        updateDone(props)
            .then(res => res.data)
            .then(todo => dispatch({
                type: "UPDATE_TODO",
                payload: todo,
            }));
    }

    function handlerDeleteTodo() {
        deleteTodo(props)
            .then(res => res.data)
            .then(todo => dispatch({type: "DELETE_TODO", payload: todo}));
    }

    function handleDetailTodo() {
        navigate(`/todos/${props.todo.id}`)
    }

    return <>
        <div className={"todo-item"}>
        <span className={
            props.todo.done ? "todo-done" : ""}
              onClick={handleUpdateTodo}>
            {props.todo.text}
        </span>
            <button className="delete-btn" onClick={handlerDeleteTodo}>❌</button>
            {
                showDetailBtn && (<button className="detail-btn" onClick={handleDetailTodo}>👀</button>)
            }
        </div>
    </>

}