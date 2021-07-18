<template>
    <div class="container-fluid">
        <div class="form-group row m-2">
            <label class="col-2 col-form-label" for="name">Név </label>
            <div class="col-10">
                <input type="text" v-model="attendee.name" class="form-control" id="name"
                       aria-describedby="nameHelp" placeholder="Név">
                <small id="nameHelp" class="form-text text-muted">Kérem a teljes nevét adja meg.</small>
            </div>
        </div>

        <div class="form-group row m-2">
            <label class="col-4 col-form-label" for="age">Kor az esküvő napján</label>
            <div class="col-8">
                <input type="Number" v-model="attendee.age" class="form-control" id="age" aria-describedby="ageHelp"
                       placeholder="Kor">
                <small id="ageHelp" class="form-text text-muted">Kérem a teljes nevét adja meg.</small>
            </div>
        </div>
        <div class="row">
            <div class="offset-2 col-8">
                <div class="form-group row">
                    <div class="col-sm-8">Laktózérzékenység</div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" v-model="attendee.lactose" type="checkbox"
                                   id="laktozeCheck">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-8">Tej allergia</div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="attendee.milk" id="milkCheck">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-8">Glutén allergia</div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="attendee.gluten"
                                   id="glutenCheck">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-8">Vegán</div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="attendee.vegan"
                                   id="VeganCheck">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-8">Cukor</div>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="attendee.sugar"
                                   id="SugarCheck">
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <div class="form-group row m-2">
            <label class="col-2 col-form-label" for="name">Egyéb</label>
            <div class="col-10">
                <input type="text" class="form-control" id="othreCheck" aria-describedby="otherHelp"
                       placeholder="Egyéb" v-model="attendee.other">
                <small id="otherHelp" class="form-text text-muted">Listában nem szereplő étel igény.</small>
            </div>

        </div>
        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Részvétel</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ChurchRadio" id="ChurchRadio"
                               value="templom" v-model="attendee.attend">
                        <label class="form-check-label" for="ChurchRadio">Templomi Szertartás</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="ChurchRadio" id="PartyRegio"
                               value="minden" checked v-model="attendee.attend">
                        <label class="form-check-label" for="PartyRegio">Templomi szertartás és lagzi</label>
                    </div>
                </div>
            </div>
        </fieldset>

    </div>
</template>

<script>
    export default {
        name: "RegistrationForm",
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
</style>