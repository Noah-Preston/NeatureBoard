import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import { socketStore } from "./socketStore"

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
    tasks: {},
    notes: {},
    temp: []
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
    setTasks(state, tasks) {
      Vue.set(state.tasks, tasks.id, tasks.data)
    },
    addTask(state, task) {
      state.tasks[task.listId].push(task)
    },
    setNotes(state, notes) {
      Vue.set(state.notes, notes.id, notes.data)
    },
    addNote(state, note) {
      state.notes[note.taskId].push(note)
    },
    removeList(state, id) {
      state.lists = state.lists.filter(l => l.id != id)
    },
    removeBoard(state, id) {
      state.boards = state.boards.filter(b => b.id != id)
    },
    pickUp(state, task) {
      let temp = state.tasks[task.listId].find(t => t.id == task.id)
      state.temp.push(temp)
      // state.tasks = state.tasks[task.listId].filter(t => t.id != task.id)
    },
    moveTask(state, listId) {
      state.temp = []
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
        router.push({ name: "boards" })
      }
    },
    async deleteBoard({ commit, dispatch }, boardId) {
      try {
        let res = await api.delete("boards/" + boardId);
        commit("removeBoard", boardId)
        commit("setActiveBoard", {})
        router.push({ name: "boards" })
      } catch (error) {
        console.error(error)
        router.push({ name: "boards" })
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




    //update
    //#endregion

    //#region -- TASKSS --
    async deleteTask({ commit, dispatch }, task) {
      try {
        let res = await api.delete("tasks/" + task.id)
        dispatch("getTasks", task.listId)
      } catch (error) {
        console.error(error)
      }
    },
    async addTask({ commit, dispatch }, taskData) {
      try {
        let res = await api.post('tasks', taskData)
        commit("addTask", res.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "boards" })
      }
    },
    async getTasks({ commit, dispatch }, id) {
      try {
        let res = await api.get("lists/" + id + "/tasks");
        commit("setTasks", { id, data: res.data })
      } catch (error) {
        console.error(error)
        router.push({ name: "Boards" })
      }
    },
    pickUp({ commit, dispatch }, taskData) {
      commit("pickUp", taskData)
      // commit("setTasks", taskData)
    },
    async moveTask({ commit, dispatch, state }, update) {
      await api.put('tasks/' + state.temp[0].id, update)
      dispatch("getTasks", update.listId)
      dispatch("getTasks", state.temp[0].listId)
      commit("moveTask", update.listId)

    },
    //#endregion

    //#region -- NOTES --
    async deleteNote({ commit, dispatch }, note) {
      try {
        let res = await api.delete("notes/" + note.id)
        dispatch("getNotes", note.taskId)

      } catch (error) {
        console.error(error)
      }
    },
    async addNote({ commit, dispatch }, noteData) {
      try {
        let res = await api.post('notes', noteData)
        commit("addNote", res.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "boards" })
      }
    },
    async getNotes({ commit, dispatch }, id) {
      try {
        let res = await api.get("tasks/" + id + "/notes");
        commit("setNotes", { id, data: res.data })
      } catch (error) {
        console.error(error)
        router.push({ name: "Boards" })
      }
    }
    ////#endregion
  },
  modules: {
    socketStore
  }
})
