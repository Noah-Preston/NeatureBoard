import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board';
import ListSchema from "../models/List";
import TaskSchema from "../models/Task";
import NoteSchema from "../models/Note"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Board", BoardSchema);
  Lists = mongoose.model("List", ListSchema);
  Tasks = mongoose.model("Task", TaskSchema);
  Notes = mongoose.model("Note", NoteSchema);
}

export const dbContext = new DbContext();
