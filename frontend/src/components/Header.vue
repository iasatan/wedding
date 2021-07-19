<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-warning">
           
                <div class="navbar-brand" href="/">
                    <a href="/">Esküvő
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-trigger="#main_nav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse" id="main_nav">
                    <div class="offcanvas-header mt-3">  
                        <button class="btn btn-outline-danger btn-close float-right"></button>
                        <h5 class="py-2 text-white">Main navbar</h5>
                    </div>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/information" class="nav-link">Bemutatkozás</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/galery" class="nav-link">Visszajelzés</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="nav-link">Az esküvőről</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="nav-link">Galéria</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="nav-link">Kapcsolat</router-link>
                    </li>

                </ul>
                </div>
                

        </nav>
        <br>
        <main role="main">
            <router-view>
            </router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.navbar-nav{
    margin-left: auto;
}
</style>