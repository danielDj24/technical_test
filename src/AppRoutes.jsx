import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importacion de las paginas 
import Home from "./pages/home/home";
import ContactUs from "./pages/contact/contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact_us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;