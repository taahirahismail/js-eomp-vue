<template>
  <div
    class="mt-2 p-4 text-center border border-start-0 border-end-0 border-black heading"
  >
    <h1>Our Books!</h1>
  </div>
  
  <add-modal-comp/>
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
      <div class="w-100 mx-auto spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </tbody>
  </table>
</template>

<script>
import AdminTableComp from "@/components/AdminTable-comp.vue";
import AddModalComp from "@/components/AddModal-comp.vue";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  components: { AdminTableComp, AddModalComp },
};
</script>

<style>
.heading {
  background-color: #dbdfaa;
}

.blue-bg {
  background-color: #73a9ad !important;
}

.spinner {
  position: relative;
  width: 33.6px;
  height: 33.6px;
  perspective: 67.2px;
}

.spinner div {
  width: 100%;
  height: 100%;
  background: #73a9ad;
  position: absolute;
  left: 50%;
  transform-origin: left;
  animation: spinner-16s03x 2s infinite;
}

.spinner div:nth-child(1) {
  animation-delay: 0.15s;
}

.spinner div:nth-child(2) {
  animation-delay: 0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: 0.45s;
}

.spinner div:nth-child(4) {
  animation-delay: 0.6s;
}

.spinner div:nth-child(5) {
  animation-delay: 0.75s;
}

@keyframes spinner-16s03x {
  0% {
    transform: rotateY(0deg);
  }

  50%, 80% {
    transform: rotateY(-180deg);
  }

  90%, 100% {
    opacity: 0;
    transform: rotateY(-180deg);
  }
}
</style>