import { createStore } from "vuex";

export default createStore({
  modules: {},
  state: {
    //#region ------------------- Look Home -------------------
    viweitem: null,
    //#endregion ---------------- Look Home -------------------
  },
  mutations: {
    //#region ------------------- Look Home -------------------
    SET_SELECTED_VIWEITEM(state, viweitem) {
      state.viweitem = viweitem;
    },
    //#endregion ---------------- Look Home -------------------
  },
  actions: {
    //#region ------------------- Look Home -------------------
    selectedviweproduct({ commit }, viweitem) {
      commit("SET_SELECTED_VIWEITEM", viweitem);
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back -------------------

    //#endregion ---------------- Look Back -------------------
  },
  getters: {
    //#region ------------------- Look Home -------------------
    getSelecteviweitem(state) {
      return state.viweitem;
    },
    //#endregion ---------------- Look Home -------------------
  },
});
