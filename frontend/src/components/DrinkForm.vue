<template>
    <div class="normal_font">
        <div class="row">
        <h4>Ital preferencia:</h4>
        <div class="form-group row">
            <div class="form-check">
                <input class="form-check-input" v-model="attendee.palinka" type="checkbox" id="palinkaCheck">
                <span>Pálinka</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.bor" id="borCheck">
                <span>Bor</span>
            </div>
        </div>

        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.jager" id="jagerCheck">
                <span>Jägermeister</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.baileys" id="baileysCheck">
                <span>Baileys</span>
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
        name: "DrinkForm",
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