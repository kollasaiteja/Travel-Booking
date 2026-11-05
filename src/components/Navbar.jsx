function Navbar({ setPage }) {
    return (
        <nav className="navbar">
            <h2>TravelEase ✈️</h2>

            <div className="nav-links">
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("services")}>Services</button>
                <button onClick={() => setPage("itinerary")}>Itinerary</button>
                <button onClick={() => setPage("alerts")}>Alerts</button>
                <button onClick={() => setPage("modules")}>Modules</button>
            </div>
        </nav>
    );
}

export default Navbar;