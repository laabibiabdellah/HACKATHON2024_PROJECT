export default function AjouterFormation() {
    return (
        <>
            <form method="post" action="">
                <div data-mdb-input-init className="form-outline">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="nom"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Nom
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="text"
                        id="form1Example1"
                        className="form-control "
                        name="prenom"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Prenom
                    </label>
                </div>

                <div className="mt-4">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name="category_id"
                    >
                        <option disabled selected>
                            Sélectionnez la catégorie
                        </option>
                    </select>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="number"
                        id="form1Example1"
                        className="form-control"
                        name="montant_payé"
                        value=""
                    />
                    <label className="form-label" for="form1Example1">
                        Montant payé
                    </label>
                </div>

                <div className="form-check mt-4">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        name="assurance_payé"
                        value=""
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                        Assurance payé ?
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
                        className="form-control "
                        name="montant_assurance"
                        value=""
                    />
                    <label className="form-label" for="assurance">
                        Montant de l'assurance
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <input
                        type="date"
                        data-mdb-inline
                        id="date_payment"
                        className="form-control"
                        name="date_payement"
                        value=""
                    />
                    <label className="form-label" for="date_payment">
                        Date de payment
                    </label>
                </div>

                <div data-mdb-input-init className="form-outline mt-4">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name="nombre_mois"
                    >
                        <option selected disabled>
                            Sélectionner nombre de mois
                        </option>
                        <option vqlue="1">1</option>
                        <option vqlue="2">2</option>
                        <option vqlue="3">3</option>
                        <option vqlue="4">4</option>
                        <option vqlue="5">5</option>
                        <option vqlue="6">6</option>
                        <option vqlue="7">7</option>
                        <option vqlue="8">8</option>
                        <option vqlue="9">9</option>
                        <option vqlue="10">10</option>
                        <option vqlue="11">11</option>
                        <option vqlue="12">12</option>
                    </select>
                </div>

                <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn add btn-block mt-4"
                >
                    Ajoute member
                </button>
            </form>
        </>
    );
}
