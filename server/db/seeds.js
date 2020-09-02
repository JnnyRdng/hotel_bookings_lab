use hotel_bookings;

db.dropdatabase();

db.bookings.insertMany(
    [
        {
            name: "Jonny",
            email: "jonny@email.com",
            checkedIn: false
        },
        {
            name: "Marek",
            email: "marek@email.com",
            checkedIn: true
        },
        {
            name: "Jarrod",
            email: "hotpink@email.com",
            checkedIn: false
        }
    ]
);