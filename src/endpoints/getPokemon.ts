import { Request, Response } from "express";
import { PokemonDataBase } from "../data/PokemonDataBase";

export async function getPokemon(req: Request, res: Response): Promise<void> {
  try {
    const name: any = req.query.name || "%";
    const type: any = req.query.type || "%";
    const sort: string = req.query.sort === "type" ? "type" : "name";
    const order: string = req.query.order === "DESC" ? "DESC" : "ASC";
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 10;
    const offset = size * (page - 1);

    const pokemonDataBase = new PokemonDataBase();
    const pokemon = await pokemonDataBase.getAllPokemons(
      name,
      type,
      sort,
      order,
      size,
      offset
    );

    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
