import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";

export function TodoList() {
    const {state} = useContext(TodoContext);

    return (
        <div className="todo-list">
            {state.length === 0 ? (
                <div className="empty-state">
                    <p>Add the things you need to do today...</p>
                </div>
            ) : (
                state.map((item) => {
                    return <TodoItem todo={item} key={item.id}/>;
                })
            )}
        </div>
    );
}
