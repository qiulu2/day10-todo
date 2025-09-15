import "./App.css"
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routers} from "./components/Routers";

export const initState = [];


function App() {
        const [state, dispatch] = useReducer(todoReducer, initState);

    return (
            <div className="App">
                <TodoContext.Provider value={{state, dispatch}}>
                    <RouterProvider router={routers}/>
                </TodoContext.Provider>
            </div>
        );
}
export default App;
