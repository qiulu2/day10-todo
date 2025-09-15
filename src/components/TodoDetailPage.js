import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";

export function TodoDetailPage() {

    const {id} = useParams()
    const {state} = useContext(TodoContext)
    console.log(state)
    const todo = state.filter((todo) => todo.id === id)
    if (todo.length === 0) {
        return <div>Not Found Todo.</div>
    }

    console.log(todo)
    return <div>
        <TodoItem todo={todo[0]} index={id} shouwDetailBtn={false}/>
    </div>;

}