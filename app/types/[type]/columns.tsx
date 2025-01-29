'use client'

import PokemonModal from '@/components/pokemon/pokemon-modal'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { toCapitalize } from '@/lib/toCapitalize'
import { Pokemon } from '@/types/Pokemon'
import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Pokemon>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (row) => {
      const name = row.getValue('name')
      return (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="font-bold">
              {toCapitalize(name)}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="p-4">
            <PokemonModal name={name}></PokemonModal>
          </HoverCardContent>
        </HoverCard>
      )
    },
  },
  {
    accessorKey: 'url',
    header: 'Url',
  },
]
