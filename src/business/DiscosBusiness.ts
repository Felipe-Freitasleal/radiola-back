import { DiscosDatabase } from "../databaseConection/DiscosDatabase";
import {
  GetAlbuns,
  PostAlbumModel,
  PostSongsModel,
} from "../models/DiscosModels";
import { getDiscosFromDB, postAlbumToDB, postSongs } from "../types/Types";

export class DiscosBusiness {
  constructor(private discosDatabase: DiscosDatabase) {}

  // métodos
  public postAlbumModel = async ({
    nome,
    artista,
    ano,
    capa,
  }: postAlbumToDB) => {
    const newAlbum = new PostAlbumModel(nome, artista, ano, capa);

    const albumModel = newAlbum.albumIntoDB();

    await this.discosDatabase.postAlbumIntoDB(albumModel);
  };

  public getAllDiscos = async () => {
    const getDiscos = await this.discosDatabase.getAllDiscos();

    const verifyDiscos = getDiscos.map((disco: getDiscosFromDB) => {
      const d = new GetAlbuns(
        disco.id,
        disco.nome,
        disco.artista,
        disco.ano,
        disco.capa
      );

      return d;
    });

    return verifyDiscos;
  };

  public postSongsModel = async (songs: postSongs[]) => {
    const modelSongs = songs.map((song) => {
      const s = new PostSongsModel(
        song.nome,
        song.duracao,
        song.compositor,
        song.disco_id
      );

      const songsModel = s.songsIntoDB();
      return songsModel;
    });

    await this.discosDatabase.postSongsIntoDB(modelSongs);
  };
}
