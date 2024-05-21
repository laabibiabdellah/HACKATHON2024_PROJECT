import axios from "axios";

let api_baseURL = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default api_baseURL;
