import { getPokemonListByType } from '@/api/pokeApi'
import { Pokemon } from '@/types/Pokemon'
import { DataTable } from './data-table'
import { columns } from './columns'
import { colorType } from '@/constants/colorType'
import { toCapitalize } from '@/lib/toCapitalize'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      <Button asChild variant={'link'} className="font-bold">
        <Link href="/">Back To Types</Link>
      </Button>
      <div className="flex flex-col items-center">
        <div className="w-1/2">
          <h3 className="text-3xl font-semibold tracking-tight mb-4">
            Pokemons of Type{' '}
            <span style={{ color: colorType[type] }}>{toCapitalize(type)}</span>
          </h3>
          <DataTable columns={columns} data={pokemonList} />
        </div>
      </div>
    </div>
  )
}
