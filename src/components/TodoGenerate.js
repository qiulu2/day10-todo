import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";
import {useTodoService} from "../useTodoService";

export function TodoGenerate() {
    const {dispatch} = useContext(TodoContext);
    const [inputText, setInputText] = useState("");
    const {addTodos} = useTodoService();

    function handleAddTodo(e) {
        e.preventDefault();
        if (inputText.trim()) {
            addTodos(inputText)
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
            handleAddTodo();
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
            <button onClick={handleAddTodo} className="add-btn">
                Add
            </button>
        </div>
    );
}
