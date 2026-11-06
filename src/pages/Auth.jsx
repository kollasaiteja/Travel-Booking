import { useState } from "react";
function Auth({ initialMode = "login", onLogin, onCancel }) {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState(""); const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); const [confirm, setConfirm] = useState(""); const [error, setError] = useState("");
  function submit(e) {
    e.preventDefault(); setError("");
    const users = JSON.parse(localStorage.getItem("travelEaseUsers") || "[]");
    if (mode === "signup") {
      if (password.length < 6) return setError("Password must contain at least 6 characters.");
      if (password !== confirm) return setError("Passwords do not match.");
      if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return setError("An account with this email already exists.");
      const user = { id: Date.now(), name: name.trim(), email: email.trim().toLowerCase(), password, role: "user" };
      localStorage.setItem("travelEaseUsers", JSON.stringify([...users, user])); onLogin({ name: user.name, email: user.email, role: "user" });
    } else {
      if (email.toLowerCase() === "admin@travelease.com" && password === "admin123") return onLogin({ name: "Administrator", email: "admin@travelease.com", role: "admin" });
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!user) return setError("Invalid email or password. Please sign up first if you are a new user.");
      onLogin({ name: user.name, email: user.email, role: "user" });
    }
  }
  return <div className="page"><div className="panel auth-panel"><h1>{mode === "login" ? "Login to TravelEase" : "Create your account"}</h1>
    <form onSubmit={submit}>{mode === "signup" && <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required />}
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      {mode === "signup" && <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" required />}
      {error && <p className="error" role="alert">{error}</p>}<button className="main-btn" type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
    </form><p>{mode === "login" ? "Don't have an account?" : "Already registered?"} <button className="text-btn" onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}>{mode === "login" ? "Sign up" : "Login"}</button></p>
    <button className="cancel-btn" onClick={onCancel}>Back</button>
    {mode === "login" && <p className="hint">Demo admin: admin@travelease.com / admin123</p>}
  </div></div>;
}
export default Auth;
