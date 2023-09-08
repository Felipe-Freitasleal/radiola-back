import { Request, Response } from "express";
import { DiscosBusiness } from "../business/DiscosBusiness";
import { OnlyDiscosDB, OnlyMusicasDB } from "../types/Types";

export class DiscosController {
  constructor(private discosBusiness: DiscosBusiness) {}

  // métodos
  public getOnlyDiscos = async (req: Request, res: Response) => {
    try {
      const output: OnlyDiscosDB[] = await this.discosBusiness.getOnlyDiscos();

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro Inesperado.");
      }
    }
  };

  public getOnlyMusicas = async (req: Request, res: Response) => {
    const idDisco = req.params.albumid;
    try {
      if (idDisco === undefined) throw new Error("Id ausente.");

      const input = Number(idDisco);

      const output: OnlyMusicasDB[] = await this.discosBusiness.getOnlyMusicas(
        input
      );

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) res.status(500);
      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro Inesperado!");
      }
    }
  };

  public postAlbum = async (req: Request, res: Response) => {
    const { nome, artista, ano, capa } = req.body;
    try {
      if (
        nome === undefined ||
        artista === undefined ||
        ano === undefined ||
        capa === undefined
      ) {
        res.status(400);
        throw new Error("Nome, artista, ano e capa são obrigatórios!");
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
        if (typeof ano !== "number") {
          res.status(400);
          throw new Error("O ano deve ser um número");
        }
      }

      // if (capa !== undefined) {
      //   if (typeof capa !== "string") {
      //     res.status(400);
      //     throw new Error("O capa deve ser uma string")
      //   }
      // };

      await this.discosBusiness.postAlbum({ nome, artista, ano, capa });

      res.status(201);
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
}
