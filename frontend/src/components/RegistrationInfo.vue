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
            <h6>{{attendee.name}}</h6>
            <div v-if="attendee.attendeeAllergyCount>0" class="my-padding-small"> 
                A következő<span v-show="attendeeAllergyCount>1">k</span>re igyekszünk figyelni a kedvéért:
                Nem fogyaszt {{attendee.allergyText}}
            </div>
            <div class="my-padding-small" v-else>
            Nincs semmilyen kaja igénye
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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

        let message="Sikeres Regisztráció!\n"+
            "Kedves "+ this.attendee.name+"!\n"+
            "Köszönjük a regisztrációt!\n"+
            "Izgatottan várjuk, hogy találkozzunk az esküvőn ";
        if(this.attendees&&this.attendees.length>0) {
            message += "és együtt mulassunk.";
        }
        message+="\nAz esküvő dátuma 2021-09-04, várunk sok szeretettel 14:30-tól a Talizmán vendéglő kerthelyiségében.\n";
        if(this.attendee.attendeeAllergyCount>0){
            message+="A következő";
            if(this.attendee.attendeeAllergyCount>1){
                message+="k";
            }
            message+="re igyekszünk figyelni a kedvedért:\n";
            message+="Nem fogyasztasz"+this.attendee.allergyText;
        }
        if(this.attendees && this.attendees.length>0){
            message+="\n\n\nA következő általad megadott plusz főkkel fogunk számolni:\n";
            for (let i = 0; i < this.attendees.length; i++) {
                message+=this.attendees[i].name+"\n";
                if(this.attendees[i].attendeeAllergyCount>0){
                    message+="A következő";
                    if(this.attendees[i].attendeeAllergyCount>1){
                        message+="k";
                    }
                    message+="re igyekszünk figyelni a kedvéért:\n";
                    message+="Nem fogyaszt"+this.attendees[i].allergyText;
                }
                else {
                    message += "Nincs semmilyen kaja igénye"
                }
            }
        }
        message+="\n\n Üdvözlettel,";
        message+="\nPapp Szonja és Sátán Ádám";
        axios.post('/api/attendee/email',{email:this.attendee.email,msg:message}).then(()=>{
            let toast = this.$toasted.show("Emailt kiküldtük");
            toast.goAway(3000);
        }).catch(()=>{
            let toast = this.$toasted.show("Email küldés sikertelen, kérlek mentsd el az információkat");
            toast.goAway(30000);
        })
    }
}
</script>

<style scoped>
.my-padding-small{
    margin-top:2em;
}

</style>