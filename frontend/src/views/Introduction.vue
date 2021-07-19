<template>
    <div>
        <div class="vl"></div>
        <div class="container-fluid m-2" id="timeline">
            <div class="row">
                <div class="col-4"><h2>menyasszony</h2></div>
                <div class="col-4"></div> 
                <div class="col-4"><h2>vőlegény</h2></div>
            </div>
<img id="birthImage" src="../assets/logo.png">
            <div class="row">
                <div class="col-4"></div> 
                <div class="col-2"><h4>1997.01.27</h4></div>
                <div class="col-2"><h4>1996.01.05</h4></div>
                <div class="col-4"></div> 
            </div>
          
                <h3>Szinte pontosan egy évnyi különbséggel láttuk meg a napvilágot Miskolcon.
                      És bár meseszerű egymásra találásunk előtt nem ismertük egymást, életutunkból mégis kitűnik a sors édes fintora, ahogy hagyta, hogy ismeretlenül,
                       a másik létezéséről sem tudva kerülgessük és kövessük egymást.</h3>

                 
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style scoped>
.vl{
    border-left: 6px solid black;
    height: 100vh;
    position: absolute;
    left: 50%;
    top:25em;
}
#timeline{
    padding-top: 10em;
}
#birthImage{
    width: 10em;
}
</style>