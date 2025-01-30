import { toCapitalize } from './../lib/toCapitalize';
import { PokemonListItem } from '@/types/Pokemon';

const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;
}

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json()

    return {
        name: data.name,
        detailName: toCapitalize(data.name),
        ...data
    };
}

export async function getPokemonType() {
    const response = await fetch(POKEMON_API + "type");
    const data = await response.json();
    return data.results;
}

export async function getPokemonListByType(type: string): Promise<PokemonListItem[]> {
    const response = await fetch(POKEMON_API + "type/" + type);
    const data = await response.json();
    return data.pokemon.map(({ pokemon }: { pokemon: { name: string, url: string } }) => ({
        pokemon: {
            name: pokemon.name,
            url: pokemon.url,
            detailName: toCapitalize(pokemon.name)
        }
    }));
}