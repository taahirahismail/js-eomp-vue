<template>
    <nav class="topnav">
        <router-link class="active routerlink" to="/">Home</router-link>
        <router-link class="routerlink" to="/about">About</router-link>
        <router-link class="routerlink" to="/admin">Admin</router-link>
        <router-link class="routerlink" to="/products">Products</router-link>
        <router-link class="routerlink" to="/cart">Cart</router-link>
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
    color: black;
    text-decoration: none;
    font-size: 15px;
    padding: 5px;
}

.routerlink:hover {
    color: #f5f0bb;
}
</style>