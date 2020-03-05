<template>
  <div class="col">{{this.taskData.content}}</div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData", "taskIndex"],
  computed: {
    tasks() {
      let data = this.$store.state.tasks;
      return data;
    }
  }
};
</script>

<style>
</style>