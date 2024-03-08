import { getDataServer } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { PokeAPI } from "pokeapi-types";

type PokemonPageProps = {
  params: { name: string };
};

type PokemonCries = {
  latest: string;
  legacy: string;
};

export default async function Page({ params }: PokemonPageProps) {
  const pokemonInstance = await getDataServer<
    PokeAPI.Pokemon & { cries: PokemonCries }
  >(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  return (
    <div className="space-y-2">
      <Link className="flex items-center -mx-24 underline" href="/">
        <ChevronLeftIcon className="w-4 h-4" />
        Back
      </Link>
      <Image
        className="border border-border rounded-full bg-slate-600"
        src={pokemonInstance.sprites.front_default}
        alt={params.name}
        width={200}
        height={200}
      />
      <h1 className="font-bold text-4xl capitalize">{params.name}</h1>
      <div className="flex space-x-2">
        <p>Height: {pokemonInstance.height}</p>
        <p>Weight: {pokemonInstance.weight}</p>
        <p>ID: {pokemonInstance.id}</p>
      </div>
      <h2 className="font-bold text-lg">Abilities</h2>
      <ul>
        {pokemonInstance.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <div className="font-bold text-lg">Cries</div>
      <audio controls>
        <source src={pokemonInstance.cries.latest} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
