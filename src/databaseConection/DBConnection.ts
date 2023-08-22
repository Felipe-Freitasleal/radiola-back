import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class DBConnection{
    protected static connection = knex({
        client: 'mysql',
        connection: {
          host : 'localhost',
          port : 3306,
          user : 'root',
          password : process.env.DB_PASSWORD,
          database : 'radiola_back'
        },
    });
}