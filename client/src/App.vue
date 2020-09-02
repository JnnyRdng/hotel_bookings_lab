<template>
<div id="main">
    <h3>Hello from the main side</h3>
    <section id="formSection">
        <h4>Hello from the form section</h4>
           <booking-form>     
    </section>
    <section id="displayBookings">
        <h4>Hello from the booking list section</h4>
        <booking-list> 
    </section>
</div>
</template>

<script>
import BookingForm from '@components/BookingForm.vue';
import BookingList from '@components/BookingList.vue';

export default {
    name: 'app',
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