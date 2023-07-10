<template>
  <div
    class="mt-2 p-4 text-center border border-start-0 border-end-0 border-black heading"
  >
    <h1>Our Books!</h1>
  </div>

  <div class="sort-and-filter">
    <div
      class="sorting d-flex align-items-center justify-content-center m-1 p-2"
    >
    <h5 class="p-3">Sort (price):</h5>
      <div class="btns">
        <button id="htl-btn" class="sort-btns" @click="priceHTL">High to Low</button>
        <button id="lth-btn" class="sort-btns" @click="priceLTH">Low to High</button>
      </div>
    </div>

    <div class="filtering d-flex align-items-center justify-content-center m-1 p-2">
        <h5 class="p-3">Filter (genre):</h5>
        <div class="btns">
            <button class="button filter-btns" id="view-all-btn" @click="showAll">View All</button>
            <button id="nonfic-btn" class="filter-btns" @click="filterNonfic">Non-Fiction</button>
            <button id="romance-btn" class="filter-btns" @click="filterRomance">Romance</button>
            <button id="crime-mystery-btn" class="filter-btns" @click="filterCrimeMys">Crime/Mystery</button>
            <button id="horror-btn" class="filter-btns" @click="filterHorror">Horror</button>
            <button id="kids-btn" class="filter-btns" @click="filterKids">Children</button>
        </div>
    </div>
  </div>

  <div v-if="products" id="books">
    <ProductCard-comp
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>

  <div v-else>
    <loader-comp/>
  </div>
</template>

<script>
import ProductCardComp from "@/components/ProductCard-comp.vue";
import LoaderComp from '@/components/Loader-comp.vue';

export default {
  methods: {
            priceHTL() {
                this.$store.commit("sortProductsHighToLow")
            },
            priceLTH() {
                this.$store.commit("sortProductsLowToHigh")
            }
        },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  components: { ProductCardComp, LoaderComp },
};
</script>

<style>
.heading {
  background-color: #dbdfaa;
}

.sort-btns,
.filter-btns {
  background-color: #b3c890;
  padding: 10px;
  margin: 3px;
  border-radius: 5px;
}

.sort-btns:hover,
.filter-btns:hover {
  background-color: #73a9ad;
}

#books {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
}
</style>
