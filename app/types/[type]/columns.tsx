'use client'

import PokemonDialog from '@/components/pokemon/dialog/pokemon-dialog'
import PokemonModal from '@/components/pokemon/modal/pokemon-modal'
import { Pokemon } from '@/types/Pokemon'
import { ColumnDef } from '@tanstack/react-table'

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
      const name = row.cell.getValue()
      return <PokemonModal name={name as string}></PokemonModal>
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
      const detailName = row.cell.getValue()
      return <PokemonDialog name={detailName as string}></PokemonDialog>
    },
  },
]
