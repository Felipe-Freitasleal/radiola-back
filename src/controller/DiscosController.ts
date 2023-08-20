import {Request, Response} from "express";
import { DiscosBusiness } from "../business/DiscosBusiness";


export class DiscosController {
    constructor (
        private discosBusiness: DiscosBusiness
    ) {}

    // métodos
    public getDiscos = async (req: Request, res: Response) => {
        try {
            const output = await this.discosBusiness.getDiscos();

            res.status(200).send(output);
        } catch (error) {
            console.log(error)

            if (res.statusCode === 200) {
                res.status(500)
            }

            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro Inesperado.")
            }
        }
    }
}