import { DiscosDatabase } from "../databaseConection/DiscosDatabase"
import { DiscosModels } from "../models/DiscosModels"
import { DiscosFromDB } from "../types/Discos"

export class DiscosBusiness {
    constructor (
        private discosDatabase: DiscosDatabase
    ) {}

    // métodos
    public getDiscos = async () => {
        const getDiscoInDB: any = await this.discosDatabase.getDiscosDB()

        const discos = getDiscoInDB.map((discoDB: any) => {
            const disco = new DiscosModels(
                discoDB.id,
                discoDB.nome,
                discoDB.artista,
                discoDB.ano,
                discoDB.capa,
                discoDB.musicas
            )

            return disco.getToDB()
        })

        return discos
    }
}