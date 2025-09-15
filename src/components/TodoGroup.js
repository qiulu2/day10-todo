import React from "react";
import {TodoGenerate} from "./TodoGenerate";
import {TodoList} from "./TodoList";
import {Card} from 'antd';

export function TodoGroup() {
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <Card style={{marginBottom: '20px'}}>
                <TodoGenerate/>
            </Card>
            <Card>
                <TodoList/>
            </Card>
        </div>
    );
}