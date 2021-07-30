<template>
  <div class="container">
    <h1>Sikeres Regisztráció</h1>
    <h2>Kedves {{attendee.name}}!</h2>
    <div>Köszönjük a regisztrációt! </div>
    <div>Nagyon sajnáljuk, hogy nem tudsz jelen lenni az esküvőnkön.</div> 
    <p>Amennyiben később mégis úgy alakulna, hogy részt tudsz venni, vedd fel velünk a kapcsolatot, 
    és igyekszünk megoldani, hogy ott lehess </p>
  </div>
</template>

<script>
export default {
    name: 'RegistrationInfoSad',
    props: {
        attendee: {required: true}
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.my-padding-small{
    margin-top:2em;
}

</style>