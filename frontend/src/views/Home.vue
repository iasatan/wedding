<template>
  <div class="home">
    <img alt="Jegyes Kép" src="../assets/backgroundHR.jpg">
    <div>
      <div class="container-fluid">
        <h1>Köszöntünk az esküvői weboldalunkon!</h1>
        <br>
        <h3><i>- Pont jókor jössz, mert ez a nap legjobb része.</i></h3>
        <h3><i>- Melyik az a rész?.</i></h3>
        <h3><i>- Az, amikor te meg én mi leszünk.</i></h3>
        <br>
        <h3>Itt találhatók meg az esküvővel kapcsolatos információk, visszajelezhető az esemény, valamint a jövőben feltöltjük az esküvőn készült képeket. Addig is reméljük, hasonlóan izgatottan várod a napot, mint mi :)</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
#dateDiv{
  position:absolute;
  width: 100%;
  text-align: center;
}
#dateSpan{
  top:10%;
  width:100%;
  text-align: center;
  color:white;
  z-index: 1000;
  font-size:10em;
   text-shadow: 2px 2px #96989a;
  position: absolute;
}
@media (max-width: 1081px){
  .home{
    padding-top:4em;
  }
  #dateSpan{
  top:10%;
  font-size:3em;
}
}
img{
  width: 100%;
  top: -30px;
  position: relative;

}
.container-fluid{
  max-width: 100%;
}
</style>