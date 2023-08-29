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

app.get("/ping", (req: Request, res: Response) => {
  try {
    res.status(200).send("PONG!");
  } catch (error) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.use("/discos", discosRouter);
app.use("/musicas", discosRouter);
