<template>
    <div class="container-fluid">
    <form @submit="register">
        <div class="row">
        <h2>{{attendee.name}}</h2>
        <h4 class="my-padding">Ételérzékenység/életmód:</h4>
                <div class="form-group row">
                    <div class="form-check">
                        <input class="form-check-input" v-model="attendee.lactose" type="checkbox" id="laktozeCheck">
                        <span>Laktózérzékenység</span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="attendee.milk" id="milkCheck">
                        <span>Tej allergia</span>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="attendee.gluten" id="glutenCheck">
                        <span>Glutén allergia</span>
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
                        <input type="checkbox" class="form-check-input" v-model="attendee.sugar" id="SugarCheck">
                        <span>Cukor</span>
                    </div>
                </div>
        </div>


        <div class="form-group">
            <span>Egyéb</span>
                           <input type="text" class="form-control my_label" id="othreCheck" placeholder="Egyéb" v-model="attendee.other">
        </div>
        <h4 class="my-padding">Részvétel:</h4>
        <fieldset class="form-group">
            <div class="row">
                <div class="col-sm-10">
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
        <div class="align-right">
            <button type="submit" class="btn btn-light">Regisztráció</button>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SingleRegistrationFrom",
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
        width: 50em;
        max-width: 100vh;
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
.btn{
    border:solid 1px lightgray
}
</style>