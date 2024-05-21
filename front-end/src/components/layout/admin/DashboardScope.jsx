import { Link, Outlet } from "react-router-dom";
import "./scope-dashoboard.css";

export default function DashboardScope(props) {
    return (
        <>
            <div id="wrapper">
                <ul
                    className="navbar-nav sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    <a
                        className="sidebar-brand d-flex align-items-center justify-content-center py-5"
                        href="#"
                    >
                        <h4 className="text-title">
                            Admin
                            <br />
                            <small>dashboard</small>
                        </h4>
                    </a>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <Link className="nav-link" to={"/dashboard"}>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">Interface</div>
                    <li className="nav-item">
                        <div className="dropdown">
                            <div
                                className="nav-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-controls="collapseTwo"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-users"></i>
                                <span>Intervenants</span>
                            </div>
                            <ul
                                className="dropdown-menu ml-4"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"list-intervenants"}
                                    >
                                        List Intervenants
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"ajouter-intervenant"}
                                    >
                                        Ajouter Intervenant
                                    </Link>
                                </li>
                            </ul>
                            <div
                                className="nav-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-controls="collapseTwo"
                                id="dropdownMenuButton"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-users"></i>
                                <span>Formations</span>
                            </div>
                            <ul
                                className="dropdown-menu ml-4"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"list-formations"}
                                    >
                                        List formations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"ajouter-formation"}
                                    >
                                        Ajouter formation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <hr className="sidebar-divider" />
                </ul>

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow ">
                            <div className="container px-3">
                                <button
                                    data-mdb-collapse-init
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div></div>

                                <div className="d-flex align-items-center">
                                    <div className="dropdown">
                                        <a
                                            className="nav-link collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-controls="collapseTwo"
                                            id="dropdownMenuButton"
                                            data-mdb-dropdown-init
                                            data-mdb-ripple-init
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                className="rounded-circle admin-avatar"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    {props.title}
                                </h1>
                                <div></div>
                            </div>
                        </div>

                        <div className="app px-3">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
