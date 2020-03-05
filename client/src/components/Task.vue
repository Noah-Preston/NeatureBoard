<template>
  <div class="col py-1">
    <div
      class="card"
      style="width: 12.5rem;"
      draggable="true"
      @dragstart="pickUp"
      @dragover.prevent
    >
      <ul class="list-group list list-group-flush">
        <li>
          <i @click="deleteTask" class="text-danger far fa-trash-alt mouse"></i>
          <span
            data-toggle="modal"
            data-target="#exampleModal"
            class="mouse"
          >{{this.taskData.content}}</span>
        </li>
      </ul>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title text-center taskFont d-flex align-self-center"
              id="exampleModalLabel"
            >{{this.taskData.content}}</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list">
              <Note
                v-for="(noteObj, index) in notes"
                :key="noteObj.id"
                :noteData="noteObj"
                :noteIndex="index"
              />
            </ul>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Add Note.."
                  v-model="newNote.content"
                  required
                  class="rounded form-width"
                />
                <button type="button" class="btn btn-primary" @click="addNote">+</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationService from "../NotificationService";
import Note from "./Note";
export default {
  name: "Task",
  props: ["taskData", "taskIndex"],
  mounted() {
    return this.$store.dispatch("getNotes", this.taskData._id);
  },
  data() {
    return {
      newNote: {
        taskId: this.taskData.id
      }
    };
  },
  components: {
    Note
  },
  computed: {
    tasks() {
      let data = this.$store.state.tasks;
      return data;
    },
    notes() {
      return this.$store.state.notes[this.taskData._id];
    }
  },

  methods: {
    async deleteTask() {
      if (await NotificationService.confirmDelete()) {
        this.$store.dispatch("deleteTask", this.taskData);
      }
    },
    addNote() {
      let data = {
        taskId: this.taskData.id,
        content: this.newNote.content
      };
      this.$store.dispatch("addNote", data);
    },
    pickUp() {
      this.$store.dispatch("pickUp", this.taskData);
    }
  }
};
</script>

<style>
.list {
  list-style-type: none;
}

.mouse {
  cursor: pointer;
}

.taskFont {
  font-family: "Amatic SC";
}
</style>