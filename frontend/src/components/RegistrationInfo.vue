<template>
  <div class="container">
    <h1>Sikeres Regisztráció</h1>
    <h2>Kedves {{attendee.name}}!</h2>
    szívesen látunk!
    Az esküvő időpontja 2021-09-04 15:00, ments el a naptáradba ;)
    <div v-show="attendee.attendeeAllergyCount>0"> 
        A következő<span v-show="attendeeAllergyCount>1">k</span>re igyekszünk figyelni a kedvedért:
        <div v-show="attendee.vegan">Vegán vagy</div>
        <div v-show="attendee.gluten">Nem ehetsz glutént</div>
        <div v-show="attendee.milk">Semmilyen tejterméket nem fogyaszthatsz </div>
        <div v-show="attendee.vegan">Laktózérzékeny vagy</div>
        <div v-show="attendee.other">Egyéb: {{attendee.other}}</div>
    </div>

    <div v-show="attendees.length>0">
        <h3>A következő általad megadott plusz főkkel fogunk számolni:</h3>
        <div v-for="(attendee,k) in attendees" :key="k">
            <h4>{{attendee.name}}</h4>
            <div v-if="attendee.attendeeAllergyCount>0"> 
                A következő<span v-show="attendeeAllergyCount>1">k</span>re igyekszünk figyelni a kedvéért:
                <div v-show="attendee.vegan">Vegán </div>
                <div v-show="attendee.gluten">Nem ehet</div>
                <div v-show="attendee.milk">Semmilyen tejterméket nem fogyaszthat</div>
                <div v-show="attendee.vegan">Laktózérzékenység</div>
                <div v-show="attendee.other">Egyéb: {{attendee.other}}</div>
            </div>
            <div v-else>
            Nincs semmilyen kaja igénye
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RegistrationInfo',
    props: {
        attendee: {required: true},
        attendees:{required: true}
    },
    data() {
        return {
        }
    },
    created:function(){
        this.attendee.attendeeAllergyCount=0;
        if(this.attendee.vegan){
            this.attendee.attendeeAllergyCount++;
        }
        if(this.attendee.lactose){
            this.attendee.attendeeAllergyCount++;
        }
        if(this.attendee.milk){
            this.attendee.attendeeAllergyCount++;
        }
        if(this.attendee.gluten){
            this.attendee.attendeeAllergyCount++;
        }
        if(this.attendee.other){
            this.attendee.attendeeAllergyCount++;
        }
        for(let i = 0; i<this.attendees.length;i++){
            this.attendees[i].attendeeAllergyCount=0;
            if(this.attendees[i].vegan){
            this.attendees[i].attendeeAllergyCount++;
        }
        if(this.attendees[i].lactose){
            this.attendees[i].attendeeAllergyCount++;
        }
        if(this.attendees[i].milk){
            this.attendees[i].attendeeAllergyCount++;
        }
        if(this.attendees[i].gluten){
            this.attendees[i].attendeeAllergyCount++;
        }
        if(this.attendees[i].other){
            this.attendees[i].attendeeAllergyCount++;
        }
        }
    }
}
</script>

<style scoped>

</style>