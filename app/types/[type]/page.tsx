import { getPokemonListByType } from '@/api/pokeApi'
import { Pokemon } from '@/types/Pokemon'
import { DataTable } from './data-table'
import { columns } from './columns'
import { colorType } from '@/constants/colorType'
import { toCapitalize } from '@/lib/toCapitalize'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Arrow } from '@radix-ui/react-hover-card'
import { ArrowLeft } from 'lucide-react'

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
    <div className="lg:mt-8 mt-6">
      <Button asChild variant={'link'} className="font-bold p-0">
        <Link href="/">
          <ArrowLeft />
          Back To Types
        </Link>
      </Button>

      <div className="flex flex-col items-center">
        <div className="flec flex-col lg:w-1/2 w-full space-y-3">
          <h3 className="text-3xl font-semibold tracking-tight">
            Pokemons of Type{' '}
            <span style={{ color: colorType[type] }}>{toCapitalize(type)}</span>
          </h3>
          <span className="text-sm text-gray-500 mb-4">
            Hover over the name to see the image
          </span>
          <DataTable columns={columns} data={pokemonList} />
        </div>
      </div>
    </div>
  )
}
