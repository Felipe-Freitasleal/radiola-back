import { Request, Response } from "express";
import { DiscosBusiness } from "../business/DiscosBusiness";
import { postSongs } from "../types/Types";
import path from "path";
import fs from "fs";

export class DiscosController {
  constructor(private discosBusiness: DiscosBusiness) {}

  // métodos
  public postAlbumController = async (req: Request, res: Response) => {
    const nome = req.body.nome;
    const artista = req.body.artista;
    const ano = req.body.ano;
    const file = req.file;
    const genero = req.body.genero;
    const preco = req.body.preco;

    try {
      if (nome === undefined || artista === undefined || ano === undefined) {
        res.status(400);
        throw new Error("Nome, artista e ano são obrigatórios!");
      }

      if (nome !== undefined) {
        if (typeof nome !== "string") {
          res.status(400);
          throw new Error("O nome deve ser uma string");
        }
      }

      if (artista !== undefined) {
        if (typeof artista !== "string") {
          res.status(400);
          throw new Error("O artista deve ser uma string");
        }
      }

      if (ano !== undefined) {
        const anoAlbum = Number(ano);
        if (typeof anoAlbum !== "number") {
          res.status(400);
          throw new Error("O ano deve ser um número");
        }
      }

      if (genero !== undefined) {
        if (typeof genero !== "string") {
          res.status(400);
          throw new Error("O genero deve ser uma string");
        }
      }

      await this.discosBusiness.postAlbumModel({
        nome,
        artista,
        ano,
        capa: file.path,
        genero,
        preco,
      });

      res.status(201).send({ message: "Disco criado com sucesso!" });
    } catch (error) {
      console.log(error);

      if (res.statusCode === 201) res.status(500);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado!");
      }
    }
  };

  public getAllDiscos = async (req: Request, res: Response) => {
    try {
      const output = await this.discosBusiness.getAllDiscos();

      if (!output) throw new Error();

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode == 200) res.status(500);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };

  public postSongs = async (req: Request, res: Response) => {
    try {
      const songs: postSongs[] = req.body;

      for (let i = 0; songs.length > i; i++) {
        if (!songs[i].nome || !songs[i].duracao || !songs[i].disco_id) {
          res.status(400);
          throw new Error(
            "Nome, compositor, duração e id do disco são obrigatórios!"
          );
        }

        if (typeof songs[i].nome !== "string") {
          res.status(400);
          throw new Error("O nome da música deve ser uma string");
        }

        if (typeof songs[i].compositor !== "string") {
          res.status(400);
          throw new Error("O compositor da música deve ser uma string");
        }

        if (typeof songs[i].duracao !== "number") {
          res.status(400);
          throw new Error("A duração da música deve ser um número");
        }

        if (typeof songs[i].disco_id !== "number") {
          res.status(400);
          throw new Error("O id do disco deve ser um número");
        }
      }

      await this.discosBusiness.postSongsModel(songs);

      res.status(201).send("Musicas postadas com sucesso!");
    } catch (error) {
      console.log(error);

      if (res.statusCode === 201) res.status(500);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado.");
      }
    }
  };

  public getSongs = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (typeof id !== "string") throw new Error("O id deve ser uma string.");

      const output = await this.discosBusiness.getSongsBusiness(id);

      if (!output) throw new Error();

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) res.status(500);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado!");
      }
    }
  };

  public getCover = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log("filePath id: ", id);

      const file = path.resolve("src/covers/" + id);
      console.log("file:  ", file);

      if (!fs.existsSync(file)) {
        res.status(404).send("Imagem não encontrada");
        return;
      }

      const imageBuffer = fs.readFileSync(file);
      const imageBase64 = Buffer.from(imageBuffer).toString("base64");
      // console.log("imageBase64: ", imageBase64);

      res.setHeader("Content-Type", "image/jpg");
      res.send(imageBase64);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro interno do servidor");
    }
  };
}
