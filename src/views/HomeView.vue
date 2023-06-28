<template>
  <div class="add-bg">
    <div>
      <h1>Welcome to If Books Could Kill!</h1>
      <p>Ours won't, but just imagine they had the power. Find a book to kill your curiosity now.</p>
    </div>
    <a href="/products" class="btn btn-outline-primary">Shop Our Books!</a>
  </div>

  <div class="books-displays">
    <div class="books">
      <div class="book-card">
        This is a new book.
      </div>
      <div class="book-card">
        This is another new book.
      </div>
      <div class="book-card"
      >
        This is a third new book.
      </div>
    </div>

    <div class="books">
      <div class="book-card">
        This is a bestseller.
      </div>
      <div class="book-card">
        This is another bestseller.
      </div>
      <div class="book-card"
      >
        This is a third bestseller.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.add-bg {
  padding: 15px;
  text-align: start;
  background-image: url("https://i.postimg.cc/gj4qQLJd/books-bg-3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 450px;
}

.books-displays {
  padding: 10px;
  margin: 5px;
}

.books {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: #73a9ad;
}

.book-card {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: #f5f0bb;
}
</style>