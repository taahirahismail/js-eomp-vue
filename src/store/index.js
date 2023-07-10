import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    sortProductsHighToLow: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      })
    },
    sortProductsLowToHigh: (state) => {
      state.products.sort((a, b) => {
        return b.price - a.price;
      })
    },
    addBook: (state) => {
        try {
        const img = document.getElementById("book-cover").value;
        const name = document.getElementById("book-title").value;
        const author = document.getElementById("book-author").value;
        const price = parseInt(document.getElementById("book-price").value);
        const quantity = parseInt(document.getElementById("quantity").value);
        const genre = document.getElementById("book-genre").value;
    
        let id =
          state.products.map((book) => book.id).at(-1) >= 1
            ? state.products.map((book) => book.id).at(-1)
            : 0;
        id++;
    
        state.products.push({
          id,
          img,
          name,
          author,
          price,
          quantity,
          genre,
        });
      } catch (error) {
        console.error("Unable to add new book:", error);
      }
    },

    editBook: (state) => {
      try {
        document.getElementById("book-cover-edit").value = book.img;
        document.getElementById("book-title-edit").value = book.name;
        document.getElementById("book-author-edit").value = book.author;
        document.getElementById("book-price-edit").value = book.price;
        document.getElementById("quantity-edit").value = book.quantity;
        document.getElementById("book-genre-edit").value = book.genre;
    
          state.product.img = document.getElementById("book-cover-edit").value;
          state.product.name = document.getElementById("book-title-edit").value;
          state.product.author = document.getElementById("book-author-edit").value;
          state.product.price = parseFloat(document.getElementById("book-price-edit").value);
          state.product.quantity = parseInt(document.getElementById("quantity-edit").value);
          state.product.genre = document.getElementById("book-genre-edit").value;

      } catch (error) {
        console.error("Unable to update book:", error);
      }
    }
  },
  actions: {
    // async getProducts (context) {
    //   try {
    //     let res = await fetch("https://taahirahismail.github.io/api/js-eomp-data.json");
    //     let {products} = await res.json();
    //     if (products) {
    //       context.commit("setProducts", products)
    //     } else {
    //       context.commit("setProducts", products)
    //     }
    //   } catch(e) {
    //     console.log(e.message)
    //   }
    // }

    getProducts: async (context) => {
      fetch("https://taahirahismail.github.io/api/js-eomp-data.json")
      .then ((res) => res.json())
      .then ((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("https://taahirahismail.github.io/api/js-eomp-data.json/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product));
    }
  }
})
