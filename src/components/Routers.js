import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "./DefaultLayout";
import {ErrorPage} from "../ErrorPage/ErrorPage";
import {HomePage} from "../page/HomePage";
import {TodoDetailPage} from "./TodoDetailPage";
import {DoneList} from "./DoneList";

export let routers = createBrowserRouter([
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
            },
        ]
    }
]);