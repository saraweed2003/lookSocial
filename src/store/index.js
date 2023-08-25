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

    //#endregion ---------------- Look Back -------------------
  },
});
