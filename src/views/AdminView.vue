<template>
  <div
    class="mt-2 p-4 text-center border border-start-0 border-end-0 border-black heading"
  >
    <h1>Our Books!</h1>
  </div>

  <add-modal-comp />
  <table class="m-2 p-2">
    <thead>
      <tr class="blue-bg">
        <th class="border border-black p-1">Product</th>
        <th class="border border-black p-1">Quantity</th>
        <th class="border border-black p-1">Price</th>
        <th class="border border-black p-1">Edit</th>
      </tr>
    </thead>

    <tbody v-if="products" id="books">
      <AdminTableComp
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </tbody>
    <tbody v-else>
      <loader-comp/>
    </tbody>
  </table>
</template>

<script>
import AdminTableComp from "@/components/AdminTable-comp.vue";
import AddModalComp from "@/components/AddModal-comp.vue";
import LoaderComp from "@/components/Loader-comp.vue";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  components: { AdminTableComp, AddModalComp, LoaderComp },
};
</script>

<style>
.heading {
  background-color: #dbdfaa;
}

.blue-bg {
  background-color: #73a9ad !important;
}
</style>
