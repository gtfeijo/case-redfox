import { Pokemon } from "../model/Pokemon";
import { BaseDataBase } from "./BaseDataBase";

export class PokemonDataBase extends BaseDataBase {
  public async getAllPokemons(
    name: any,
    type: any,
    sort: any,
    order: any,
    size: any,
    offset: any
  ): Promise<Pokemon[]> {
    try {
      const pokemon = await BaseDataBase.connection("pokemon_go2")
        .select(
          "name",
          "pokedex_number" as "pokedexNumber",
          "generation",
          "type",
          "stat_total" as "statTotal",
          "atk",
          "def",
          "sta"
        )
        .where("name", "LIKE", `%${name}%`)
        .where("type", "LIKE", `%${type}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset);

      const result = pokemon.map((poke) => {
        return Pokemon.toPokemonModel(poke);
      });
      return result;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
