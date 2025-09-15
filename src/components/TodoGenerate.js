import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Input, Button, Space} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

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
            handleAddTodo(e);
        }
    }

    return (
        <Space.Compact style={{width: '100%'}}>
            <Input
                placeholder="Add somethings..."
                value={inputText}
                onChange={handleInputChange}
                onPressEnter={handleKeyDown}
                size="large"
            />
            <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleAddTodo}
                size="large"
            >
                Add
            </Button>
        </Space.Compact>
    );
}
