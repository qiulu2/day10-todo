import "./App.css"
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {Await, RouterProvider} from "react-router";
import {routers} from "./components/Routers";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://68c7ac295d8d9f51473284f1.mockapi.io/',
    headers: {'content-type': 'application/json'},
    timeout: 10000,
});


function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    useEffect(() => {
        api.get('/todos')
            .then(response => response.data)
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos},[]))
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
