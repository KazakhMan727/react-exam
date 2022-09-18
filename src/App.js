import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import FiguresPage from "./pages/FiguresPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App () {

    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/figures" element={<FiguresPage />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;