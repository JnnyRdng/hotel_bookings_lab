<template>
<div>
    <ul>
        <BookingDetail v-for="(booking, index) in bookings" :key="index" :booking="booking" />
    </ul>

</div>
</template>

<script>
import BookingDetail from "@/components/BookingDetails.vue"

export default {
    name: 'listOfBookings',
    props: ['bookings'],
    components: {
        BookingDetail  
        }
};
</script>

<style>
ul {
    padding: 2px;
    margin: 2px;
    display: flex;
    flex-direction: row;
    border: solid brown 2px;
}
</style>