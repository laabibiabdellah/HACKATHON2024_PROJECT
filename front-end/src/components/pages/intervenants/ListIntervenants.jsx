export default function ListIntervenants() {
    return (
        <div className="container py-5">
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">
                                        john.doe@gmail.com
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">
                                Active
                            </span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <td>
                                <div class="dropdown">
                                    <div
                                        class="nav-link collapsed"
                                        data-mdb-dropdown-init
                                    >
                                        <i
                                            class="fa-solid fa-caret-down"
                                            style={{
                                                cursor: "pointer !important;",
                                            }}
                                        ></i>
                                    </div>
                                    <ul
                                        class="dropdown-menu "
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Modifier
                                            </a>
                                        </li>
                                        <li>
                                            <button class="dropdown-item delete-btn">
                                                Supprimer
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
