const baseURL = "http://localhost:3000/api/hotel_bookings";

export default {
    getBookings() {
        return fetch(baseURL).then(
            res => res.json()
        );
    },
    addBooking(payload) {
        return fetch(baseURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
            .then(res => res.json());
    },
    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: "DELETE"
        });
    }
}