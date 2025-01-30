import { toCapitalize } from './../lib/toCapitalize';
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

export async function getPokemonListByType(type: string) {
    const response = await fetch(POKEMON_API + "type/" + type);
    const data = await response.json().then((res) => {
        return res.pokemon.map(({ pokemon }) => ({
            name: pokemon.name,
            detailName: toCapitalize(pokemon.name),
            url: pokemon.url
        }))
    });
    return data;
}