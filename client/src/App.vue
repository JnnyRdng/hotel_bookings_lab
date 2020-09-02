<template>
<div id="main">
    <h3>Hello from the main side</h3>
    <section id="formSection">
        <h4>Hello from the form section</h4>
           <booking-form :selectedBooking="selectedBooking" />     
    </section>
    <section id="displayBookings">
        <h4>Hello from the booking list section</h4>
        <booking-list :bookings="bookings" /> 
    </section>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'
import BookingForm from '@/components/BookingForm.vue';
import BookingList from '@/components/BookingList.vue';

export default {
    name: 'app',
    data(){
        return {
            bookings: [],
            selectedBooking:null
        }
    },
    mounted () {

        BookingService.getBookings()
        .then(bookings => this.bookings = bookings);

        eventBus.$on('new-booking', booking => this.bookings.push(booking));
        eventBus.$on('remove-booking', (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id);
            this.bookings.splice(index,1);
        });
        eventBus.$on("update-booking", booking=> this.selectedBooking = booking);
        eventBus.$on("updated-booking", updatedBooking => {
            const index = this.bookings.findIndex(booking => booking._id = updatedBooking._id);
            this.bookings.splice(index, 1, updatedBooking);
            this.selectedBooking = null;
        })

    },

    components: {
        'booking-form': BookingForm,
        'booking-list': BookingList
    }
};
</script>

<style>
#main {
    padding: 0%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    border: solid black 2px;

}
#formSection{
    padding: 0%;
    margin: 0%;
    border: solid rgb(0, 71, 30) 2px;
}
#formSection{
    padding: 0%;
    margin: 0%;
    border: solid rgb(0, 71, 4) 2px;
}

</style>