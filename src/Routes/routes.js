import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../View/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Private from "../View/Private";
import Home from "../View/Home";

function AllRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Routes>
                {/* Private routes  */}
                <Route element={<PrivateRoutes />}>
                    <Route path="/private" element={<Private />} />
                </Route>
                {/* Public routes  */}
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
