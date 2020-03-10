<template>
  <div
    class="list-height col-11 col-md-3 card list-card mx-3"
    @dragover.prevent
    @drop.prevent="moveTask"
  >
    <h3 class="pt-3 list-font">{{listData.title}}</h3>
    <hr style="width:1; size: 60; background:black; margin-top: 0;" />
    <div class="row">
      <div class="col card-width">
        <form @submit.prevent="addTask" class="form-width">
          <input
            type="text"
            placeholder=" add a new task"
            v-model="newTask.content"
            required
            class="rounded form-width"
            id="formv"
          />
          <button type="submit" class="btn btn-sm btn-info">+</button>
        </form>
        <div class="row text-center align-items-center">
          <Task
            v-for="(taskObj, index) in tasks"
            :key="taskObj.id"
            :taskData="taskObj"
            :taskIndex="index"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1 col-pad align-self-end">
        <button @click="deleteList" class="btn btn-lg bg-trasparent bottom">
          <i class="text-danger far fa-trash-alt" id="trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationService from "../NotificationService";
import Task from "./Task";

export default {
  components: {
    Task
  },
  props: ["listData", "listIndex"],
  data() {
    return {
      newTask: {
        listId: this.listData.id
      }
    };
  },
  mounted() {
    return this.$store.dispatch("getTasks", this.listData._id);
  },
  name: "List",
  computed: {
    lists() {
      let data = this.$store.state.lists;
      return data;
    },
    tasks() {
      return this.$store.state.tasks[this.listData._id];
    },
    activeBoard() {
      return this.$store.state.activeBoard;
    }
  },

  methods: {
    addTask() {
      let data = {
        listId: this.listData.id,
        content: this.newTask.content
      };
      this.$store.dispatch("addTask", data);
      this.newTask = {
        content: "",
        listId: this.listData.id
      };
      NotificationService.toast("That's pretty NEAT!");
    },
    async deleteList() {
      if (await NotificationService.confirmDelete()) {
        this.$store.dispatch("deleteList", this.listData);
      }
    },
    moveTask() {
      let update = {
        listId: this.listData.id
      };
      this.$store.dispatch("moveTask", update);
    }
  }
};
</script>

<style>
.list-card {
  width: 35vh;
  height: 54vh;
  margin-bottom: 0vh;
  background-color: rgb(107, 107, 107);
  box-shadow: 3px 3px 7px 2px black;
}

.list-font {
  font-family: "Gotu", sans-serif;
  text-shadow: 1px 1px rgb(8, 8, 8);
  color: rgb(255, 255, 255);
}
.list-height {
  height: fit-content;
}

.bottom {
  bottom: 0;
}
.card-width {
  width: fit-content;
}
#formw {
  width: 80%;
  margin: 1px;
}

.form-width {
  width: 8.5rem;
}
.col-pad {
  padding: 0;
}
#trash:hover {
  margin-left: 0.1rem;
  text-shadow: 1px 1px black;
  transition: 0.3s;
}
</style>