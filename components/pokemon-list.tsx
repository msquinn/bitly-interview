"use client";

import Link from "next/link";
import { getPokemonList } from "@/actions/pokemon";
import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { POKEMON_COUNT_TO_FETCH } from "@/lib/constants";

export default function PokemonList({
  pokemonInitial,
}: {
  pokemonInitial: PokeAPI.NamedAPIResourceList;
}) {
  const [pokemon, setPokemon] =
    useState<PokeAPI.NamedAPIResourceList>(pokemonInitial);
  const [offset, setOffset] = useState(POKEMON_COUNT_TO_FETCH);
  const { ref, inView } = useInView();

  useEffect(() => {
    const loadMorePokemon = async () => {
      const newPokemon = await getPokemonList(offset, POKEMON_COUNT_TO_FETCH);
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        results: [...prevPokemon.results, ...newPokemon.results],
      }));
      setOffset(offset + POKEMON_COUNT_TO_FETCH);
    };
    if (inView) {
      loadMorePokemon();
    }
  }, [inView, offset]);

  return (
    <div className="w-full max-w-md border border-foreground rounded-md bg-card p-5 m-4">
      <ul>
        {pokemon.results.map((pokemon) => (
          <li key={pokemon.url}>
            <Link
              className="underline cursor-pointer"
              href={`pokemon/${pokemon.name}`}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
      <div ref={ref}>Loading...</div>
    </div>
  );
}
