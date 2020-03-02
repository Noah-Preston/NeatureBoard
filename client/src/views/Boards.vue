<template>
  <div>
    <navbar />
    <div class="boards boardsBackground">

      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required class="rounded" />
        <input type="text" placeholder="description" v-model="newBoard.description" class="rounded" />
        <button type="submit" class="btn btn-success">Create Board</button>
      </form>
      <div v-for="board in boards" :key="board._id">
        <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
    },
    components: {
      Navbar,
    }
  };
</script>

<style>
  .boardsBackground {
    background-image: URL("../assets/board-background.jpg");
    background-size: cover;
    height: 86.8vh;
    width: 100vw;
    overflow-x: auto;
    width: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-bottom: 0vh;
  }
</style>