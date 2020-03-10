import io from "socket.io-client";

let socket = {};

export const socketStore = {
  actions: {
    initalizeSocket({ commit, dispatch }) {
      socket = io("//localhost:3000");
      socket.on("CONNECTED", data => {
        console.log("Connected to socket, That's pretty neat!");
      });

      socket.on("addBoard", data => {
        dispatch("getBoards");
      });

      socket.on("deleteBoard", id => {
        commit("removeBoard", id);
      });

      socket.on("deleteList", data => {
        dispatch("getListsByBoardId", data);
      });

      socket.on("addList", data => {
        dispatch("getListsByBoardId", data);
      });

      socket.on("deleteTask", data => {
        dispatch("getTasks", data);
      });

      socket.on("addTask", data => {
        commit("addTask", data);
      });

      socket.on("addNote", data => {
        commit("addNote", data);
      });

      socket.on("deleteNote", data => {
        dispatch("getNotes", data);
      });
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};