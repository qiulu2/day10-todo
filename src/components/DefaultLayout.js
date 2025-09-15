import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
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