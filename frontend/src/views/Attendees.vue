<template>
  <div class="container">
    <table class="table table-bordered">
        <thead>
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
        </thead>
        <tbody>
        <tr>
            <td>
            </td>
            <td>
                Teljes:{{attendeeCount}}<br>
                Gyerek:{{childCount}}
            </td>
            <td>

            </td>
            <td>
            </td>
            <td>
                {{glutenCount}}
            </td>
            <td>
                {{lactoseCount}}
            </td>
            <td>
                {{milkCount}}
            </td>
            <td>
                {{veganCount}}
            </td>
            <td>
                {{otherCount}}
            </td>
            <td>
                Minden:{{attendAllCount}}<br>
                Szertartás:{{attendCeremonyCount}}
            </td>
            <td>
                {{borCount}}
            </td>
            <td>
                {{szarazCount}}
            </td>
            <td>
                {{edesCount}}
            </td>
            <td>
                {{rozeCount}}
            </td>
            <td>
                {{vorosCount}}
            </td>
            <td>
                {{feherCount}}
            </td>
            <td>
                {{palinkaCount}}
            </td>
            <td>
                {{jagerCount}}
            </td>
            <td>
                {{baileysCount}}
            </td>
            <td>
                {{vodkaCount}}
            </td>
            <td>
                {{whiskyCount}}
            </td>
            <td>
                {{tequilaCount}}
            </td>
            <td>
            </td>
            <td>
            </td>
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
        <tr>
            <td></td>
            <td>Név</td>
            <td>Kor</td>
            <td>Email</td>
            <td>Glutén</td>
            <td>Laktóz</td>
            <td>Tej</td>
            <td>Vegán</td>
            <td>Egyéb</td>
            <td>Részvétel</td>
            <td>Bor</td>
            <td>Száraz</td>
            <td>Édes</td>
            <td>Rozé</td>
            <td>Vörös</td>
            <td>Fehér</td>
            <td>Pálinka</td>
            <td>Jager</td>
            <td>Baileys</td>
            <td>Vodka</td>
            <td>Whisky</td>
            <td>Tequila</td>
            <td>Regisztráció</td>
            <td>Törlés</td>
        </tr>


        </tbody>
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
                attendeeCount:0,
                childCount:0,
                glutenCount:0,
                lactoseCount:0,
                milkCount: 0,
                veganCount: 0,
                otherCount: 0,
                attendAllCount: 0,
                attendCeremonyCount:0,
                borCount: 0,
                szarazCount: 0,
                edesCount: 0,
                rozeCount: 0,
                vorosCount: 0,
                feherCount: 0,
                palinkaCount: 0,
                jagerCount: 0,
                baileysCount: 0,
                vodkaCount: 0,
                whiskyCount: 0,
                tequilaCount: 0
            }
        },
        created: async function(){
            axios.get("/api/attendee").then((result)=>{
                this.attendees=result.data;
                
               this.attendees.forEach(attendee => {
                    if(attendee.attend!=="semmi"){
                        this.attendeeCount++;
                    }
                    if(attendee.age<18){
                        this.childCount++;
                    }
                    if(attendee.gluten){
                        this.glutenCount++;
                    }
                    if(attendee.milk){
                        this.milkCount++;
                    }
                    if(attendee.lactose){
                        this.lactoseCount++;
                    }
                    if(attendee.vegan){
                        this.veganCount++;
                    }
                    if(attendee.other){
                        this.otherCount++;
                    }
                    if(attendee.attend==="minden"){
                        this.attendAllCount++;
                    }
                    if(attendee.attend==="templom"){
                        this.attendCeremonyCount++;
                    }
                    if(attendee.bor){
                        this.borCount++;
                    }
                    if(attendee.szaraz){
                        this.szarazCount++;
                    }
                    if(attendee.edes){
                        this.edesCount++;
                    }
                    if(attendee.roze){
                        this.rozeCount++;
                    }
                    if(attendee.voros){
                        this.vorosCount++;
                    }
                    if(attendee.feher){
                        this.feherCount++;
                    }
                    if(attendee.palinka){
                        this.palinkaCount++;
                    }
                    if(attendee.jager){
                        this.jagerCount++;
                    }
                    if(attendee.baileys){
                        this.baileysCount++;
                    }
                    if(attendee.vodka){
                        this.vodkaCount++;
                    }
                    if(attendee.whisky){
                        this.whiskyCount++;
                    }
                    if(attendee.tequila){
                        this.tequilaCount++
                    }
                });
                
            }).catch((err=>{
                console.log(err);
            }))
            
        },
        methods:{
            deleteUser(id){
                axios.post("/api/attendee/delete", {"id":id}).then(()=>{
                    let toast = this.$toasted.show("Törölve");
                    toast.goAway(3000);
                    this.$router.go()
                }).catch(err=>console.log(err));
            }
        }
}
</script>
<style scoped>
.container{
  padding-top:4em;
}
.container-fluid{
  max-width: 100%;
}
</style>