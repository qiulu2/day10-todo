import "./App.css"
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routers} from "./components/Routers";
import {useTodoService} from "./useTodoService";


function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {getTodos} = useTodoService()

    useEffect(() => {
        getTodos()
            .then(response => response.data)
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}));
    }, [dispatch]);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routers}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
