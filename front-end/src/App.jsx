import "bootstrap/dist/css/bootstrap.css";
import "./utilites/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./utilites/bootstrap.bundle.min.js";
// import "./utilites/mdb.umd.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/HOME_PAGE/Nav";
import HeroSection from "./components/HOME_PAGE/HeroSection";
import SecondarySection from "./components/HOME_PAGE/SecondarySection";

// AUTH
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

// DASHBOARD
import DashboardScope from "./components/layout/admin/DashboardScope.jsx";
import ListIntervenants_ADMIN from "./components/layout/admin/ListIntervenants";

import AjouterIntervenants from "./components/pages/intervenants/AjouterIntervenant.jsx";
import ListIntervenants from "./components/pages/intervenants/ListIntervenants.jsx";
import ListFormations from "./components/pages/formations/ListFormations.jsx";
import AjouterFormation from "./components/pages/formations/AjouteFormation.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Nav />
                            <HeroSection />
                            {/* <SecondarySection /> */}

                            {/* <h1>hhhhhhhhhh</h1> */}
                        </>
                    }
                />
                <Route
                    path="/profil"
                    element={
                        <>
                            <Nav />
                            <h1>profil</h1>
                        </>
                    }
                />
                {/* <Route
                    path="list-intervenants"
                    element={
                        <>
                            <Nav />
                            <ListIntervenants />
                        </>
                    }
                />
                <Route
                    path="ajouter-intervenant"
                    element={
                        <>
                            <Nav />
                            <AjouterIntervenants />
                        </>
                    }
                /> */}

                <Route path="contact-us" element={<h1>contact-us</h1>} />
                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />

                {/* ------------------- BIGIN DASHBOARD ------------------- */}
                <Route
                    path="/dashboard"
                    element={<DashboardScope title="Dashboard" />}
                >
                    <Route
                        path="list-intervenants"
                        element={
                            <>
                                <ListIntervenants />
                            </>
                        }
                    />
                    <Route
                        path="ajouter-intervenant"
                        element={
                            <>
                                <AjouterIntervenants />
                            </>
                        }
                    />
                    <Route
                        path="list-formations"
                        element={
                            <>
                                <ListFormations />
                            </>
                        }
                    />
                    <Route
                        path="ajouter-formation"
                        element={
                            <>
                                <AjouterFormation />
                            </>
                        }
                    />
                </Route>
                {/* ------------------- END DASHBOARD ------------------- */}
            </Routes>
        </BrowserRouter>
    );
}
