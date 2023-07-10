<template>
  <tr class="table-bg">
    <td class="p-2 border border-black d-flex">
      <img :src="product.img" :alt="product.name" style="width: 15%" />
      <p class="mx-2 my-auto text-start">
        {{ product.name }} <br />
        <cite>by {{ product.author }}</cite>
      </p>
    </td>
    <td class="p-2 border border-black">{{ product.quantity }}</td>
    <td class="p-2 border border-black">R{{ product.price }}</td>
    <td class="p-2 border border-black">
      <edit-modal-comp />
      <button
        class="btn btn-outline-danger"
        id="deleteBtn"
        @click="deleteBook(product.id)"
      >
        delete
      </button>
    </td>
  </tr>
</template>

<script>
import EditModalComp from "./EditModal-comp.vue";

export default {
  props: ["product"],

  methods: {
    deleteBook() {
      this.$store.commit("deleteBook");
    },
  },

  components: { EditModalComp },
};
</script>

<style>
.table-bg {
  background-color: #dbdfaa;
}
</style>
