function Navbar({ setPage, currentUser, onLogin, onLogout }) {
  return <nav className="navbar">
    <h2 onClick={() => setPage("home")} className="brand">TravelEase ✈️</h2>
    <div className="nav-links">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("services")}>Services</button>
      <button onClick={() => setPage("itinerary")}>Itinerary</button>
      <button onClick={() => setPage("alerts")}>Alerts</button>
      <button onClick={() => setPage("modules")}>Modules</button>
      {currentUser ? <><button onClick={() => setPage(currentUser.role)}>{currentUser.role === "admin" ? "Admin Dashboard" : "My Dashboard"}</button><button onClick={onLogout}>Logout</button></> : <button onClick={onLogin}>Login / Signup</button>}
    </div>
  </nav>;
}
export default Navbar;
