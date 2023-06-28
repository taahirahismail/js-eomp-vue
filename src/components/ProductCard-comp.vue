<template>
    <div class="books-cards">
        <span>
            <router-link :to="{name: 'product', params: {id: product.id}}" class="routerlink">
                <img :src="product.img" :alt="product.name" class="p-2">
                <h5 class="text-center">{{ product.name }}</h5>
            </router-link>
        </span>

        <cite class="text-center">by {{ product.author }}</cite>

        <span class="mt-5 mb-0 p-2 d-flex align-items-center justify-content-between">
            <h5>R{{ product.price }}</h5>
            <button class="btn btn-outline-primary">Add To Cart</button>
        </span>
    </div>
</template>

<script>
    export default {
        props: ["product"]
    }
</script>

<style>
.books-cards {
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
    background-color: #73a9ad;
}

.routerlink {
    color: black;
    text-decoration: none;
}
</style>