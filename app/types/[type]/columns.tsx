'use client'

import PokemonDialog from '@/components/pokemon/dialog/pokemon-dialog'
import PokemonModal from '@/components/pokemon/pokemon-modal'
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
      return <PokemonModal name={name}></PokemonModal>
    },
  },
  {
    accessorKey: 'url',
    header: 'Url',
  },
  {
    header: 'Actions',
    accessorKey: 'detailName',
    cell: (row) => {
      const detailName = row.getValue('detailName')
      return <PokemonDialog name={detailName}></PokemonDialog>
    },
  },
]
