import { getPokemonList } from "@/actions/pokemon";
import PokemonList from "@/components/pokemon-list";
import { POKEMON_COUNT_TO_FETCH }  from "@/lib/constants";


export default async function Home() {
  const pokemonInitial = await getPokemonList(0, POKEMON_COUNT_TO_FETCH);
  return (
    <div className="flex  flex-col items-center w-full">
      <h1 className="text-4xl font-bold">Pokedex</h1>
      <PokemonList pokemonInitial={pokemonInitial} />
    </div>
  );
}
