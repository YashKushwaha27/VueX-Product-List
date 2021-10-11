import { createStore } from "vuex";
import axios from "axios";

const api = require("../../EnvConfig/EnvConfig").url;

export default createStore({
  state: {
    allProducts: [],
    currentProduct: {},
    selectedProductName: "",
  },
  mutations: {
    setProductList(state, payload) {
      state.allProducts = payload;
    },
    setProductDetails(state, payload) {
      state.currentProduct = payload;
    },
    setSelectedProductName(state, payload) {
      state.selectedProductName = payload;
    },
    clearSelectedProductName(state) {
      state.selectedProductName = '';
    }
  },
  actions: {
    async setProductList(state) {
      const res = await axios.get(api + "products");
      const data = await res.data;
      state.commit("setProductList", data);
    },
    async setProductDetails(state, id) {
      const res = await axios.get(api + "products/" + id);
      const data = await res.data;
      state.commit("setSelectedProductName", data?.title);
      state.commit("setProductDetails", data);
    },
  },
  getters: {
    getProductList(state) {
      return state.allProducts;
    },
    getProductDetails(state) {
      return state.currentProduct;
    },
    getSelectedProductName(state) {
      return state.selectedProductName;
    }
  },
});
