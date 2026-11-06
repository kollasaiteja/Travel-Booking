import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Itinerary from "./pages/Itinerary";
import Alerts from "./pages/Alerts";
import Modules from "./pages/Modules";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("travelEaseCurrentUser") || "null"); }
    catch { return null; }
  });
  const [authMode, setAuthMode] = useState("login");
  const [notice, setNotice] = useState("");

  function openAuth(mode = "login") { setAuthMode(mode); setPage("auth"); }
  function handleLogin(user) {
    localStorage.setItem("travelEaseCurrentUser", JSON.stringify(user));
    setCurrentUser(user);
    setNotice(`Welcome, ${user.name}!`);
    setPage(user.role === "admin" ? "admin" : "user");
  }
  function logout() {
    localStorage.removeItem("travelEaseCurrentUser");
    setCurrentUser(null);
    setNotice("You have been logged out.");
    setPage("home");
  }

  return <div className="app">
    <Navbar setPage={setPage} currentUser={currentUser} onLogin={() => openAuth("login")} onLogout={logout} />
    {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss">×</button></div>}
    <main>
      {page === "home" && <Home setPage={setPage} />}
      {page === "services" && <Services currentUser={currentUser} onLogin={() => openAuth("login")} />}
      {page === "itinerary" && <Itinerary />}
      {page === "alerts" && <Alerts />}
      {page === "modules" && <Modules setPage={setPage} currentUser={currentUser} openAuth={openAuth} />}
      {page === "auth" && <Auth initialMode={authMode} onLogin={handleLogin} onCancel={() => setPage("modules")} />}
      {page === "user" && (currentUser?.role === "user" ? <UserDashboard user={currentUser} setPage={setPage} onLogout={logout} /> : <Modules setPage={setPage} currentUser={currentUser} openAuth={openAuth} />)}
      {page === "admin" && (currentUser?.role === "admin" ? <AdminDashboard setPage={setPage} onLogout={logout} /> : <Modules setPage={setPage} currentUser={currentUser} openAuth={openAuth} />)}
    </main>
    <Footer />
  </div>;
}
export default App;
