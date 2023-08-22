import { DiscosDatabase } from "../databaseConection/DiscosDatabase";
// import { DiscosModels } from "../models/DiscosModels";

export class DiscosBusiness {
  constructor(private discosDatabase: DiscosDatabase) {}

  // métodos
  public getOnlyDiscos = async () => {
    const getDiscoInDB: any = await this.discosDatabase.getOnlyDiscosDB();

    // const discos = getDiscoInDB.map((discoDB: any) => {
    //   const disco = new DiscosModels(
    //     discoDB.id,
    //     discoDB.nome,
    //     discoDB.artista,
    //     discoDB.ano,
    //     discoDB.capa,
    //     discoDB.musicas
    //   );

    //   return disco.getToDB();
    // });

    // return discos;

    return getDiscoInDB;
  };
}
