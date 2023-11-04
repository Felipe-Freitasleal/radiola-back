import {
  getDiscosFromDB,
  getSongsFromDB,
  postAlbumToDB,
  postSongs,
} from "../types/Types.js";
import { DBConnection } from "./DBConnection";

export class DiscosDatabase extends DBConnection {
  public static TABLE_DISCOS = "discos";
  public static TABLE_MUSICAS = "musicas";

  public postAlbumIntoDB = async (album: postAlbumToDB) => {
    await DBConnection.connection(DiscosDatabase.TABLE_DISCOS).insert(album);
  };

  public getAllDiscos = async () => {
    const getDiscos: getDiscosFromDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_DISCOS
    ).select();

    return getDiscos;
  };

  public postSongsIntoDB = async (songsList: postSongs[]) => {
    for (let i = 0; songsList.length > i; i++) {
      const songs: postSongs = songsList[i];
      await DBConnection.connection(DiscosDatabase.TABLE_MUSICAS).insert(songs);
    }
  };

  public getSongsFromDb = async (id: string) => {
    const getSongs: getSongsFromDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_MUSICAS
    )
      .select()
      .where("disco_id", "=", `${Number(id)}`);

    return getSongs;
  };
}
