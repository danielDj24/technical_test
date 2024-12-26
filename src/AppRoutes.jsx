import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importacion de las paginas 
import Home from "./pages/home/home";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;