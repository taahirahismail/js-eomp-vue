<template>
  <div class="add-bg">
    <div>
      <h1>Welcome to If Books Could Kill!</h1>
      <p>
        Ours won't, but just imagine they had the power. Find a book to kill
        your curiosity now.
      </p>
    </div>
    <a href="/products" class="btn btn-outline-primary">Shop Our Books!</a>
  </div>

  <div class="books-displays">
        <div class="m-2 p-2 border border-black rounded-2 blue-bg">
          <div class="mt-2 p-2 text-center border rounded-2 border-black heading-mini">
            <h2>What's New?</h2>
          </div>
  
          <div class="books-card">
            <div class="m-2 p-2 card light-bg">
              <img src="https://i.postimg.cc/Vk6Lg6rk/for-dummies-cover.jpg" alt="for-dummies-cover">
              <div class="mt-auto">
                <p class="mt-2"> <strong>A Little Bit of Everything for Dummies</strong> <br>
                <cite>by John Wiley & Sons</cite> </p>
                <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
              </div>
            </div>
  
            <div class="m-2 p-2 card light-bg">
              <img src="https://i.postimg.cc/7YJ6NcTT/psycho-cover.jpg" alt="psycho-cover">
              <div class="mt-auto">
              <p class="mt-2"> <strong>Psycho</strong> <br>
                <cite>by Robert Bloch</cite> </p>
                <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
              </div>
            </div>
  
            <div class="m-2 p-2 card  light-bg">
              <img src="https://i.postimg.cc/kMpGK9Dm/killing-code-cover.jpg" alt="killing-code-cover">
              <div class="mt-auto">
              <p class="mt-2"> <strong>The Killing Code</strong> <br>
                <cite>by J. D. Kirk</cite> </p>
                <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
              </div>
            </div>
          </div>
          </div>
  
          <div class="m-2 p-2 border border-black rounded-2 blue-bg">
            <div class="mt-1 mb-1 p-2 text-center border rounded-2 border-black heading-mini">
              <h2>Our Bestsellers</h2>
            </div>
  
            <div class="books-card">
              <div class="m-2 p-2 card light-bg">
                <img src="https://i.postimg.cc/JzcR6W7t/simplifying-js-cover.jpg" alt="simplifying-js-cover">
                <div class="mt-auto">
                  <p class="mt-2"> <strong>Simplifying JavaScript</strong> <br>
                  <cite>by Joe Morgan</cite> </p>
                  <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
                </div>
              </div>
    
              <div class="m-2 p-2 card light-bg">
                <img src="https://i.postimg.cc/Y05tVrmL/love-and-heartbreak-cover.png" alt="love-and-heartbreak-cover">
                <div class="mt-auto">
                  <p class="mt-2"> <strong>The Code for Love and Heartbreak</strong> <br>
                    <cite>by Robert Bloch</cite> </p>
                    <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
                </div>
              </div>
    
              <div class="m-2 p-2 card light-bg">
                <img src="https://i.postimg.cc/hvfG6Zy6/lucy-lopez-cover.jpg" alt="lucy-lopez-cover">
                <div class="mt-auto">
                  <p class="mt-2"> <strong>Lucy Lopez: Coding Star</strong> <br>
                    <cite>by Claudia Mills</cite> </p>
                    <a href="./pages/products.html" class="btn btn-outline-primary w-100">View</a>
                </div>
              </div>
            </div>
            </div>
          </div>
</template>

<script>
export default {};
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
  display: flex;
}

.blue-bg {
  background-color: #73a9ad;
}

.light-bg {
  background-color: #f5f0bb;
}

.heading-mini {
  background-color: #dbdfaa;
  width: 50%;
  display: block;
  margin: auto;
}

.books-card {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
