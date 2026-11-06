function Modules({ setPage, currentUser, openAuth }) {
  return <div className="page"><h1>TravelEase Modules</h1><p>Select a module to continue.</p>
    <div className="service-container">
      <div className="service-card"><h2>Admin Module</h2><p>Manage registered users and all travel bookings.</p><button className="main-btn" onClick={() => currentUser?.role === "admin" ? setPage("admin") : openAuth("login")}>Open Admin Module</button></div>
      <div className="service-card"><h2>User Module</h2><p>Manage your profile, view bookings and plan trips.</p><button className="main-btn" onClick={() => currentUser?.role === "user" ? setPage("user") : openAuth("login")}>Open User Module</button></div>
    </div>
    {!currentUser && <p className="hint">Please log in to access a dashboard. New users can create an account from the login page.</p>}
    <p className="hint">Demo admin login: <b>admin@travelease.com</b> / <b>admin123</b></p>
  </div>;
}
export default Modules;
