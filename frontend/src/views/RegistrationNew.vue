<template>
    <div class="container">
        <div class="text text-left">
            <h2 >Visszajelzés</h2>
            <div class="my-padding row">
                <div class="col-lg-6">
                    <div v-if="firstPage">
                        <BaseRegistrationForm :attendee="attendee" v-on:submitted="nextpage()" />
                    </div>
                    <div v-else-if="registered">
                        <div v-if="attendee.attend=='semmi'">
                            <RegistrationInfoSad :attendee="attendee" />
                        </div>
                        <div v-else>
                            <RegistrationInfo :attendee="attendee" :attendees="attendees"/>
                        </div>
                    </div>
                     
                    <div v-else>
                        <div v-if="canBring">
                            <FamilyRegistrationFrom :attendee="attendee" :attendees="attendees" :sending="sending" v-on:submitted="register()"/>
                        </div>
                        <div v-else>
                             <SingleRegistrationFrom :attendee="attendee" :sending="sending" v-on:submitted="register()"/>
                        </div>  
                    </div>
                </div>
                <div class="col-lg-4 my_border">
                <br>
                    <h3>Óhaj-sóhaj, észrevétel:</h3>
                    <contactBase/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import contactBase from "../components/ContactBase.vue"
import BaseRegistrationForm from "../components/BaseRegistrationForm.vue"
import SingleRegistrationFrom from "../components/SingleRegistrationFrom.vue"
import FamilyRegistrationFrom from"../components/FamilyRegistrationFrom.vue"
import RegistrationInfo from "../components/RegistrationInfo.vue"
import RegistrationInfoSad from "../components/RegistrationInfoSad.vue"

import axios from "axios"
    export default {
        name: "Registration",
        components:{
            contactBase,
            BaseRegistrationForm,
            SingleRegistrationFrom,
            FamilyRegistrationFrom,
            RegistrationInfo,
            RegistrationInfoSad
            },
        data() {
            return {
                attendees:[],
                attendee: {
                    name: "",
                    email:"",
                    age: 19,
                    lactose: false,
                    milk: false,
                    gluten: false,
                    vegan: false,
                    other: "",
                    attend: "minden",
                    bor:false,
                    szaraz:false,
                    edes:false,
                    roze:false,
                    voros:false,
                    feher:false,
                    palinka:false,
                    jager:false,
                    baileys:false,
                    vodka:false,
                    whisky:false,
                    tequila:false
                },
                firstPage:true,
                canBring:true,
                registered:false,
                sending:false
            }
        },
        created:function(){
            console.log(this.attendee.name.lenght)
        },
        methods: {
            async nextpage() {
                console.log("I was called");
                console.log(this.attendee);
                if(this.attendee.name && this.attendee.email){
                    if(this.attendee.attend=='semmi'){
                        await axios.post('/api/attendee', this.attendee).then(async (res) => {
                            console.log(res.data.id);
                            this.registered=true;
                            this.firstPage=false;
                            this.$forceUpdate();
                        });
                    }
                    else{
                        let name = this.attendee.name.toLowerCase().replace(/\s/g, "")
                        if(name==="nagyeszter"|| name==="balázslea"||name==="kababikbianka"||name==="kecskéskarina"||name==="szegeczkinóra"||name==="takácsanna"){
                        this.canBring=false;
                    }else{
                        this.canBring=true;
                    }
                    if(this.canBring){
                        console.log("attendee added to attendees" );
                    }
                    this.firstPage=false;

                    this.$forceUpdate();
                    }
                    

                }

            },
            async register(){
                console.log("register method called");
                if(this.attendee.terms){
                    this.sending=true;
                    axios.post('/api/attendee', this.attendee).then(async (res) => {
                    console.log(res.data.id);
                    let parentId = res.data.id;
                    let success = true;
                    if (this.canBring || this.attendees.length > 0) {
                        for (let i = 0; i < this.attendees.length; i++) {
                            this.attendees[i].parentId = parentId;
                            this.attendees[i].attend=this.attendee.attend;
                            let result = await axios.post('/api/attendee', this.attendees[i]);
                            console.log(await result);
                            if(!result){
                                success=false;
                            }
                        }
                        
                        console.log(success);
                        let toast = this.$toasted.show("Sikeres Regisztráció");
                        toast.goAway(3000);
                    } else {
                        let toast = this.$toasted.show("Sikeres Regisztráció");
                        toast.goAway(3000);
                    }
                    if(success){
                            this.registered=true;
                            this.$forceUpdate();

                        }
                }).catch((err) => {
                    console.log(err)
                    this.sending=false;
                });
                }
                else {
                        let toast = this.$toasted.show("Nem fogadta el a felhasználási feltételeket");
                        toast.goAway(3000);
                }
                


                }
            }
    }
</script>

<style scoped>

@media (min-width: 1079px){
    .container{
        margin-top: 5em;
        width:80em;
    }
    .my-padding{
    margin-top:1em;
}
}
@media (max-width: 1081px){
    .container{
        margin-top: 4em;
    }
}


.text-left{
    text-align:left;
}

.my_border{
    border: solid 2px black;
    background-color:rgba(250,250,250,0.7);
    height:23em;
    max-width:90vw;
    margin:auto;
    margin-top:5em;
   
}
</style>