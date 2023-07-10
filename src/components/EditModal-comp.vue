<template>
    <div>
        <div>
            <a
            data-bs-toggle="modal"
            data-bs-target="#edit-book-modal"
            href="#edit-book-modal"
            class="m-2 btn btn-outline-primary text-center"
            id="edit-book-btn"
            >edit</a
          >
        </div>

        <div class="modal" id="edit-book-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Edit Existing Book:</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div id="book-info-update">
                <form class="m-2 p-2 text-center">
                  <div class="m-1">
                    <label>Cover:</label>
                    <input type="text" name="cover" id="book-cover-edit" />
                  </div>
                  <div class="m-1">
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      id="book-title-edit"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Author:</label>
                    <input
                      type="text"
                      name="author"
                      id="book-author-edit"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity-edit"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Price:</label>
                    <input
                      type="number"
                      name="price"
                      id="book-price-edit"
                      required
                    />
                  </div>
                  <div class="m-1">
                    <label>Genre:</label>
                    <input
                      type="text"
                      name="genre"
                      id="book-genre-edit"
                      required
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-outline-success"
                  data-bs-dismiss="modal"
                  id="edit-book-update-btn"
                  @click="editBook"
                >
                  Update!
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
        editBook() {
            this.$store.commit("editBook")
        }
    }
}
</script>

<style>
    
</style>