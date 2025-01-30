import { PokemonListItem } from '@/types/Pokemon';
import { toCapitalize } from './../lib/toCapitalize';
const POKEMON_API = "https://pokeapi.co/api/v2/";

interface PokemonEntry {
    pokemon: PokemonListItem;
}
interface PokemonAPIResponse {
    pokemon: PokemonEntry[];
}

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
    const data: PokemonAPIResponse = await response.json();

    return data.pokemon.map(({ pokemon }) => ({
        name: pokemon.name,
        detailName: toCapitalize(pokemon.name),
        url: pokemon.url
    }));
}