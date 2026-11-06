import { useState } from "react";
function Itinerary() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3");
  const [startDate, setStartDate] = useState("");
  const [plan, setPlan] = useState([]);
  function generate(e) {
    e.preventDefault();
    const count = Math.min(14, Math.max(1, Number(days) || 1));
    const generated = Array.from({ length: count }, (_, i) => ({
      day: i + 1,
      title: i === 0 ? "Arrival and local exploration" : i === count - 1 ? "Shopping and departure" : "Explore the destination",
      morning: i === 0 ? `Arrive in ${destination} and check in` : `Visit popular attractions in ${destination}`,
      afternoon: `Explore local sights, markets and cultural places in ${destination}`,
      evening: `Enjoy local food and an evening walk in ${destination}`
    }));
    setPlan(generated);
    localStorage.setItem("travelEaseLastItinerary", JSON.stringify({ destination, days: count, startDate, plan: generated }));
  }
  return <div className="page">
    <h1>Trip Itinerary</h1><p>Generate a simple day-by-day plan for your trip.</p>
    <form className="panel itinerary-form" onSubmit={generate}>
      <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Enter destination" required />
      <input type="number" min="1" max="14" value={days} onChange={e => setDays(e.target.value)} placeholder="Number of days" required />
      <label>Start date <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></label>
      <button className="main-btn" type="submit">Generate Itinerary</button>
    </form>
    {plan.length > 0 && <section className="itinerary-results"><h2>Your {plan.length}-day trip to {destination}</h2>{plan.map(item => <article className="panel itinerary-day" key={item.day}><h3>Day {item.day}: {item.title}</h3><p><b>Morning:</b> {item.morning}</p><p><b>Afternoon:</b> {item.afternoon}</p><p><b>Evening:</b> {item.evening}</p></article>)}<button className="main-btn" onClick={() => window.print()}>Print Itinerary</button></section>}
  </div>;
}
export default Itinerary;
