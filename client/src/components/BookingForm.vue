<template>
    <form v-on:submit.prevent="handleFormSubmit">
        <div class="form-input">
            <label for="name">Name:</label>
            <input type="text" id="name" required v-model="newBooking.name" />
        </div>
        <div class="form-input">
            <label for="email">Email:</label>
            <input type="text" id="email" required v-model="newBooking.email" />
        </div>
        <div class="form-input">
            <label for="checked-in">Checked In:</label>
            <input type="checkbox" id="checked-in" v-model="newBooking.checkedIn" />
        </div>
        <div class="form-input">
            <input type="submit" value="Book in guest" />
        </div>
    </form>
</template>

<script>
import BookingService from "@/services/BookingService.js";
import { eventBus } from "@/main.js";
export default {
    name: "booking-form",
    data() {
        return {
            newBooking: { name: "", email: "", checkedIn: false },
            bookingToEdit: null,
        };
    },
    methods: {
        handleFormSubmit: function () {
            BookingService.addBooking(this.newBooking).then((booking) => {
                eventBus.$emit("new-booking", booking);
                this.newBooking = { name: "", email: "", checkedIn: false };
            });
        },
    },
};
</script>

<style>
form {
    display: grid;
}
</style>