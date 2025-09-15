import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {Empty} from 'antd';


export function TodoList() {
    const {state} = useContext(TodoContext);

    return (
        <div className="todo-list" style={{padding: '8px 0'}}>
            {state.length === 0 ? (
                <Empty
                    description="No tasks yet"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    style={{padding: '40px 0'}}
                >
                    <p style={{color: '#666', margin: 0}}>Add your first task!</p>
                </Empty>
            ) : (
                <div>
                    {state.map((item) => {
                        return <TodoItem todo={item} key={item.id}/>;
                    })}
                </div>
            )}
        </div>
    );
}
