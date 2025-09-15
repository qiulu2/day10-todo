import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";

export function DoneList() {
    const {state} = useContext(TodoContext)
    const todo = state.filter((todo) => todo.done === true)
    if (todo.length > 0) {
        return <div>
            <h1>done:</h1>
            {todo.map((item) => {
                return <TodoItem todo={item} key={item.id}/>;
            })}
        </div>
    }
    return <div>
        <h1>none done todo</h1>
    </div>;
}