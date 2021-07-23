<template>
  <div class="home">
    <img alt="Jegyes Kép" src="../assets/background.jpg">
    <div>
      <div class="container-fluid">
        <h1>Köszöntünk az esküvői weboldalunkon!</h1>
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
@media (max-width: 1081px){
.home{
  padding-top:4em;
}
}
img{
  max-height: 90vh;
  width: 100%;
  top: -30px;
  position: relative;

}
.container-fluid{
  max-width: 100%;
}
</style>