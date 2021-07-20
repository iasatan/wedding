<template>
  <div class="containe-fluid">
  <b-navbar toggleable="lg" fixed="top" class="menu">
    <b-navbar-brand router-link to="/">
        <img src="..//assets/logo.png" class="d-inline-block align-top" width="40e" alt="Esküvő">    
        <span class="h4 m-3">Esküvő</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
        <b-nav-item class="linkItem h5" router-link to="/intro">Bemutatkozás </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/rspv">Visszajelzés </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/about">Az esküvőről </b-nav-item>
        <b-nav-item class="linkItem h5" router-link to="/gallery">Galéria </b-nav-item>
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
    </div>
</template>

<script>
    export default {
        name: "HeaderNew"
    }
</script>

<style scoped>
.navbar-nav{
    margin-left: auto;
}
.menu
{
  background-color:rgba(200, 200, 200, 0.7);
}
.linkItem{
    color:#000
}
@media (max-width: 1081px){
  .linkItem{
    padding-right: 40vw
  }
}
.centered{
 text-align: center;
}
</style>