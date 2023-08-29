import { createStore } from "vuex";
import axios from "axios";
import { Axioshome } from "../api/homeapi";

export default createStore({
  modules: {},
  state: {
    //#region ------------------- Look Home -------------------
    viweitem: null,
    apihome: [],
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //
    asset: [],

    categorys: [],
    Vcategory: [],

    types: [],
    Vtype: [],

    username: [],
    //#endregion ---------------- Look Back -------------------
  },
  mutations: {
    //#region ------------------- Look Home -------------------
    SET_SELECTED_VIWEITEM(state, viweitem) {
      state.viweitem = viweitem;
    },
    //api
    SET_APIHOME(state, apihome) {
      state.apihome = apihome;
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //

    // asset ==================================================
    SET_ASSET(state, asset) {
      state.asset = asset;
    },

    // category ===============================================
    SET_CATEGORY(state, categorys) {
      state.categorys = categorys;
    },
    ADD_CATEGORY(state, categorys) {
      state.categorys = categorys;
    },
    SET_SELECTED_CATEGORY(state, categorys) {
      state.Vcategory = categorys;
    },

    // type ===================================================
    SET_TYPE(state, types) {
      state.types = types;
    },
    SET_SELECTED_TYPE(state, types) {
      state.Vtype = types;
    },

    // user ===================================================
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
    //แสดงข้อมูล API
    apihomes({ commit }) {
      Axioshome.get("/asset/type/").then(async (response) => {
        commit("SET_APIHOME", response.data.data);
      });
    },
    //เพิ่มข้อมูล api
    createapihome({ commit }) {
      Axioshome.post("/asset/").then(async (response) => {
        commit("SET_CREATEA", response.data.data);
      });
    },

    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back ------------------- //
    fetchAsset({ commit }) {
      Axioshome.get("/asset/").then((response) => {
        commit("SET_ASSET", response.data.data);
        // console.log(response.data.data);
      });
    },

    // ------------------------- Category -----------------------
    fetchCategory({ commit }) {
      Axioshome.get("/asset/category/").then((response) => {
        commit("SET_CATEGORY", response.data.data);
        // console.log("get Categry", response.data.data);
      });
    },

    async postCategory({ commit }, categorData) {
      try {
        const response = await Axioshome.post(
          "/asset/category/create/",
          categorData
        );
        commit("ADD_CATEGORY", response.data.data);
        return response.data.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    setSelectedCategory({ commit }, category) {
      commit("SET_SELECTED_CATEGORY", category);
    },
    // ------------------------- type -----------------------
    fetchType({ commit }) {
      Axioshome.get("/asset/type/").then((response) => {
        commit("SET_TYPE", response.data.data);
        // console.log("get Username", response.data.data);
      });
    },
    fetchUser({ commit }) {
      Axioshome.get("/asset/type/").then((response) => {
        commit("SET_USERNAME", response.data.data);
        // console.log("get Username", response.data.data);
      });
    },
    // ------------------------- username -----------------------
    fetchUser({ commit }) {
      Axioshome.get("/asset/user/").then((response) => {
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
    //apihome
    getapihome(state) {
      return state.apihome;
    },
    //#endregion ---------------- Look Home -------------------

    //#region ------------------- Look Back -------------------
    getAsset(state) {
      return state.asset;
    },

    // category ===============================================
    getCategory(state) {
      return state.categorys;
    },
    getSelectedCategory(state) {
      return state.Vcategory;
    },

    // type ===================================================
    getType(state) {
      return state.types;
    },
    getSelectedType(state) {
      return state.Vtype;
    },

    getUsername(state) {
      return state.username;
    },
    //#endregion ---------------- Look Back -------------------
  },
});
