import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header/Header"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Containers/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
