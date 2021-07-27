<template>
  <div class="container">
    <table class="table table-dark">
        <tr>
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
            <th scope="col">Pálinka</th>
            <th scope="col">Jager</th>
            <th scope="col">Baileys</th>
        </tr>
    </table>
        <div v-for="(attendee,k) in attendees" :key="k">
            <table class="table">
            <tr>
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
                    <span v-if="attendee.palinka">X</span>
                </td>
                <td>
                   <span v-if="attendee.jager">X</span>
                </td>
                <td>
                   <span v-if="attendee.baileys">X</span>
                </td>
            </tr>
        </table>

        </div>
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
                axios.get("/api/attendee/mock").then((result)=>{
                    this.attendees.push(...result.data);
                })
            }))
            
        },
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