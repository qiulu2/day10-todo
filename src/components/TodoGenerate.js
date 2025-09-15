import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {type} from "@testing-library/user-event/dist/type";
import {api} from "../api/mockApi";

export function TodoGenerate() {
    const {dispatch} = useContext(TodoContext);
    const [inputText, setInputText] = useState("");

    function addTodo(e) {
        e.preventDefault();
        if (inputText.trim()) {
            api.post("/todos", {text: inputText.trim(), done: false})
                .then(res => res.data)
                .then(todo => dispatch({type: "ADD_TODO", payload: todo}));
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
