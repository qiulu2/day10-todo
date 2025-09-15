import React from "react";
import {TodoGenerate} from "./TodoGenerate";
import {TodoList} from "./TodoList";

export function TodoGroup() {
    return <div className="todo-container">
        <h1>Todo List</h1>
        <TodoList/>
        <TodoGenerate/>
    </div>;
}