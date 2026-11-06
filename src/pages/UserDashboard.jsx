function UserDashboard({ user, setPage, onLogout }) {
  const bookings = JSON.parse(localStorage.getItem("travelEaseBookings") || "[]").filter(b => b.userEmail === user.email);
  return <div className="page"><h1>Welcome, {user.name}</h1><p>User Dashboard</p><div className="dashboard-stats"><div className="panel"><h2>{bookings.length}</h2><p>My bookings</p></div></div>
    <div className="panel dashboard-panel"><h2>My Travel Bookings</h2>{bookings.length ? <div className="table-wrap"><table><thead><tr><th>Booking ID</th><th>Service</th><th>From</th><th>Destination</th><th>Date</th><th>Status</th></tr></thead><tbody>{bookings.map(b => <tr key={b.id}><td>{b.id}</td><td>{b.service}</td><td>{b.from}</td><td>{b.destination}</td><td>{b.date}</td><td>{b.status || "Confirmed"}</td></tr>)}</tbody></table></div> : <p>You have no bookings yet.</p>}<button className="main-btn" onClick={() => setPage("services")}>Book a Service</button> <button className="cancel-btn" onClick={onLogout}>Logout</button></div>
  </div>;
}
export default UserDashboard;
