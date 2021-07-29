<template>
    <div class="container">
    <form @submit="register">
        <div class="row">
            <h2>{{attendee.name}}</h2>
            <AllergyForm :attendee="attendee" class="my-padding"/>
            <DrinkForm :attendee="attendee" class="my-padding"/>
        </div>
        <h4 class="my-padding">Részvétel:</h4>
        <fieldset class="form-group">
            <div class="row">
                <div class="col-sm-10 col-lg-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ChurchRadio" id="ChurchRadioButton"
                               value="templom" v-model="attendee.attend">
                        <label class="form-check-label" for="ChurchRadioButton">Csak Szertartás</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ChurchRadio" id="PartyRadioButton"
                               value="minden" checked v-model="attendee.attend">
                        <label class="form-check-label" for="PartyRadioButton">Lakodalom és szertartás</label>
                    </div>
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="ChurchRadio" id="NothingRadioButton"
                               value="semmi" v-model="attendee.attend">
                        <label class="form-check-label" for="NothingRadioButton">Nem tudok résztvenni</label>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="row">
            <div class="align-right col-lg-3 col-sm-12 bottom_padding">
                <button type="submit" class="btn btn-light">Küldés</button>
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
            attendee: {required: true}

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