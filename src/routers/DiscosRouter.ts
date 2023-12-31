import express from "express";
import multer from "multer";
import { DiscosController } from "../controller/DiscosController";
import { DiscosBusiness } from "../business/DiscosBusiness";
import { DiscosDatabase } from "../databaseConection/DiscosDatabase";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/covers");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export const discosRouter = express.Router();

const discosController = new DiscosController(
  new DiscosBusiness(new DiscosDatabase())
);

discosRouter.post(
  "/newAlbum",
  upload.single("file"),
  discosController.postAlbumController
);

discosRouter.get("/", discosController.getAllDiscos);

discosRouter.post("/newSongs", discosController.postSongs);

discosRouter.get("/songs/:id", discosController.getSongs);

discosRouter.get("/capa/:id", discosController.getCover);
