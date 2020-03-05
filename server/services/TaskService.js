import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class TaskService {
  async getAll(userEmail) {
    return await dbContext.Tasks.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Tasks.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Tasks.create(rawData)
    return data
  }

  async edit(id, update) {
    let data = await dbContext.Tasks.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Tasks.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
  async getTasksByListId(id) {
    return await dbContext.Tasks.find({ listId: id })
  }
}


export const taskService = new TaskService()