<template>
    <div class="container">
        <div class="text text-left">
            <h2 >Visszajelzés!</h2>
            <div class="my-padding row">
                <div class="col-6">
                    <div v-if="firstPage">
                        <BaseRegistrationForm :attendee="attendee" v-on:submitted="nextpage()" />
                    </div>
                    <div v-else>
                        <div v-if="canBring">
                            <FamilyRegistrationFrom :attendee="attendee" :attendees="attendees" v-on:submitted="register()"/>
                        </div>
                        <div v-else>
                             <SingleRegistrationFrom :attendee="attendee" v-on:submitted="register()"/>
                        </div>  
                    </div>
                </div>
                <div class="offset-1 col-5 my_border">
                    <h3>Óhaj Sóhaj, észrevétel:</h3>
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
import axios from "axios"
    export default {
        name: "Registration",
        components:{
            contactBase,
            BaseRegistrationForm,
            SingleRegistrationFrom,
            FamilyRegistrationFrom      
            },
        data() {
            return {
                attendees:[],
                attendee: {
                    name: "",
                    email:"",
                    age: null,
                    lactose: false,
                    milk: false,
                    gluten: false,
                    vegan: false,
                    other: "",
                    attend: "minden",
                },
                firstPage:true,
                canBring:true
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
                    if(this.attendee.name.toLowerCase().replace(/\s/g, "")==="asd"){
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

            },
            async register(){
                console.log("register method called");
                axios.post('/api/attendee', this.attendee).then(async (res) => {
                    console.log(res.data.id);
                    let parentId = res.data.id;
                    let success = true;
                    if (this.canBring || this.attendees.length > 0) {
                        for (let i = 1; i < this.attendees.length; i++) {
                            this.attendees[i].parentId = parentId;
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
                }).catch(err => console.log(err));


                }
            }
    }
</script>

<style scoped>
.container{
    margin-top: 5em;
}
.text-left{
    text-align:left;
}
.my-padding{
    margin-top:5em;
}
.align-left{
    margin-left:20em
}
.btn{
    border:solid 1px lightgray
}
.my_border{
    border: solid 2px black;
    background-color:rgba(250,250,250,0.7);
    height:21em;
}
</style>