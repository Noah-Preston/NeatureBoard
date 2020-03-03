import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Task = new Schema({
  title: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  ListId: { type: ObjectId, ref: 'List', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })


Task.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

export default Task
