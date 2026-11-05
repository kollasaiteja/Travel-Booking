
import { useState } from "react";
import BookingForm from "../components/BookingForm";

function Services() {
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
                        onClick={() => setSelectedService("Flight")}
                    >
                        Book Flight
                    </button>
                </div>

                <div className="service-card">
                    <h2>🏨 Hotel Booking</h2>
                    <p>Find comfortable hotels.</p>
                    <button
                        className="main-btn"
                        onClick={() => setSelectedService("Hotel")}
                    >
                        Book Hotel
                    </button>
                </div>

                <div className="service-card">
                    <h2>🚕 Cab Booking</h2>
                    <p>Arrange local transportation.</p>
                    <button
                        className="main-btn"
                        onClick={() => setSelectedService("Cab")}
                    >
                        Book Cab
                    </button>
                </div>

            </div>

            {selectedService && (
                <BookingForm
                    service={selectedService}
                    onClose={() => setSelectedService("")}
                />
            )}
        </div>
    );
}

export default Services;
