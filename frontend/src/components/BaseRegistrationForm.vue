<template>
    <div class="container">
        <form @submit="nextpage">
            <div class="form-group row m-2 my-padding">
                <label class="col-form-label" for="name">Név </label>
                <div class="col-10">
                    <input type="text" v-model="attendee.name" class="form-control" id="name"  placeholder="Jóska Pista">
                </div>
            </div>
            <div class="form-group row m-2">
                <label class="col-form-label" for="name">Email </label>
                <div class="col-10">
                    <input type="email" v-model="attendee.email" class="form-control" id="email" placeholder="joskapista@gmail.com">
                </div>
            </div>
            <div class="align-right">
                <button type="submit" class="btn btn-light">Tovább</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'BaseRegistrationForm',
    props:{
        attendee:{
            required:true
        }
    },
    data() {
            return {
            }
        },
        methods: {
            async nextpage(e) {
                e.preventDefault();
                this.$emit("submitted",this.attendee);
            }
        }
}
</script>
<style  scoped>
.container{
    max-width: 50em;;
    margin-top: 5em;
    text-align: left;
}
.my-padding{
    margin-top:5em;
}
.align-right{
   text-align:right;
}
.btn{
    border:solid 1px lightgray
}
</style>