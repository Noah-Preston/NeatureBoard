<template>
  <li>
    <i class="float-left fas fa-angle-right"></i>
    {{this.noteData.content}}
    <i
      @click="deleteNote"
      class="text-danger far fa-trash-alt float-right"
    ></i>
  </li>
</template>

<script>
import NotificationService from "../NotificationService";

export default {
  name: "Note",
  props: ["noteData", "noteIndex"],

  computed: {
    notes() {
      let data = this.$store.state.notes;
      return data;
    }
  },
  methods: {
    async deleteNote() {
      if (await NotificationService.confirmDelete()) {
        this.$store.dispatch("deleteNote", this.noteData);
      }
    }
  }
};
</script>

<style>
</style>