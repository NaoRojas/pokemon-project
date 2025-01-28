import { getPokemonListByType } from '@/api/pokeApi'
import { Pokemon, PokemonList, PokemonListItem } from '@/types/Pokemon'

interface Props {
  pokemonList: PokemonListItem[]
}

export async function getServerSideProps({ params }) {
  const { name } = params
  const pokemonList = await getPokemonListByType(name)
  return {
    props: {
      pokemonList,
    },
  }
}

export default function PokemonListByType({ pokemonList }: Props) {
  return (
    <>
      <div>
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
