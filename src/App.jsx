import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Itinerary from "./pages/Itinerary";
import Alerts from "./pages/Alerts";
import Modules from "./pages/Modules";

import "./App.css";

function App() {
    const [page, setPage] = useState("home");

    return (
        <div className="app">

            <Navbar setPage={setPage} />

            <main>
                {page === "home" && <Home />}
                {page === "services" && <Services />}
                {page === "itinerary" && <Itinerary />}
                {page === "alerts" && <Alerts />}
                {page === "modules" && <Modules />}
            </main>

            <Footer />

        </div>
    );
}

export default App;