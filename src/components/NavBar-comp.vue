<template>
    <nav class="topnav">
        <router-link class="active routerlink" to="/">Home</router-link>
        <router-link class="routerlink" to="/about">About</router-link>
        <router-link class="routerlink" to="/">Admin</router-link>
        <router-link class="routerlink" to="/">Products</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.topnav {
    background-color: #b3c890;
}

.routerlink {
    color: #2c3e50;
    text-decoration: none;
    font-size: 15px;
    padding: 5px;
}
</style>