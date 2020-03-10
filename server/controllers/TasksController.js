import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { taskService } from "../services/TaskService";
import { noteService } from "../services/NoteService";
import socketService from "../services/SocketService";

export class TasksController extends BaseController {
  constructor() {
    super("api/tasks");
    this.router = express
      .Router()
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/:id", this.getTaskById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .get("/:id/notes", this.getNotesByTaskId)
  }
  async getTaskById(req, res, next) {
    try {
      let data = await taskService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await taskService.create(req.body)
      socketService.messageRoom("tasks", "newTask", data)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await taskService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await taskService.delete(req.params.id, req.userInfo.email)
      socketService.messageRoom("tasks")
      res.send("DeLorted")
    } catch (error) {
      next(error)
    }
  }
  async getNotesByTaskId(req, res, next) {
    try {
      let data = await noteService.getNotesByTaskId(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}