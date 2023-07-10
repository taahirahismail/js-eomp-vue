<template>
    <div>
        <div class="text-center">
          <a
            data-bs-toggle="modal"
            data-bs-target="#add-book-modal"
            href="#add-book-modal"
            class="m-2 btn btn-outline-primary text-center"
            id="add-book-btn"
            >Add New Book</a
          >
        </div>

        <div class="modal" id="add-book-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add New Book:</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div id="book-info">
                <form class="m-2 p-2 text-center">
                  <div class="m-1">
                    <label>Cover:</label>
                    <input
                      type="text"
                      name="cover"
                      id="book-cover"
                      class="p-1"
                    />
                  </div>
                  <div class="m-1">
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      id="book-title"
                      class="p-1"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      id="book-author"
                      class="p-1"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      class="p-1"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Price:</label>
                    <input
                      type="number"
                      name="price"
                      id="book-price"
                      class="p-1"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Genre:</label>
                    <input
                      type="text"
                      name="genre"
                      id="book-genre"
                      class="p-1"
                      required
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-outline-success"
                  id="add-btn"
                  data-bs-dismiss="modal"
                  @click="addBook"
                >
                  Add!
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addBook() {
            this.$store.commit("addBook")
        }
    }
}
</script>

<style>
    
</style>