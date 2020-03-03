<template>
  <div>
    <navbar />
    <div class="board">
      <h1 v-if="board.title">{{board.title}}</h1>
      <h1 v-else>Loading...</h1>
      <h3>{{board.description}}</h3>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  mounted() {
      this.$store.dispatch(
        "setActiveBoard",
        this.$store.state.boards.find(b => b.id == this.$route.params.boardId)
      );
  },
  name: "board",
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"],
  components: {
    Navbar
  }
};
</script>