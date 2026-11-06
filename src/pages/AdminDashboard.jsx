import { useState } from "react";
function AdminDashboard({ setPage, onLogout }) {
  const [refresh, setRefresh] = useState(0);
  const users = JSON.parse(localStorage.getItem("travelEaseUsers") || "[]");
  const bookings = JSON.parse(localStorage.getItem("travelEaseBookings") || "[]");
  function removeBooking(id) { localStorage.setItem("travelEaseBookings", JSON.stringify(bookings.filter(b => b.id !== id))); setRefresh(refresh + 1); }
  return <div className="page"><h1>Admin Dashboard</h1><p>Manage TravelEase users and bookings.</p><div className="dashboard-stats"><div className="panel"><h2>{users.length}</h2><p>Registered users</p></div><div className="panel"><h2>{bookings.length}</h2><p>Total bookings</p></div></div>
    <section className="panel dashboard-panel"><h2>Registered Users</h2>{users.length ? <div className="table-wrap"><table><thead><tr><th>Name</th><th>Email</th></tr></thead><tbody>{users.map(u => <tr key={u.id}><td>{u.name}</td><td>{u.email}</td></tr>)}</tbody></table></div> : <p>No registered users yet.</p>}</section>
    <section className="panel dashboard-panel"><h2>All Bookings</h2>{bookings.length ? <div className="table-wrap"><table><thead><tr><th>ID</th><th>User</th><th>Service</th><th>Destination</th><th>Date</th><th>Action</th></tr></thead><tbody>{bookings.map(b => <tr key={b.id}><td>{b.id}</td><td>{b.userEmail || "Guest"}</td><td>{b.service}</td><td>{b.destination}</td><td>{b.date}</td><td><button className="small-danger" onClick={() => removeBooking(b.id)}>Delete</button></td></tr>)}</tbody></table></div> : <p>No bookings available.</p>}</section>
    <button className="main-btn" onClick={() => setPage("services")}>View Services</button> <button className="cancel-btn" onClick={onLogout}>Logout</button>
  </div>;
}
export default AdminDashboard;
