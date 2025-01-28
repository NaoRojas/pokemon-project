import { getPokemonListByType } from '@/api/pokeApi'
import { PokemonListItem } from '@/types/Pokemon'

interface Props {
  pokemonList: PokemonListItem[]
  type: string
}

export async function getServerSideProps({ params }) {
  const { name } = params
  const pokemonList = await getPokemonListByType(name)
  return {
    props: {
      pokemonList,
      type: name,
    },
  }
}

export default function PokemonListByType({ pokemonList, type }: Props) {
  return (
    <>
      <div className="container">
        <h1 className="text-4xl">Pokemons Type {type}</h1>
        <ul>
          {pokemonList.map((poke) => (
            <li key={poke.pokemon.name}>{poke.pokemon.name}</li>
            //TODO FORMAT THIS
          ))}
        </ul>
      </div>
    </>
  )
}
