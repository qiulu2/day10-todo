import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "./DefaultLayout";
import {ErrorPage} from "../ErrorPage/ErrorPage";
import {TodoListPage} from "../page/TodoListPage";
import {TodoDetailPage} from "../page/TodoDetailPage";
import {DonePage} from "../page/DonePage";
import {AboutUsPage} from "../page/AboutUsPage";

export let routers = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <TodoListPage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            },
            {
                path: "/donelist",
                element: <DonePage/>
            },
            {
                path: "/about",
                element: <AboutUsPage/>
            },
        ]
    }
]);