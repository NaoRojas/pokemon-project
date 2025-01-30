'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Pokemon } from '@/types/Pokemon'
import { DataTable } from './data-table'
import { columns } from './columns'
import { colorType } from '@/constants/colorType'
import { toCapitalize } from '@/lib/toCapitalize'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePokemonList } from '@/hooks/usePokemonList'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { SkeletonTable } from '@/components/ui/skeleton-table'

export default function PokemonListByType() {
  const { type } = useParams()
  const [searchText, setSearchText] = useState('')

  const { pokemonList, isLoading } = usePokemonList(type)
  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  const filteredPokemonList = pokemonList ? searchFilter(pokemonList) : []

  return (
    <div className="lg:mt-8 mt-6">
      <Button asChild variant={'link'} className="font-bold p-0">
        <Link href="/">
          <ArrowLeft />
          Back To Types
        </Link>
      </Button>

      <div className="flex flex-col items-center">
        <div className="flec flex-col w-full space-y-3">
          <h3 className="text-3xl font-semibold tracking-tight">
            Pokemons of Type&nbsp;
            <span style={{ color: colorType[type as keyof typeof colorType] }}>
              {toCapitalize(type)}
            </span>
          </h3>

          <span className="text-sm text-gray-500 mb-4">
            Hover over the name to see the image
          </span>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pokemonName">Pokemon Name</Label>
            <Input
              type="text"
              value={searchText}
              autoComplete="off"
              id="pokemonName"
              placeholder="Search Pokemon"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {isLoading ? (
            <SkeletonTable />
          ) : (
            <DataTable columns={columns} data={filteredPokemonList} />
          )}
        </div>
      </div>
    </div>
  )
}
