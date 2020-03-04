<template>
  <div class="col-11 col-md-2 card list-card mx-3">
    <h3 class="pt-3 list-font">{{listData.title}}</h3>
    <hr style="width:1; size=60; background:black;" />
    <div class="row"></div>
    <div class="row h-100">
      <div class="col-4 align-self-end">
        <button @click="deleteList" class="btn btn-lg bg-trasparent bottom">
          <i class="text-danger far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import NotificationService from "../NotificationService"

  export default {
    name: "List",
    computed: {
      lists() {
        let data = this.$store.state.lists;
        return data;
      },
      activeBoard() {
        return this.$store.state.activeBoard;
      }
    },

    props: ["listData", "listIndex"],
    methods: {
      async deleteList() {
        if (await NotificationService.confirmDelete()) {
          this.$store.dispatch("deleteList", this.listData);
        }
      }
    }
  };
</script>

<style>
  .list-card {
    width: 35vh;
    height: 54vh;
    margin-bottom: 0vh;
    background-color: rgb(173, 173, 173);
    box-shadow: 3px 3px 7px 2px black;
  }

  .list-font {
    font-family: "Boogaloo", cursive;
    color: rgb(0, 0, 0);
    text-shadow: 1px 1px rgb(255, 255, 255);
  }

  .bottom {
    bottom: 0;
  }
</style>