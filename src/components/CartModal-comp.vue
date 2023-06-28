<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Your Books:</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div id="cart-in">
          <div id="results">
            <h5>Total:</h5>
          </div>
        </div>
        <div class="modal-footer">
          <h5 class="m-2 p-2 d-flex align-items-center justify-content-center">
            Total:
            <p id="total" class="m-2 p-2"></p>
          </h5>
          <router-link to="/checkout" class="btn btn-outline-success"
            >Proceed to Checkout!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>