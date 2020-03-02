<template>
  <div>
    <navbar />
    <div class="board">
      <h1 v-if="board.title">{{board.title}}</h1>
      <h1 v-else>Loading...</h1>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  export default {
    name: "board",
    computed: {
      board() {
        //FIXME This does not work on page reload because the activeBoard is empty in the store
        return this.$store.state.activeBoard;
      }
    },
    props: ["boardId"],
    components: {
      Navbar,
    }
  };
</script>