"use server";
import { getDataServer } from "@/lib/utils";
import { PokeAPI } from "pokeapi-types";

export const getPokemonList = async (
  offset: number,
  limit: number
): Promise<PokeAPI.NamedAPIResourceList> => {
  return await getDataServer<PokeAPI.NamedAPIResourceList>(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
};

export const getPokemon = async (name: string): Promise<PokeAPI.Pokemon> => {
  return await getDataServer<PokeAPI.Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
};
