import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container">
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

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Intervenants
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={"list-intervenants"}
                                        >
                                            List intervenants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={"ajoute-intervenants"}
                                        >
                                            Ajoute intervenants
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="btn-group">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"login"}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
