import {useContext, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {HomePage} from "./page/HomePage";
import {TodoItem} from "./components/TodoItem";

export const initState = [];

function DefaultLayout() {
    return <div>
        <header>
            <nav className={"navBar"}>
                <ul>
                    <li><NavLink to={"/"}>home</NavLink></li>
                    <li><NavLink to={"/todos/1"}>todos</NavLink></li>
                    <li><NavLink to={"/donelist"}>donelist</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}


function DoneList() {
    const {state} = useContext(TodoContext)
    const todo = state.filter((todo) => todo.done === true)
    if (todo.length > 0) {
        return <div>
            <h1>done:</h1>
            {todo.map((item) => {
                return <TodoItem todo={item} key={item.id}/>;
            })}
        </div>
    }
        return <div>
            <h1>none done todo</h1>
        </div>;
}
let routers = createBrowserRouter([
        {
            path: "/",
            element: <DefaultLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/todos/:id",
                    element: <TodoDetailPage/>
                },
                {
                    path: "/donelist",
                    element: <DoneList/>
                }
            ]
        }
    ]);

function TodoDetailPage() {

    const {id} = useParams()
    const {state} = useContext(TodoContext)
    console.log(state)
    const todo = state.filter((todo) => todo.id === parseInt(id))
    if (state.length === 0) {

        return <div>Not Found Todo.</div>
    }
    return <div>
        {JSON.stringify(todo)}
        <TodoItem todo={todo[0]} index={id}/>
    </div>;

}
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
