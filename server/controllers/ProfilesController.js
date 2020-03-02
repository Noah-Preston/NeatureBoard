import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import { boardService } from "../services/BoardService";

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profile");
    this.router = express
      .Router()
      .use(auth0provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
      .put("/:id", this.edit)
      .get("/:id/boards", this.getBoardsByProfileId)
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getBoardsByProfileId(req, res, next) {
    try {
      let data = await boardService.getBoardsByProfileId(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
