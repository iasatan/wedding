<template>
  <div class="container">
    <h1>Türelem, türelem :)</h1>
    <h4>Itt válnak majd elérhetővé a lagzin készült fényképek, videók.
Addig is ha kedvetek tartja, nézzetek meg pár képet a közös életünkből.
</h4>
    <lingallery :iid.sync="currentId" :items="items" :responsive="true"/>
  </div>
</template>

<script>
import Lingallery from 'lingallery';
export default {
  
  name: 'Galery',
  components: {
    Lingallery,
  }, 
  data() {
      return {
        width: 600,
        height: 400,
        items: [{
          src: '/img/1.jpg',
          thumbnail: '/img/1.jpg',
          caption: 'Közös Nyarlás Rómában',
          id: '1'
        },
        {
          src: '/img/2.jpg',
          thumbnail: '/img/2.jpg',
          caption: 'Ádám Diplomaosztója',
          id: '2'
        },
      ],
        currentId: null

    }
  }
}
</script>

<style scoped>
.container{
  padding-top:3em;
}
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