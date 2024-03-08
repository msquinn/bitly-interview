import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PokemonList from "@/components/pokemon-list";
import {
  mockPokemonList,
  mockPokemonListEmpty,
} from "../__mocks__/pokemonList";
describe("PokemonList", () => {
  it.each([
    ["with no results", mockPokemonListEmpty],
    ["with results", mockPokemonList],
  ])("should render the component %s", (_, pokemonInitial) => {
    render(<PokemonList pokemonInitial={pokemonInitial} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    if (pokemonInitial.results.length > 0) {
      pokemonInitial.results.forEach((pokemon) => {
        expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      });
    }
  });
});
