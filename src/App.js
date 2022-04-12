import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header/Header"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Containers/Footer/Footer";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Teams from "./Pages/Teams/Teams";
import Contacts from "./Pages/Contacts/Contacts";
import PageTitle from "./Containers/PageTitle/PageTitle";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
    return (
        <HashRouter>
            <Header />
            <PageTitle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Teams" element={<Teams />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default App;
