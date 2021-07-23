<template>
  <div class="container">
    <form @submit="register">
        <h2>{{attendee.name}}</h2>
        <AllergyForm :attendee="attendee" class="my-padding"/>
        <div class="m-2 h4 font-weight-bold" v-if="attendees.length<1">
            <br>
            <button type="button" class="btn btn-plus " @click="add(k)">+1 Fő hozzáadása</button>
        </div>
        <div class="plus-person">
        <div v-for="(attendee,k) in attendees" :key="k">
            <div class="row">
                <div class="form-group my-padding col-7">
                    <label class="col-form-label" for="name">Név </label>
                        <input type="text" v-model="attendee.name" class="form-control" id="name"  placeholder="Jóska Pistike">
                </div>
                <div class="form-group my-padding col-3">
                    <label class="col-form-label" for="name">Kor </label>
                        <input type="number" v-model="attendee.age" class="form-control" id="age">
                </div>
                <div class="col-1 form-group my-padding">
                    <button type="button" class="btn btn-remove " @click="remove(k)">X</button>
                </div>
            </div>
            <AllergyForm :attendee="attendee"/>
            <div class="m-2 h4 font-weight-bold">
                <br>
                <button type="button" class="btn btn-plus " @click="add(k)" v-show="k == attendees.length-1">+1 Fő hozzáadása</button>
            </div>

        </div>
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
    export default {
        name: "FamilyRegistrationFrom",
        components: {AllergyForm},
        props: {
            attendee: {required: true},
            attendees:{required: true}

        },
        created: function(){
            console.log(this.attendees)
        },
        methods: {
            async register(e) {
                e.preventDefault();
                this.$emit("submitted",this.attendee);
            },
            add(){
                this.attendees.push({
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
                });
            },
            remove(index) {
                if (confirm("Biztosan törli a személyt?")) {
                    this.attendees.splice(index, 1);
                }
            },
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
.btn{
    border:solid 1px lightgray
}
.btn-plus{
    background-color:rgba(230,230,230,0.7)
}
.btn-remove{background-color:rgba(230,230,230,0.7)

}
.bottom_padding{
    padding-top:1em;
    padding-bottom:3em;
}
@media (min-width: 1079px){
.plus-person{
    max-width:37em
}
}
</style>