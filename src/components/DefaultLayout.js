import {NavLink, Outlet} from "react-router";
import "../css/DefaultLayout.css";

export function DefaultLayout() {
    return (
        <div className="layout">
            <header className="header">
                <nav className="navBar" aria-label="Main navigation">
                    <ul className="navList">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `navLink ${isActive ? "navLink--active" : ""}`
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/todos/1"
                                className={({isActive}) =>
                                    `navLink ${isActive ? "navLink--active" : ""}`
                                }
                            >
                                TodoList
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donelist"
                                className={({isActive}) =>
                                    `navLink ${isActive ? "navLink--active" : ""}`
                                }
                            >
                                DoneList
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
}