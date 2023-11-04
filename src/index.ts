import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { discosRouter } from "./routers/DiscosRouter";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(Number(process.env.PORT), () => {
  console.log(
    `Servidor rodando na porta: http://localhost:${Number(process.env.PORT)}`
  );
});

app.use("/album", discosRouter);
