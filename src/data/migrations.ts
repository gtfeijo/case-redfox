import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {
  async createTable() {
    await BaseDataBase.connection.raw(`
        create table pokemon_go2(
            name VARCHAR(255) NOT NULL,
            pokedex_number INT PRIMARY KEY,
            generation INT,
            type VARCHAR(255),
            stat_total INT,
            atk INT,
            def INT,
            sta INT
        );
    `);
    console.log("Tabelas criadas com sucesso!");
  }
}

const createTableMigrations = new Migrations();
createTableMigrations.createTable();
