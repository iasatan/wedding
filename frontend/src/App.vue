<template>
    <div id="app">
        <Header/>
    </div>
</template>

<style>

    #app {
        font-family: 'Engagement', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        max-width: 100%;
        background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url('/background2.jpg');
        background-size: 60%;
        background-repeat: repeat;
    }
</style>
<script>
    import Header from "./components/HeaderNew";

    export default {
        components: {Header}
    }
</script>