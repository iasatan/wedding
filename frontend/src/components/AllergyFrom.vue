<template>
    <div >
        <div class="row">
        <h4>Ételérzékenység/életmód:</h4>
        <div class="form-group row">
            <div class="form-check">
                <input class="form-check-input" v-model="attendee.lactose" type="checkbox" id="laktozeCheck">
                <span>Laktóz</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.milk" id="milkCheck">
                <span>Tejfehérje</span>
            </div>
        </div>

        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.gluten" id="glutenCheck">
                <span>Glutén</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.vegan" id="VeganCheck">
                <span>Vegán</span>
            </div>
        </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="OtherCheck">
                    <input type="text" class="form-control my_label" id="othreCheck" placeholder="Egyéb" v-model="attendee.other">

                </div>
            </div>
    </div>


    <div class="form-group">


    </div>
    </div>
</template>

<script>
    export default {
        name: "AllergyForm",
        props: {
            attendee: {required: true}

        }
    }
</script>

<style scoped>
    .container-fluid {
        width: 50em;
        max-width: 100vh;
        min-width: 500px;
    }
    .my_label{
        width:15em;
    }
    .normal_font{
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>