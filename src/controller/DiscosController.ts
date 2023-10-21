import { Request, Response } from "express";
import { DiscosBusiness } from "../business/DiscosBusiness";

export class DiscosController {
  constructor(private discosBusiness: DiscosBusiness) {}

  // métodos
  public postAlbumController = async (req: Request, res: Response) => {
    const nome = req.body.nome;
    const artista = req.body.artista;
    const ano = req.body.ano;
    const file = req.file;

    console.log("Info: ", nome, artista, ano, file);
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

      await this.discosBusiness.postAlbumModel({
        nome,
        artista,
        ano,
        capa: file.path,
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
}
