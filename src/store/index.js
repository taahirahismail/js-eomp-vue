import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    adminIn: null,
    adminOut: null,
    adminOuts: null
  },

  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setAdminIn: (state, adminIn) => {
      state.adminIn = adminIn
    },
    setAdminOut: (state, adminOut) => {
      state.adminOut = adminOut
    },
    setAdminOuts: (state, adminOuts) => {
      state.adminOuts = adminOuts
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

    // deleteBook: (state, id) => {
    //   state.products.splice(id, 1);
    // },
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
    },
    getAdminIn: async (context, payload) => {
      const {id, img, name, author, price, genre } = payload;
      await fetch("https://taahirahismail.github.io/api/js-eomp-data.json", {
        method: "POST",
        body: json.stringify({
          id: id,
          img: img,
          name: name,
          author: author,
          price: price,
          genre: genre,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((res) => res.json())
      .then(() => context.dispatch("getProducts"))
    }
  }
})
