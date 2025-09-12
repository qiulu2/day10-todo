import {createContext, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext} from "./contexts/TodoContext";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];


function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);

    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoGroup/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;