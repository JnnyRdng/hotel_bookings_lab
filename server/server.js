const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const parser = require("body-parser");
const createRouter = require("./helpers/create_router.js");

const app = express();
app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        const db = client.db("bookings");
        const bookingsCollection = db.collection("hotel_bookings");
        const bookingsRouter = createRouter(bookingsCollection);
        app.use("/api/hotel_bookings", bookingsRouter);
    })
    .catch(console.err);


app.listen(3000, () => {
    console.log("App listening on port 3000")
});