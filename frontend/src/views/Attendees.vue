<template>
  <div class="container">
    <table class="table table-hower table-bordered">
        <tr>
            <th scope="col">+1 Fő</th>
            <th scope="col">Név</th>
            <th scope="col">Kor</th>
            <th scope="col">Email</th>
            <th scope="col">Glutén</th>
            <th scope="col">Laktóz</th>
            <th scope="col">Tej</th>
            <th scope="col">Vegán</th>
            <th scope="col">Egyéb</th>
            <th scope="col">Részvétel</th>
            <th scope="col">Bor</th>
            <th scope="col">Száraz</th>
            <th scope="col">Édes</th>
            <th scope="col">Rozé</th>
            <th scope="col">Vörös</th>
            <th scope="col">Fehér</th>
            <th scope="col">Pálinka</th>
            <th scope="col">Jager</th>
            <th scope="col">Baileys</th>
            <th scope="col">Vodka</th>
            <th scope="col">Whisky</th>
            <th scope="col">Tequila</th>
            <th scope="col">Regisztráció</th>
            <th scope="col">Törlés</th>
        </tr>
        <tr v-for="(attendee,k) in attendees" :key="k">
                <td>
                    <span v-if="attendee.parentId && attendee.parentId.length>0">+1 Fő</span>
                </td>
                <td>
                    {{attendee.name}}
                </td>
                <td>
                    {{attendee.age}}
                </td>
                <td>
                    <a :href="attendee.email">{{attendee.email}}</a>
                </td>
                <td>
                    <span v-if="attendee.gluten">X</span>
                </td>
                <td>
                    <span v-if="attendee.lactose">X</span>
                </td>
                <td>
                   <span v-if="attendee.milk">X</span>
                </td>
                <td>
                   <span v-if="attendee.vegan">X</span>
                </td>
                <td>
                    {{attendee.other}}
                </td>
                <td>
                    {{attendee.attend}}
                </td>
                <td>
                    <span v-if="attendee.bor">X</span>
                </td>
                <td>
                    <span v-if="attendee.szaraz">X</span>
                </td>
                <td>
                   <span v-if="attendee.edes">X</span>
                </td>
                <td>
                   <span v-if="attendee.roze">X</span>
                </td>
                <td>
                    <span v-if="attendee.voros">X</span>
                </td>
                <td>
                    <span v-if="attendee.feher">X</span>
                </td>
                <td>
                   <span v-if="attendee.palinka">X</span>
                </td>
                <td>
                   <span v-if="attendee.jager">X</span>
                </td>
                <td>
                    <span v-if="attendee.baileys">X</span>
                </td>
                <td>
                    <span v-if="attendee.vodka">X</span>
                </td>
                <td>
                   <span v-if="attendee.whisky">X</span>
                </td>
                <td>
                   <span v-if="attendee.tequila">X</span>
                </td>
                <td>
                    <span>{{attendee.timestamp}}</span>
                </td>
                <td>
                    <button class="btn btn-danger" v-on:click="deleteUser(attendee._id)">X</button>
                </td>
            </tr>
        </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Attendees',
    data() {
            return {
                attendees:[],
            }
        },
        created: async function(){
            axios.get("/api/attendee").then((result)=>{
                this.attendees=result.data;
                
            }).catch((err=>{
                console.log(err);
            }))
            
        },
        methods:{
            deleteUser(id){
                axios.post("/api/attendee/delete", {"id":id}).then(()=>{
                    let toast = this.$toasted.show("Törölve");
                    toast.goAway(3000);
                }).catch(err=>console.log(err));
            }
        }
}
</script>
<style scoped>
.container{
  padding-top:4em;
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