<template>
  <div class="container">
    <div class="row">
      <h1>Helyszínek:</h1>
    </div>
    <div class="row">
      <img src="../assets/plate1.png"  class="col-1 image">
      <h3 class="col-8 m-4">Érkezés, polgári szertartás és lakodalom helyszíne:</h3>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="row"> 
          <h4>Talizmán Étterem és Panzió</h4>
        </div>
        <div class="row text-left "> 
          <h4 class="col-7">3534 Miskolc, Vár utca. 14.</h4>
        </div>
      <br>
      <div class="row">
        <img src="../assets/church.png"  class="col-1 image">
        <h3 class="col-8 m-4">Templomi esküvő helyszíne:</h3>
      </div>
      <div class="row"> 
        <h4>Diósgyőri Református Templom</h4>
      </div>
      <div class="row"> 
        <h4>3535 Miskolc, Táncsics Mihály tér  1.</h4>
      </div> 
      <br>
      <div class="row">
        <h3>P Parkoló:</h3>
      </div>
      <div class="row"> 
        <h4>Miskolc, Tapolcarét</h4>
      </div>
      <div class="row"> 
        <h4>Talizmán étteremben - korlátozott számban</h4>
      </div>
      </div>
      <div class="col-6">
          <img src="../assets/path.png">
      </div>
    </div>
    <div class="row">
      <h1>Menete:</h1>
      <div class="vl-lg"></div>
      <div class="row">
        <div class="col-6">
          <div class="row rightRow">
              <h4>Templomi szerartás 15:00</h4>
              <h4 class="my-padding">Templomi esküvő 16:30</h4>
              <h4 class="my-padding">Vacsora 19:00</h4>
              <h4 class="my-padding">Esküvői torta 23:00</h4>
          </div>
        </div>
        <div class="col-6">
          <div class="row leftRow">
              <h4 class="my-padding">15:30 Koccintás és ajándékozás </h4>
              <h4 class="my-padding">17:00 Fotózkodás</h4>
              <h4 class="my-padding">22:30 Menyecsketánc</h4>
          </div>
        </div>

      </div>
    </div>
    <br><br>
  </div>
</template>
<script>
export default {
  name:"About"
}
</script>
<style scoped>
.container{
  padding-top: 5em;
}
.row{
  text-align: left;
}

.leftRow{
  padding-left: 1em;

}
.rightRow
{
  text-align: right;
}
.image{
  width: 5em;
  height: 4em;
}
.vl-lg{
    border-left: 6px solid black;
    height: 25em;
    position: absolute;
    left: 50%;
}
.my-padding{
  padding-top: 2.5em;
}
</style>
