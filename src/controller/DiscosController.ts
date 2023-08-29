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
    const idDisco = req.params.id;
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
}
