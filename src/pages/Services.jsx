
import { useState } from "react";
import BookingForm from "../components/BookingForm";

function Services({ currentUser, onLogin }) {
    const [selectedService, setSelectedService] = useState("");

    return (
        <div className="page">
            <h1>Travel Services</h1>

            <div className="service-container">

                <div className="service-card">
                    <h2>✈️ Flight Booking</h2>
                    <p>Book your flights easily.</p>
                    <button
                        className="main-btn"
                        onClick={() => currentUser ? setSelectedService("Flight") : onLogin()}
                    >
                        Book Flight
                    </button>
                </div>

                <div className="service-card">
                    <h2>🏨 Hotel Booking</h2>
                    <p>Find comfortable hotels.</p>
                    <button
                        className="main-btn"
                        onClick={() => currentUser ? setSelectedService("Hotel") : onLogin()}
                    >
                        Book Hotel
                    </button>
                </div>

                <div className="service-card">
                    <h2>🚕 Cab Booking</h2>
                    <p>Arrange local transportation.</p>
                    <button
                        className="main-btn"
                        onClick={() => currentUser ? setSelectedService("Cab") : onLogin()}
                    >
                        Book Cab
                    </button>
                </div>

            </div>

            {selectedService && (
                <BookingForm
                    service={selectedService}
                    currentUser={currentUser}
                    onClose={() => setSelectedService("")}
                />
            )}
        </div>
    );
}

export default Services;
