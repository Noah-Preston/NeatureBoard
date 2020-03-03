<template>
  <div>
    <navbar />
    <div class="board">
      <h1 v-if="board.title">{{board.title}}</h1>
      <h1 v-else>Loading...</h1>
      <h3>{{board.description}}</h3>
    </div>
    <form @submit.prevent="addList" class="p-3">
      <input type="text" placeholder="title" v-model="newList.title" required class="rounded" />
      <button type="submit" class="btn btn-success">Create List</button>
    </form>
    <div class="row">
      <list v-for="(listObj, boardId) in lists" :key="listObj.id" :listData="listObj" :listIndex="index" />
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

      this.$store.dispatch(
        "getBoardById", {
        id: this.$route.params.boardId
      }
      )

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