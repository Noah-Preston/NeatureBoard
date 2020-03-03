import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Note = new Schema({
  title: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  TaskId: { type: ObjectId, ref: 'Task', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })


Note.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

export default Note
