<template>
  <div class="col py-1">
    <div class="card" style="width: 12.5rem;">
      <ul class="list-group list list-group-flush">
        <li>
          <i @click="deleteTask" class="text-danger far fa-trash-alt"></i>
          {{this.taskData.content}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NotificationService from "../NotificationService";
export default {
  name: "Task",
  props: ["taskData", "taskIndex"],
  computed: {
    tasks() {
      let data = this.$store.state.tasks;
      return data;
    }
  },
  methods: {
    async deleteTask() {
      if (await NotificationService.confirmDelete()) {
        this.$store.dispatch("deleteTask", this.taskData);
      }
    }
  }
};
</script>

<style>
.list {
  list-style-type: none;
}
</style>