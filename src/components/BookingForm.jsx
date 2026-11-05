
import { useState } from "react";

function BookingForm({ service, onClose }) {
    const [from, setFrom] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [travellers, setTravellers] = useState("1");
    const [nights, setNights] = useState("1");

    function submitBooking(e) {
        e.preventDefault();

        const booking = {
            id: "BOOK-" + Date.now(),
            service,
            from,
            destination,
            date,
            travellers,
            nights: service === "Hotel" ? nights : null
        };

        const bookings = JSON.parse(
            localStorage.getItem("travelEaseBookings") || "[]"
        );

        bookings.push(booking);

        localStorage.setItem(
            "travelEaseBookings",
            JSON.stringify(bookings)
        );

        alert(service + " booked successfully!");

        onClose();
    }

    return (
        <div className="booking-form">
            <h2>{service} Booking</h2>

            <form onSubmit={submitBooking}>
                <input
                    type="text"
                    placeholder="Starting Location"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="1"
                    placeholder="Number of Travellers"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    required
                />

                {service === "Hotel" && (
                    <input
                        type="number"
                        min="1"
                        placeholder="Number of Nights"
                        value={nights}
                        onChange={(e) => setNights(e.target.value)}
                        required
                    />
                )}

                <button type="submit" className="main-btn">
                    Confirm Booking
                </button>

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default BookingForm;
