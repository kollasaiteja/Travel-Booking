function Itinerary() {
    return (
        <div className="page">
            <h1>Trip Itinerary</h1>

            <p>Plan your complete trip with TravelEase.</p>

            <input
                type="text"
                placeholder="Enter destination"
            />

            <input
                type="number"
                placeholder="Number of days"
                min="1"
            />

            <button className="main-btn">
                Generate Itinerary
            </button>
        </div>
    );
}

export default Itinerary;