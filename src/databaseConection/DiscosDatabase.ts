import { getDiscosFromDB, postAlbumToDB } from "../types/Types";
import { DBConnection } from "./DBConnection";

export class DiscosDatabase extends DBConnection {
  public static TABLE_DISCOS = "discos";
  // public static TABLE_MUSICAS = "musicas";

  public postAlbumIntoDB = async (album: postAlbumToDB) => {
    await DBConnection.connection(DiscosDatabase.TABLE_DISCOS).insert(album);
  };

  public getAllDiscos = async () => {
    const getDiscos: getDiscosFromDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_DISCOS
    ).select();

    console.log("getDiscos from DB: ", getDiscos);

    return getDiscos;
  };
}
