<template>
  <div class="vw bg-img">
    <navbar />
    <div class="board text-light board-font">
      <h1 v-if="board.title">{{board.title}}</h1>
      <h1 v-else>Loading...</h1>
      <h3>{{board.description}}</h3>
    </div>
    <form @submit.prevent="addList" class="p-3">
      <input type="text" placeholder="title" v-model="newList.title" required class="rounded" />
      <button type="submit" class="btn btn-info">Create List</button>
    </form>
    <div class="row list-area">
      <list
        v-for="(listObj, index) in lists"
        :key="listObj.id"
        :listData="listObj"
        :listIndex="index"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import List from "../components/List";

export default {
  data() {
    return {
      newList: {
        boardId: this.$route.params.boardId
      }
    };
  },
  mounted() {
    this.$store.dispatch("getBoardById", {
      id: this.$route.params.boardId
    });
    this.$store.dispatch("getListsByBoardId", {
      id: this.$route.params.boardId
    });
  },
  name: "board",
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      let data = this.$store.state.lists;
      return data;
    }
  },
  props: ["boardId"],
  components: {
    Navbar,
    List
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);
      this.newList = { title: "" };
    },
    addList() {
      let data = {
        boardId: this.$route.params.boardId,
        title: this.newList.title
      };
      this.$store.dispatch("addList", data);
    }
  }
};
</script>

<style scoped>
.list-area {
  overflow-x: auto;
  height: 62.3vh;
  white-space: nowrap;
  margin-bottom: 0vh;
  flex-wrap: nowrap;
  width: 100vw;
  margin-left: 0;
}
.vw {
  max-width: 100%;
}
.board-font {
  font-family: "Boogaloo", cursive;
}
.bg-img {
  background-image: url("../assets/bark.jpeg");
  background-size: cover;
}
</style>