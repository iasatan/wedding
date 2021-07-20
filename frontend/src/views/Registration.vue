<template>
    <div id="mainPerson">
        <form @submit="addAttendee">
            <registration-form :attendee="attendee"/>
            <button type="submit" class="btn btn-primary">Regisztráció</button>
        </form>
    </div>


</template>

<script>
    import RegistrationForm from "../components/RegistrationForm";

    export default {
        name: "Registration",
        components: {RegistrationForm},
        data() {
            return {
                attendee: {
                    name: "",
                    age: null,
                    lactose: false,
                    milk: false,
                    gluten: false,
                    vegan: false,
                    other: "",
                    attend: "minden"
                }
            }
        },
        methods: {
            async addAttendee(e) {
                e.preventDefault();
                console.log(this.attendee)
            }
        }
    }
</script>

<style scoped>

</style>