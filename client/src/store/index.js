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
    removeList(state, id) {
      state.lists = state.lists.filter(l => l.id != id)
    },
    removeBoard(state, id) {
      state.boards = state.boards.filter(b => b.id != id)
    },
    removeNote(state, id) {
      state.notes = state.notes.filter(n => n.id != id)
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(t => t.id != id)
    }
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
    async getListsByBoardId({ commit, dispatch }, board) {
      try {
        let res = await api.get("boards/" + board.id + "/lists");
        commit("setLists", res.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Boards" })
      }
    },
    async deleteList({ commit, dispatch }, listData) {
      try {
        // debugger
        let res = await api.delete("lists/" + listData.id)
        let resu = await api.get("boards/" + listData.boardId + "/lists");
        commit("removeList", listData.id)
        commit("setLists", resu.data)
      } catch (error) {
        console.error(error)
      }
    },





    //#endregion

    //#region -- TASKSS --
    async deleteTask({ commit, dispatch }, taskId) {
      try {
        let res = await api.delete("tasks/" + taskId)
        commit("removeTask", taskId)
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion

    //#region -- NOTES --
    async deleteNote({ commit, dispatch }, noteId) {
      try {
        let res = await api.delete("notes/" + noteId)
        commit("removeNote", noteId)

      } catch (error) {
        console.error(error)
      }
    }
    ////#endregion
  }
})
