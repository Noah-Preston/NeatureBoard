<template>
  <div class="col-12 py-1 card-width">
    <div class="card" style="width: auto;" draggable="true" @dragstart="pickUp" @dragover.prevent>
      <ul class="list-group list list-group-flush">
        <li>
          <span class="pl-1">{{this.taskData.content}}</span>
          <i
            @click="deleteTask"
            class="text-danger far fa-trash-alt mouse float-right pt-1 pr-1 trash"
          ></i>
          <br />
          <div
            class="pl-1 float-left note-count"
            data-toggle="modal"
            :data-target="'#taskmodal' + this.taskData.id"
          >
            <strong>Notes:{{this.notes.length}}</strong>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="modal fade"
      :id="'taskmodal' + this.taskData.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header misty">
            <h1
              class="modal-title text-center taskFont d-flex align-self-center"
              id="exampleModalLabel"
            >
              <strong>{{this.taskData.content}}</strong>
            </h1>
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
          <div class="modal-footer misty-bottom">
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
      return this.$store.state.notes[this.taskData._id] || [];
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
      this.newNote = {
        content: "",
        taskId: this.taskData.id
      };
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
  padding-left: 0;
}
.card-width {
  width: fit-content;
}
.mouse {
  cursor: pointer;
}
.note-count {
  font-family: "Amatic SC";
  cursor: pointer;
}
.note-count:hover {
  margin-left: 0.2rem;
  transition: 0.25s ease;
  color: rgb(116, 176, 255);
}
.misty {
  background-image: url("../assets/misty.jpeg");
  background-size: cover;
}

.misty-bottom {
  background-image: url("../assets/misty-bottom.jpeg");
  background-size: cover;
}
.trash:hover {
  text-shadow: 1px 1px black;
  transition: 0.2s;
}
</style>