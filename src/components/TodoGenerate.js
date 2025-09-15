import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function TodoGenerate() {
    const { dispatch } = useContext(TodoContext);
    const [inputText, setInputText] = useState("");

    function addTodo() {
        if (inputText.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: { text: inputText.trim() }
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

    return (
        <div className="input-section">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="todo-input"
            />
            <button onClick={addTodo} className="add-btn">
                Add
            </button>
        </div>
    );
}
