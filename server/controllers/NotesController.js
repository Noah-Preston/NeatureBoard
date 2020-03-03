import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { noteService } from "../services/NoteService";

export class NoteController extends BaseController {
  constructor() {
    super("api/notes");
    this.router = express
      .Router()
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/:id", this.getNoteById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getNoteById(req, res, next) {
    try {
      let data = await noteService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await noteService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id, req.userInfo.email)
      res.status(410).send("DeLorted")
    } catch (error) {
      next(error)
    }
  }
}