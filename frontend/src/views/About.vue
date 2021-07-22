<template>
  <div class="container">
    <div class="row">
      <h1>Helyszínek:</h1>
    </div>
    <div class="row">
      <img src="../assets/plate1.png"  class="image">
      <h3 class="col">Érkezés, polgári szertartás és lakodalom helyszíne:</h3>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row"> 
          <h4>Talizmán Étterem és Panzió</h4>
        </div>
        <div class="row text-left "> 
          <h4 class="col">3534 Miskolc, Vár utca. 14.</h4>
        </div>
        <br>
        <div class="row">
          <img src="../assets/church.png"  class="image">
          <h3 class="col">Templomi esküvő helyszíne:</h3>
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
      <img src="../assets/path.png" class="col-sm" />
    </div>
    <div class="row">
      <h1>Menete:</h1>
      <div class="centered">
       <img src="../assets/timeline.png" class="timeline">
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
.timeline{
  width:70%;
  @media (max-width: 1081px){
  margin-left:10em;
  width:80%;
  }
  
}
.centered{
  text-align:center;
}
@media (min-width: 1079px){
.container{
  padding-top: 5em;
}
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
  padding-left:1em;
}
.image{
  width: 5em;
  height: 4em;
}
.vl-lg{
    border-left: 6px solid black;
    height: 24em;
    margin-top:2em;
    position: absolute;
    left: 50%;
}
.my-padding{
  padding-top: 2.5em;
}
</style>
