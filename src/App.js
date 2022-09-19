import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import FiguresPage from "./pages/FiguresPage";
import BadgesPage from "./pages/BadgesPage";
import StickersPage from "./pages/StickersPage";
import TShirtsPage from "./pages/TShirtsPage";
import RucksacksPage from "./pages/RucksacksPage";
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
                    <Route path="/badges" element={<BadgesPage />} />
                    <Route path="/stickers" element={<StickersPage />} />
                    <Route path="/t-shirts" element={<TShirtsPage />} />
                    <Route path="/rucksacks" element={<RucksacksPage />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;