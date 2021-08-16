<template>
    <div class="container">
        <form @submit="nextpage">
            <div class="form-group row m-2 my-padding">
                <label class="col-form-label" for="name">Név </label>
                <div class="col-lg-10 col-sm-12 normal_font ">
                    <input type="text" v-model="attendee.name" class="form-control" id="name"  placeholder="Jóska Pista">
                </div>
            </div>
            <div class="form-group row m-2">
                <label class="col-form-label" for="name">Email </label>
                <div class="col-lg-10 col-sm-12 normal_font">
                    <input type="email" v-model="attendee.email" class="form-control" id="email" placeholder="joskapista@gmail.com">
                </div>
            </div>
            <h4 class="my-padding-small">Részvétel:</h4>
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
            <div class="align-right col-lg-10 col-sm-12 bottom_padding">
                <button type="submit" class="btn btn-light">További adatok megadása</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name:'BaseRegistrationForm',
    props:{
        attendee:{
            required:true
        }
    },
    data() {
            return {
            }
        },
        methods: {
            async nextpage(e) {
                e.preventDefault();
                this.$emit("submitted",this.attendee);
            }
        }
}
</script>
<style  scoped>

@media (max-width: 1079px){
    .my_col{
        width:50em;
    }
}
.container{
    max-width: 50em;;
    text-align: left;

}
.container ::placeholder {
    color: #c5cbd5;
    font-size: 1em;
}
.my-padding{
    margin-top:5em;
}
.my-padding-small{
    margin-top:2em;
}
.left_padding{
    margin-left: 2em;
}
.btn{
    border:solid 1px lightgray
}
.align-right{
   text-align:right;
}
.bottom_padding{
    padding-top:1em;
    padding-bottom:3em;
}
.normal_font{
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>