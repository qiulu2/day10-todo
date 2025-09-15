import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

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


// TODO errorPage
function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status === 404
            ? <div className={"not-found"}><h1>404 Not Found</h1><span>Try</span></div>
            : <div>{JSON.stringify(error)}</div>}
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
                element: <TodoGroup />
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