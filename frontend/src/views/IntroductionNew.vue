<template>
    <div class="container" id="timeline">
    <div class="text-left">
        <h2>Bemutatkozás (a menyasszony előadásában) </h2>
    </div>
        <div class="row">
            <img src="../assets/powerpoint1.png" class="col-lg"/>
        </div>
        <div class="row">
            <img src="../assets/powerpoint2.png" class="col-lg"/>
        </div>
        <div class="row">
            <img src="../assets/powerpoint3.png" class="col-lg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IntroductionNew"
    }
</script>

<style scoped>
.text-left{
    text-align:left;
}
@media (min-width: 1079px){
.container{
    padding-top:5em;
}
}
@media (max-width: 1081px){
.container{
    padding-top:3em;
}
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