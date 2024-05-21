import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function SignUp() {
    let baseURL = import.meta.env.VITE_BACKEND_URL;

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .min(8, "Too Short!")
                .max(30, "Too Long!")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            axios
                .post(`${baseURL}/login`, values)
                .then((response) => {
                    console.log("done");
                })
                .catch((error) => {
                    console.log("error");
                });
        },
        onSubmit: (values) => {
            axios
                .post(`${baseURL}/login`, values)
                .then((response) => {
                    response.data;
                })
                .catch((error) => {
                    console.log("error");
                });
        },
    });
    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
            onSubmit={formik.handleSubmit}
        >
            <form className="border p-5 rounded">
                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="email"
                        id="form1Example1"
                        class="form-control"
                    />
                    <label class="form-label" for="form1Example1">
                        Email address
                    </label>
                    <span className="text-danger">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </span>
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
                    <span className="text-danger">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </span>
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
