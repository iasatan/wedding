<template>
    <div id="app">
        <Header/>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright&family=Courgette&family=Dancing+Script&family=Petit+Formal+Script&display=swap');

    #app {
        font-family: 'Petit Formal Script', cursive;
        font-family: 'Cormorant Upright', serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        max-width: 100%;
        background: url('/background2.jpg');
        background-size: 100%;
        background-repeat: repeat;
    }
</style>
<script>
    import Header from "./components/HeaderNew";

    export default {
        components: {Header}
    }
</script>