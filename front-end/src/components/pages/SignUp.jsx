export default function SignUp() {
    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <form>
                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="email"
                        id="form1Example1"
                        class="form-control"
                    />
                    <label class="form-label" for="form1Example1">
                        Email address
                    </label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="password"
                        id="form1Example2"
                        class="form-control"
                    />
                    <label class="form-label" for="form1Example2">
                        Password
                    </label>
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                                checked
                            />
                            <label class="form-check-label" for="form1Example3">
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                    </div>

                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button
                    data-mdb-ripple-init
                    type="submit"
                    class="btn btn-primary btn-block"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}
