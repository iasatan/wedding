<template>
    <div class="container">
        <form @submit="nextpage">
            <div class="form-group row m-2 my-padding">
                <label class="col-form-label" for="name">Név </label>
                <div class="col-lg-10 col-sm-12 ">
                    <input type="text" v-model="attendee.name" class="form-control" id="name"  placeholder="Jóska Pista">
                </div>
            </div>
            <div class="form-group row m-2">
                <label class="col-form-label" for="name">Email </label>
                <div class="col-lg-10 col-sm-12 ">
                    <input type="email" v-model="attendee.email" class="form-control" id="email" placeholder="joskapista@gmail.com">
                </div>
            </div>
            <div class="align-right col-lg-10 col-sm-12 bottom_padding">
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

@media (max-width: 1079px){
    .my_col{
        width:50em;
    }
}
.container{
    max-width: 50em;;
    text-align: left;
}
.my-padding{
    margin-top:5em;
}

.btn{
    border:solid 1px lightgray
}
.align-right{
   text-align:right;
}
.bottom_padding{
    padding-top:1em;
    padding-bottom:3em;
}
</style>