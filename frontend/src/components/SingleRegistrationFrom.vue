<template>
    <div class="container">
    <form @submit="register">
        <div class="row">
            <h2>{{attendee.name}}</h2>
            <AllergyForm :attendee="attendee" class="my-padding"/>
            <DrinkForm :attendee="attendee" class="my-padding" v-show="attendee.attend=='minden'"/>
        </div>
        <div class="my-padding">
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.terms" id="termsCheck">
                    <span>A <a href="/img/aszf.pdf" download target="_blank">felhasználási feltételeket</a> elfogadom</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.mail" id="mailCheck">
                    <span>Feliratkozom a hírlevelekre</span>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="align-right col-lg-3 col-sm-12 bottom_padding">
                <button type="submit" class="btn btn-light" :disabled="sending">Küldés</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import AllergyForm from "./AllergyFrom"; 
import DrinkForm from "./DrinkForm"

    export default {
        name: "SingleRegistrationFrom",
        components: {AllergyForm, DrinkForm},
        props: {
            attendee: {required: true},
            sending:{required:true}

        },
        methods: {
            async register(e) {
                e.preventDefault();
                this.$emit("submitted",this.attendee);
            }
        }
    }
</script>

<style scoped>
    .container-fluid {
        max-width: 50em;
        min-width: 500px;
    }
    .my_label{
        width:15em;
    }
    .my-padding{
        padding-top: 2em;
}
.align-right{
   text-align:right;
}
.bottom_padding{
    padding-top:1em;
    padding-bottom:3em;
}
.btn{
    border:solid 1px lightgray
}
</style>