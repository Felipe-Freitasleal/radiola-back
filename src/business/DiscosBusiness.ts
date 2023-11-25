import { DiscosDatabase } from "../databaseConection/DiscosDatabase";
import {
  GetAlbuns,
  GetSongsModel,
  PostAlbumModel,
  PostSongsModel,
} from "../models/DiscosModels";
import {
  getDiscosFromDB,
  getSongsFromDB,
  postAlbumToDB,
  postSongs,
} from "../types/Types";

export class DiscosBusiness {
  constructor(private discosDatabase: DiscosDatabase) {}

  // métodos
  public postAlbumModel = async ({
    nome,
    artista,
    ano,
    capa,
    genero,
    preco,
  }: postAlbumToDB) => {
    const newAlbum = new PostAlbumModel(
      nome,
      artista,
      ano,
      capa,
      genero,
      preco
    );

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
        disco.capa,
        disco.genero,
        disco.preco
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

  public getSongsBusiness = async (id: string) => {
    const songList: getSongsFromDB[] = await this.discosDatabase.getSongsFromDb(
      id
    );

    const songs = songList.map((song) => {
      const s = new GetSongsModel(
        song.id,
        song.nome,
        song.duracao,
        song.compositor,
        song.disco_id
      );

      const songsModel = s.songsFromDB();
      return songsModel;
    });

    return songs;
  };
}
