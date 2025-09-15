import {api} from "./api/mockApi";

export function useTodoService() {
    const updateDone = (props) => {
        return api.put("/todos/" + props.todo.id, {done: !props.todo.done});
    }

    const deleteTodo = (props) => {
        return api.delete("/todos/" + props.todo.id);
    }

    const getTodos = () => {
        return api.get('/todos');
    }

    const addTodos = (inputText) => {
        return api.post("/todos", {text: inputText.trim(), done: false});
    }


    return {updateDone, deleteTodo, getTodos, addTodos};
}
