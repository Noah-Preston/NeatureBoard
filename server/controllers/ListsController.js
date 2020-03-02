import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { listService } from "../services/ListService";

export class ListController extends BaseController {
  constructor() {
    super("api/lists");
    this.router = express
      .Router()
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/:id", this.getListById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getListById(req, res, next) {
    try {
      let data = await listService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await listService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await listService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await listService.delete(req.params.id, req.userInfo.email)
      res.status(410).send("DeLorted")
    } catch (error) {
      next(error)
    }
  }
}