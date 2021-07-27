<template>
    <div class="container extra-font">
        <h1> Kapcsolat</h1>

        <br>
        <h4 class="extra-font">Amennyiben bármilyen probléma, vagy kérdés felmerülne, az alábbi elérhetőségek valamelyikén lehet minket keresni (preferált a szöveges üzenet :) )</h4>
        <contactBase class="h4" />
        

    </div>
</template>

<script>
import contactBase from "../components/ContactBase.vue"
export default {
    name:'Contact',
    components:{
        contactBase
    }
}
</script>
<style  scoped>
.container{
    max-width: 50em;;
    margin-top: 5em;
    text-align: left;
    background-color:rgba(250,250,250,0.7);
}
.normal_font{
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
    .extra-font{
        font-family: 'Cormorant Upright', serif;
    }
</style>