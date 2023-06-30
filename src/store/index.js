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
    }
  },
  actions: {
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
