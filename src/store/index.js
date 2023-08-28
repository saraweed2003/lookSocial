import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  modules: {},
  state: {
    //#region ------------------- Look Home -------------------
    viweitem: null,
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //
    asset: [],
    categorys: [],
    Vcategory: [],
    username: [],
    //#endregion ---------------- Look Back -------------------
  },
  mutations: {
    //#region ------------------- Look Home -------------------
    SET_SELECTED_VIWEITEM(state, viweitem) {
      state.viweitem = viweitem;
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //
    SET_ASSET(state, asset) {
      state.asset = asset;
    },

    SET_CATEGORY(state, categorys) {
      state.categorys = categorys;
    },
    SET_SELECTED_CATEGORY(state, categorys) {
      state.Vcategory = categorys;
    },

    SET_USERNAME(state, username) {
      state.username = username;
    },

    //#endregion ---------------- Look Back -------------------
  },
  actions: {
    //#region ------------------- Look Home -------------------
    selectedviweproduct({ commit }, viweitem) {
      commit("SET_SELECTED_VIWEITEM", viweitem);
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //
    fetchAsset({ commit }) {
      axios
        .get("https://padmeexii.pythonanywhere.com/api/asset/")
        .then((response) => {
          commit("SET_ASSET", response.data.data);
          // console.log(response.data.data);
        });
    },

    // ------------------------- Category -----------------------
    fetchCategory({ commit }) {
      axios
        .get("https://padmeexii.pythonanywhere.com/api/asset/category")
        .then((response) => {
          commit("SET_CATEGORY", response.data.data);
          // console.log("get Categry", response.data.data);
        });
    },

    setSelectedCategory({ commit }, category) {
      commit("SET_SELECTED_CATEGORY", category);
    },

    // ------------------------- username -----------------------
    fetchUser({ commit }) {
      axios
        .get("https://padmeexii.pythonanywhere.com/api/asset/user")
        .then((response) => {
          commit("SET_USERNAME", response.data.data);
          // console.log("get Username", response.data.data);
        });
    },
    //#endregion ---------------- Look Back -------------------
  },
  getters: {
    //#region ------------------- Look Home -------------------
    getSelecteviweitem(state) {
      return state.viweitem;
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back -------------------
    getAsset(state) {
      return state.asset;
    },

    getCategory(state) {
      return state.categorys;
    },
    getSelectedCategory(state) {
      return state.Vcategory;
    },

    getUsername(state) {
      return state.username;
    },
    //#endregion ---------------- Look Back -------------------
  },
});
