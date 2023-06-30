<template>
    <div v-if="product" class="product-details">
    <img :src="product.img" :alt="product.title">
    <h5>{{ product.name }}</h5>
    <cite>by {{ product.author }}</cite>
    </div>

    <div>
        <h5>{{ product.price }}</h5>
        <button class="btn btn-outline-primary">Add to Cart</button>
    </div>
</template>

<script>
export default {
    props: ["id"],

    computed: {
        product() {
            return this.$store.state.product;
        },
    },

    mounted() {
        this.$store.dispatch("getProduct", this.id);
    }
}
</script>