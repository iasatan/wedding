<template>
  <div class="containe-fluid">
  <b-navbar toggleable="lg" class="menu">
    <b-navbar-brand router-link to="/">
        <img src="..//assets/logo.png" class="d-inline-block align-top" width="40e" height="40e" alt="Esküvő">
        <span class="h4 linkItem vertical">Főoldal</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
        <b-nav-item class="linkItem h5" router-link to="/intro">Bemutatkozás </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/rspv">Visszajelzés </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/about">Az esküvőről </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/galery">Galéria </b-nav-item>
        <b-nav-item class="linkItem h5 " router-link to="/contact">Kapcsolat </b-nav-item>
      </b-navbar-nav>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
        <br>
        <main role="main">
            <router-view>
            </router-view>
        </main>
        <div class="padding"></div>
        <h1>Visszaszámlálás</h1>
        <countdown deadline="2021-09-04 15:00:00" ></countdown>
    </div>
</template>

<script>
import countdown from './Countdown.vue'
    export default {
  components: { countdown },
        name: "HeaderNew"
    }
</script>

<style scoped>
.vertical{
  vertical-align:middle;
}
.navbar-nav{
    margin-left: auto;
}
.menu
{
  background-color:rgba(200, 200, 200, 0.7);
  position:fixed;
    top: 0;
    overflow: hidden;
    z-index:100;
     width: 100%;
}
.linkItem{
    color:rgba(0,0,0,0.55);
}
@media (max-width: 1081px){
  .navbar-nav{
    margin:auto;
  }
  .menu
  {
    background-color:rgba(200, 200, 200, 1);
    position:relative;
    top: 0;
    overflow: hidden;
    z-index:100;
     width: 100%;
  }
}
.centered{
 text-align: center;
}
.padding{
  margin-top: 10em;
}
</style>