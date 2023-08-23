import { createStore } from "vuex";

export default createStore({
  modules: {},
  state: {
    viweitem: null,
  },
  mutations: {
    SET_SELECTED_VIWEITEM(state, viweitem) {
      state.viweitem = viweitem;
    },
  },
  actions: {
    selectedviweproduct({ commit }, viweitem) {
      commit("SET_SELECTED_VIWEITEM", viweitem);
    },
  },
  getters: {
    getSelecteviweitem(state) {
      return state.viweitem;
    },
  },
});
