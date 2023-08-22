import { OnlyDiscosDB } from "../types/Types";
import { DBConnection } from "./DBConnection";

export class DiscosDatabase extends DBConnection {
  public static TABLE_DISCOS = "discos";

  public getOnlyDiscosDB = async () => {
    const discos: OnlyDiscosDB[] = await DBConnection.connection(
      DiscosDatabase.TABLE_DISCOS
    )
      .select("*")
      .from("discos");

    console.log("discos: ", discos);

    return discos;
  };
}
