<template>
    <div class="container">
        <div class="text text-left">
            <h2 >Visszajelzés</h2>
            <div class="my-padding row">
                <div class="col-6">
                    <div v-if="firstPage">
                        <BaseRegistrationForm :attendee="attendee" v-on:submitted="nextpage()" />
                    </div>
                    <div v-else>
                        <div v-if="canBring">
                            <FamilyRegistrationFrom :attendee="attendee" v-on:submitted="register()"/>
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
                    canBring:false
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
                this.firstPage=false;
                this.$forceUpdate();
                if(this.attendee.canBring){
                    console.log(this.attendee.canBring)
                }
            },
            async register(){
                console.log(this.attendee);
            }
        }
    }
</script>

<style scoped>
.container{
    max-width: 50em;;
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