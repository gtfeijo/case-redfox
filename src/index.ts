import { app } from "./app";
import { getPokemon } from "./endpoints/getPokemon";

app.get("/pokemon", getPokemon);
