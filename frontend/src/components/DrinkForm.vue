<template>
    <div >
        <div class="row">
        <h4>Alkohol igényfelmérés:</h4>
        
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.bor" id="borCheck" :disabled="attendee.age<18">
                <span>Bor</span>
            </div>
        </div>
        <div v-show="attendee.bor" class="left_padding">
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.szaraz" id="szarazCheck" >
                    <span :class="{'disabled':attendee.age<18}">Száraz</span>
                </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.edes" id="edesCheck">
                    <span>Édes</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.roze" id="rozeCheck">
                    <span>Rozé</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.voros" id="vorosCheck">
                    <span>Vörös</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="attendee.feher" id="feherCheck">
                    <span>Fehér</span>
                </div>
            </div>
        </div>
        
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input class="form-check-input" v-model="attendee.palinka" type="checkbox" id="palinkaCheck" :disabled="attendee.age<18">
                <span>Pálinka</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.jager" id="jagerCheck" :disabled="attendee.age<18">
                <span>Jägermeister</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.baileys" id="baileysCheck" :disabled="attendee.age<18">
                <span>Baileys</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.vodka" id="vodkaCheck" :disabled="attendee.age<18">
                <span>Vodka</span>
            </div>
        </div>
           <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.whisky" id="whiskyCheck" :disabled="attendee.age<18">
                <span>Whisky</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="attendee.tequila" id="tequilaCheck" :disabled="attendee.age<18">
                <span>Tequila</span>
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
.disabled{
    color:darkgray;
}
.left_padding{
    padding-left: 3em;
}
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