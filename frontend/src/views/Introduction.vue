<template>
    <div>
    <img src="../assets/powerpoint1.png"/>
        <div class="vl-sm-rl"></div>
        <div class="container" id="timeline">
            <div class="row">
                <div class="col-4"><h2>menyasszony</h2></div>
                <div class="col-4"></div> 
                <div class="col-4"><h2>vőlegény</h2></div>
            </div>
<img id="birthImage" src="../assets/logo.png">
<br>
<br>
            <div class="row">
                <div class="col-lg"></div> 
                <div class="col-sm"><h4>1997.01.27</h4></div>
                <div class="col-sm"><h4>1996.01.05</h4></div>
                <div class="col-lg"></div> 
            </div>
            <br>
          
                <h3>Szinte pontosan egy évnyi különbséggel láttuk meg a napvilágot Miskolcon.
                      És bár meseszerű egymásra találásunk előtt nem ismertük egymást, életutunkból mégis kitűnik a sors édes fintora, ahogy hagyta, hogy ismeretlenül,
                       a másik létezéséről sem tudva kerülgessük és kövessük egymást.</h3>
<div class="vl-sm"></div>
<br>
<br>
<br>
<img id="birthImage" src="../assets/logo.png">
<br>
            <div class="vl-lg"></div>
            <div class="row">
                <img class="col-lg" src="../assets/szonjaIskola.jpg">    
                <div class="col-sm schoolLabel"><h4>2003</h4></div>
                <div class="col-sm schoolLabel2"><h4>2002</h4></div>
                <img class="col-lg" src="../assets/adamIskola.jpg"> 
            </div>
            <br>
            <h3>Születési időnkből adódóan az iskolát is egy év különbséggel kezdtük el. Ekkor a helyszín még nem stimmelt, de már nagyon igyekeztem drága vőlegényem nyomdokaiba lépni.
</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style scoped>
.vl-sm-rl{
    border-left: 6px solid black;
    height: 10vh;
    position: relative;
    left: 50%;
    top:23em;
}
.vl-sm{
    border-left: 6px solid black;
    height: 10vh;
    position: absolute;
    left: 50%;
    top:37em;
}
.vl-lg{
    border-left: 6px solid black;
    height: 45vh;
    position: absolute;
    left: 50%;
}
.container{
    padding-top:5em;
}
#birthImage{
    width: 10em;
}
.schoolLabel{
    padding-top: 2em;
}
.schoolLabel2{
    padding-top: 1em;
}
</style>