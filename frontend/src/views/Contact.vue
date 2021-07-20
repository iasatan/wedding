<template>
    <div class="container">
        <h1> Kapcsolat</h1>

        <br>
        <h3>Amennyiben bármilyen probléma, vagy kérdés felmerülne, az alábbi elérhetőségek valamelyikén lehet minket keresni (preferált a szöveges üzenet :) )</h3>        
        <contactBase />
        

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
    border:black solid 3px
}
</style>