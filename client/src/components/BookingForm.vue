<template>
    <form v-on:submit.prevent="handleFormSubmit">
        <div class="form-input">
            <label for="name">Name:</label>
            <input type="text" id="name" required v-model="name" />
        </div>
        <div class="form-input">
            <label for="email">Email:</label>
            <input type="text" id="email" required v-model="email" />
        </div>
        <div class="form-input">
            <label for="checked-in">Checked In:</label>
            <input type="checkbox" id="checked-in" v-model="checkedIn" />
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
    props: ["selectedBooking"],
    data() {
        return {
            newBooking: { name: "", email: "", checkedIn: false },
            bookingToEdit: null,
            name: "",
            email: "",
            checkedIn: false,
        };
    },

    // mounted() {

    //     if(this.selectedBooking){
    //         this.bookingToEdit = this.selectedBooking

    //     }
    // },
    methods: {
        handleFormSubmit: function () {
            // console.log(this.selectedBooking===true)
            this.newBooking = {name: this.name,
                    email: this.email,
                    checkedIn: this.checkedIn
            }
            if (this.selectedBooking) {
                BookingService.updateBooking(this.selectedBooking._id, this.newBooking).then(booking => {
                    eventBus.$emit("updated-booking", booking);
                    this.newBooking = { name: "", email: "", checkedIn: false };
                });
            } else {
                BookingService.addBooking(this.newBooking).then((booking) => {
                    eventBus.$emit("new-booking", booking);
                    this.newBooking = { name: "", email: "", checkedIn: false };
                });
            }
        },
    },
    watch: {
        selectedBooking: function () {
            if(this.selectedBooking){
            this.name = this.selectedBooking.name;
            this.email = this.selectedBooking.email;
            this.checkedIn = this.selectedBooking.checkedIn;
            // const newB = {name: this.name,
            //         email: this.email,
            //         checkedIn: this.checkedIn
            // }
            this.bookingToEdit = this.selectedBooking;

            // this.newBooking = this.bookingToEdit;
            }
        }
    }

};
</script>

<style>
form {
    display: grid;
}
</style>