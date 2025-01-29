import { getPokemonListByType } from '@/api/pokeApi'
import { Pokemon, PokemonListItem } from '@/types/Pokemon'
import '@/styles/globals.css'
import { DataTable } from './data-table'
import { columns } from './columns'

interface Props {
  params: {
    type: string
  }
}

export default async function PokemonListByType({ params }: Props) {
  const { type } = params

  // Fetch data dynamically
  const pokemonList: Pokemon[] = await getPokemonListByType(type)
  console.log(pokemonList)

  return (
    <div className="container">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.2] pb-1">
        Pokemons of Type {type}
      </h1>
      <DataTable columns={columns} data={pokemonList} />
    </div>
  )
}
