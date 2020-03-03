import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: [],
    notes: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, lists) {
      state.lists = lists;
    },
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    setActiveBoard({ commit, dispatch }, board) {
      commit("setActiveBoard", board)
    },
    async getBoardById({ commit, dispatch }, board) {
      try {
        let res = await api.get("boards/" + board.id);
        commit("setActiveBoard", res.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Boards" })
      }
    },
    async deleteBoard({ commit, dispatch }, boardId) {
      try {
        let res = await api.delete("boards/" + boardId);
        commit("removeBoard", boardId)
        commit("setActiveBoard", {})
      } catch (error) {
        console.error(error)
        router.push({ name: "Boards" })
      }
    },


    //#endregion


    //#region -- LISTS --

    async addList({ commit, dispatch }, listData) {
      try {
        let res = api.post('lists', listData)
        let resu = await api.get("boards/" + listData.boardId + "/lists");
        commit("setLists", resu.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "boards" })
      }
    },
    removeList({ commit, dispatch }, listId) {

    }





    //#endregion
  }
})
