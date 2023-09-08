import express from "express";
import { DiscosController } from "../controller/DiscosController";
import { DiscosBusiness } from "../business/DiscosBusiness";
import { DiscosDatabase } from "../databaseConection/DiscosDatabase";

export const discosRouter = express.Router();

const discosController = new DiscosController(
  new DiscosBusiness(new DiscosDatabase())
);

discosRouter.get("/all", discosController.getOnlyDiscos);
discosRouter.get("/songs/:albumid", discosController.getOnlyMusicas);
discosRouter.post("/", discosController.postAlbum);
