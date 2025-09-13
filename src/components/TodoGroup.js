import {useContext, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext);
    const [inputText, setInputText] = useState("");

    function addTodo() {
        if (inputText.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: {text: inputText.trim()}
            });
            setInputText("");
        }
    }

    function handleInputChange(e) {
        setInputText(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    return <div className="todo-container">
        <h1>Todo List</h1>

        {state.length === 0 ? (
            <div className="empty-state">
                <p>Add the things you need to do today...</p>
            </div>
        ) : (
            <div className="todo-list">
                {state.map((item) => {
                    return <TodoItem todo={item} key={item.id}/>
                })}
            </div>
        )}

        <div className="input-section">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="todo-input"
            />
            <button onClick={addTodo} className="add-btn">add</button>
        </div>
    </div>;
}