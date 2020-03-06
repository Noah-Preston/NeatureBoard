<template>
  <div>
    <navbar />
    <div class="container-fluid boards boardsBackground">
      <form @submit.prevent="addBoard" class="p-3">
        <input type="text" placeholder="title" v-model="newBoard.title" required class="rounded" />
        <input type="text" placeholder="description" v-model="newBoard.description" class="rounded" />
        <button type="submit" class="btn btn-success">Create Board</button>
      </form>
      <div v-for="board in boards" :key="board.id">
        <div class="row p-2">
          <div class="col-4"></div>
          <router-link
            :to="{name: 'board', params: {boardId: board._id}}"
            class="col-4 card text-white board-card"
          >
            <h5>{{board.title}}</h5>
            <span>{{board.description}}</span>
          </router-link>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationService from "../NotificationService";
import Navbar from "../components/Navbar";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
      NotificationService.toast("What a beaut!");
    }
  },
  components: {
    Navbar
  }
};
</script>

<style>
.boardsBackground {
  background-image: URL("../assets/luca.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
  width: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
  margin-bottom: 0vh;
}
.board-card {
  background-color: rgba(59, 59, 59, 0.507);
}
.board-card:hover {
  text-decoration: none;
  background-color: rgba(59, 59, 59);
  margin-left: 0.7rem;
  transition: 0.25s ease;
}
</style>