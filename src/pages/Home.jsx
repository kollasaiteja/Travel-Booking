
function Home({ setPage }) {
    return (
        <div className="page">
            <h1>Welcome to TravelEase</h1>

            <h2>Your Smart Travel Partner</h2>

            <p>
                Plan your trips, book your travel services,
                and explore destinations easily with TravelEase.
            </p>

            <button
                className="main-btn"
                onClick={() => setPage("services")}
            >
                Explore Now
            </button>
        </div>
    );
}

export default Home;
