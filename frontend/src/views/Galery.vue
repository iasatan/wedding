<template>
  <div class="container">
    <h1>Türelem, türelem :)</h1>
    <h4>Itt válnak majd elérhetővé a lagzin készült fényképek, videók.
Addig is ha kedvetek tartja, nézzetek meg pár képet a közös életünkből.
</h4>

    <img src="../assets/galeryPic1.jpg" alt="Lánykérés"/>
  </div>
</template>

<script>

export default {
  name: 'Galery',
  components: {
  }
}
</script>
<style scoped>
@media (min-width: 1079px){
.container{
  padding-top: 5em;
}
}
img{
  max-width: 50em;
  max-height: 25em;
}

</style>