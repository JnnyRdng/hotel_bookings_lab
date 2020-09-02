<template>
<article>
    <header>
        <input type="button" class="edit-button" value="Edit" v-on:click="handleEdit" />
        <input type="button" class="delete-button" value="Delete" v-on:click="handleDelete" />
    </header>
    <main>
        <h2>{{ booking.name }}</h2>
        <h3>{{ booking.email }}</h3>
        <div :class="booking.checkedIn ? 'checked-in' : 'checked-out'">Checked {{ booking.checkedIn ? 'in' : 'out' }}</div>
    </main>
</article>
</template>

<script>

import {eventBus} from '@/main.js'
import BookingServices from '@/services/BookingService.js'


export default {
    name: "booking-details",
    props: ["booking"],
    methods: {
        handleEdit: function() {},
        handleDelete: function() {
            BookingServices.deleteBooking(this.booking._id)
            .then(eventBus.$emit("remove-booking", this.booking._id))
        }
    }
};
</script>

<style>
.checked-in {
    background-color: green;
}
.checked-out {
    background-color: red;
}
</style>