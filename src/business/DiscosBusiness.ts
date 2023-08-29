import { DiscosDatabase } from "../databaseConection/DiscosDatabase";
import { MusicasModels } from "../models/DiscosModels";
import { OnlyMusicasDB } from "../types/Types";

export class DiscosBusiness {
  constructor(private discosDatabase: DiscosDatabase) {}

  // métodos
  public getOnlyDiscos = async () => {
    const getDiscoInDB: any = await this.discosDatabase.getOnlyDiscosDB();

    return getDiscoInDB;
  };

  public getOnlyMusicas = async (id: number) => {
    const getMusicasInDB: OnlyMusicasDB[] | undefined =
      await this.discosDatabase.getOnlyMusicasInDB(id);

    const musicas = getMusicasInDB.map((musica) => {
      const musicaFromDB = new MusicasModels(
        musica.id,
        musica.nome,
        musica.duracao,
        musica.compositor,
        musica.disco_id
      );

      return musicaFromDB.geOnlyMusicasDB();
    });

    return musicas;
  };
}
