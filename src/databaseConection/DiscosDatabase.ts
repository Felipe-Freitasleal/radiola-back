import { OnlyDiscosDB, OnlyMusicasDB } from "../types/Types";
import { DBConnection } from "./DBConnection";

export class DiscosDatabase extends DBConnection {
  public static TABLE_DISCOS = "discos";
  public static TABLE_MUSICAS = "musicas";

  public getOnlyDiscosDB = async () => {
    const discos: OnlyDiscosDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_DISCOS
    )
      .select("*")
      .from("discos");

    console.log("discos: ", discos);

    return discos;
  };

  public getOnlyMusicasInDB = async (id: number) => {
    const musicas: OnlyMusicasDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_MUSICAS
    )
      .select()
      .where("musicas.disco_id", "=", id);

    return musicas;
  };
}
