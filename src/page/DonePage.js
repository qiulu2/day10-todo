import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DonePage() {
    const {state} = useContext(TodoContext)
    const doneTodos = state.filter((todo) => todo.done === true)

    return (
        <div className="done-page">
            <h1>Completed Tasks</h1>
            {doneTodos.length > 0 ? (
                <div className="done-list">
                    <h2>✅ {doneTodos.length} completed task{doneTodos.length > 1 ? 's' : ''}</h2>
                    {doneTodos.map((item) => {
                        return <TodoItem todo={item} key={item.id}/>;
                    })}
                </div>
            ) : (
                <div className="empty-done-state">
                    <h2>No completed tasks yet</h2>
                    <p>Complete some tasks to see them here!</p>
                </div>
            )}
        </div>
    );
}
