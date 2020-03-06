<template>
  <div class="vw bg-img">
    <navbar />
    <div class="row container-fluid" id="paddingRight">
      <div class="col-1">
        <button @click="deleteBoard" class="btn bg-trasparent" id="trash">
          <i class="text-danger far fa-trash-alt fa-2x "></i>
        </button>
      </div>
      <div class="col-10">
        <div class="board text-light board-font">
          <h1 v-if="board.title" id="board-title"><strong>{{board.title}}</strong></h1>
          <h1 v-else>Loading...</h1>
          <h1>{{board.description}}</h1>
        </div>
      </div>
    </div>
    <form @submit.prevent="addList" class="p-3">
      <input type="text" placeholder="title" v-model="newList.title" required class="rounded" />
      <button type="submit" class="btn btn-info">Create List</button>
    </form>
    <div class="row list-area">
      <list v-for="(listObj, index) in lists" :key="listObj.id" :listData="listObj" :listIndex="index" />
    </div>
  </div>
</template>

<script>
  import NotificationService from "../NotificationService"
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
        let data = {
          boardId: this.$route.params.boardId,
          title: this.newList.title
        };
        this.$store.dispatch("addList", data);
        this.$store.dispatch("getListsByBoardId", {
          id: this.$route.params.boardId
        });
        NotificationService.toast("How NEAT is that!")
      },
      async deleteBoard() {
        if (await NotificationService.confirmDelete()) {
          this.$store.dispatch("deleteBoard", this.$route.params.boardId);
        }
      }
    }
  };
</script>

<style scoped>
  .list-area {
    overflow-x: auto;
    height: 65vh;
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
    font-family: 'Amatic SC';
    text-shadow: 4px 4px 1px rgb(8, 8, 8);
  }

  #board-title {
    font-size: 4rem;
  }

  #trash {
    height: 5rem
  }

  #paddingRight {
    padding-right: 0;
  }

  .bg-img {
    background-image: url("../assets/cloud.jpg");
    background-size: cover;
  }
</style>