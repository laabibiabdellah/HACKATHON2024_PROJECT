import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {
    let baseURL = import.meta.env.VITE_BACKEND_URL;

    let navigate = useNavigate();

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
                    navigate("dashboard");
                })
                .catch((response) => {
                    console.log("err");
                });
        },
    });
    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <form className="border p-5 rounded" onSubmit={formik.handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <span className="text-danger">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </span>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <span className="text-danger">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </span>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example34"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="form2Example34"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button
                    data-mdb-ripple-init
                    className="btn btn-primary btn-block mb-4"
                    type="submit"
                >
                    Sign in
                </button>

                <div className="text-center">
                    <p>
                        Not a member? <a href="#!">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
