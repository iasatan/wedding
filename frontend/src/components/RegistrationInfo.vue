<template>
  <div class="container">
    <h1>Sikeres Regisztráció</h1>
    <h2>Kedves {{attendee.name}}!</h2>
    <div>Köszönjük a regisztrációt! </div>
    <div>Izgatottan várjuk, hogy találkozzunk az esküvőn<span v-show="attendees.length>0"> és együtt mulassunk</span>. </div>
    <div>Az esküvő dátuma 2021-09-04, várunk sok szeretettel 14:30-tól a Talizmán vendéglő kerthelyiségében. </div>
    <div v-show="attendee.attendeeAllergyCount>0"> 
        A következő<span v-show="attendeeAllergyCount>1">k</span>re igyekszünk figyelni a kedvedért:
        Nem fogyasztasz {{attendee.allergyText}}</div>

    <div v-show="attendees.length>0">
        <div class="my-padding-small">A következő általad megadott plusz főkkel fogunk számolni:</div>
        <div v-for="(attendee,k) in attendees" :key="k">
            <h4>{{attendee.name}}</h4>
            <div v-if="attendee.attendeeAllergyCount>0" class="my-padding-small"> 
                A következő<span v-show="attendeeAllergyCount>1">k</span>re igyekszünk figyelni a kedvéért:
                <div v-show="attendee.vegan">Vegán </div>
                <div v-show="attendee.gluten">Nem ehet</div>
                <div v-show="attendee.milk">Semmilyen tejterméket nem fogyaszthat</div>
                <div v-show="attendee.vegan">Laktózérzékenység</div>
                <div v-show="attendee.other">Egyéb: {{attendee.other}}</div>
            </div>
            <div class="my-padding-small" v-else>
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
        this.attendee.allergyText=" ";
        if(this.attendee.vegan){
            this.attendee.attendeeAllergyCount++;
            this.attendee.allergyText+="állati eredetű ételeket, ";
        }
        if(this.attendee.lactose){
            this.attendee.attendeeAllergyCount++;
            this.attendee.allergyText+="laktózt, ";
        }
        if(this.attendee.milk){
            this.attendee.attendeeAllergyCount++;
            this.attendee.allergyText+="tejterméket, ";
        }
        if(this.attendee.gluten){
            this.attendee.attendeeAllergyCount++;
            this.attendee.allergyText+="glutént, ";
        }
        if(this.attendee.other){
            this.attendee.attendeeAllergyCount++;
            this.attendee.allergyText+=this.attendee.other+", ";
        }
        this.attendee.allergyText=this.attendee.allergyText.slice(0,-2);
        this.attendee.allergyText+=".";
        for(let i = 0; i<this.attendees.length;i++){
            this.attendees[i].attendeeAllergyCount=0;
            this.attendees[i].allergyText=" ";
            if(this.attendees[i].vegan){
                this.attendees[i].attendeeAllergyCount++;
                this.attendees[i].allergyText+="állati eredetű ételeket, ";
            }
            if(this.attendees[i].lactose){
                this.attendees[i].attendeeAllergyCount++;
                this.attendees[i].allergyText+="laktózt, ";
            }
            if(this.attendees[i].milk){
                this.attendees[i].attendeeAllergyCount++;
                this.attendees[i].allergyText+="tejterméket, ";
            }
            if(this.attendees[i].gluten){
                this.attendees[i].attendeeAllergyCount++;
                this.attendees[i].allergyText+="glutént, ";
            }
            if(this.attendees[i].other){
                this.attendees[i].attendeeAllergyCount++;
                this.attendees[i].allergyText+=this.attendees[i].other+", ";
            }
            this.attendees[i].allergyText=this.attendees[i].allergyText.slice(0,-2);
            this.attendees[i].allergyText+=".";

        }
    }
}
</script>

<style scoped>
.my-padding-small{
    margin-top:2em;
}

</style>