import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(8080, () => {
  console.log("Servidor na porta 8080");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong!");
});

app.get("/cors", (req: Request, res: Response) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send("O CORS funcionou!");
});

app.get("/artists", async (req: Request, res: Response) => {
  try {
    let getArtist: any = await axios.get(`https://api.deezer.com/artist/1`);
    console.log(getArtist.data);
    const artists = getArtist.data
    if (artists) {
      res.status(200).send(artists);
    }
  } catch (error) {
    console.log(error.message);
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
