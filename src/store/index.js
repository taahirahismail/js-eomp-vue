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
    filterNonficProducts: (state) => {
      state.products.filter((product) => product.genre === "nonfiction");
    },
    filterRomanceProducts: (state) => {
      state.products.filter((product) => product.genre === "romance");
    },
    filterCrimeMysProducts: (state) => {
      state.products.filter((product) => product.genre === "crime");
    },
    filterHorrorProducts: (state) => {
      state.products.filter((product) => product.genre === "horror");
    },
    filterKidsProducts: (state) => {
      state.products.filter((product) => product.genre === "kids");
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:3000/books")
      .then ((res) => res.json())
      .then ((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/books/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product));
    }
  }
})
