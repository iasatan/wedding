<template>
  <div class="container">
    <table class="table">
        <tr>
            <th>Név</th>
            <th>Kor</th></th>
        </tr>
        <div v-for="(attendee,k) in attendees" :key="k">
            <tr>
                <td>
                    {{attendee.name}}
                </td>
                <td>
                    {{attendee.age}}
                </td>
            </tr>
        </div>
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
            })
        },
}
</script>
<style scoped>
@media (max-width: 1081px){
.container{
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