import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {HomePage} from "./page/HomePage";

export const initState = [];

function DefaultLayout(){
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}


let routers = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);


function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);

    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routers} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;