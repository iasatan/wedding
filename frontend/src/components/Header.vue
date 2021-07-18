<template>
    <div>
        <nav class="navbar navbar-expand navbar-collapse">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div class="navbar-brand" href="/">
                    <a href="/">Esküvő
                    </a>
                </div>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link to="/information" class="nav-link">Információk</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/galery" class="nav-link">Galéria</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/registration" class="nav-link">Regisztráció</router-link>
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
    .navbar {
        background: transparent;
    }
</style>