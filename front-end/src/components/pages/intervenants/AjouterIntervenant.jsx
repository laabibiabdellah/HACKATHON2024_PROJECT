export default function AjouterIntervenant() {
    return (
        <div className="container">
            <form method="post" action="">
                <div data-mdb-input-init className="form-outline">
                    <input
                        type="email"
                        id="form1Example1"
                        className="form-control "
                        name="matricule"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Email
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="password"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Password
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="date"
                        data-mdb-inline
                        id="datenaissance"
                        className="form-control"
                        name="datenaissance"
                        value=""
                    />
                    <label className="form-label" for="datenaissance">
                        datenaissance
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="intitule_diplome"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Intitule diplome
                    </label>
                </div>
                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="type_diplome"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Type diplome
                    </label>
                </div>
                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="specialite_diplome"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Specialite diplome
                    </label>
                </div>
                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="number"
                        id="form1Example1"
                        className="form-control "
                        name="type_intervenant"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Type intervenant
                    </label>
                </div>

                <div
                    data-mdb-input-init
                    id="assurance"
                    hidden
                    className="form-outline mt-4"
                >
                    <input
                        type="number"
                        className="form-control"
                        name="montant_assurance"
                        value=""
                    />
                    <label className="form-label" for="assurance">
                        Montant de l'assurance
                    </label>
                </div>

                <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn add btn-block mt-4"
                >
                    Ajoute member
                </button>
            </form>
        </div>
    );
}
