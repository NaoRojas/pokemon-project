import { getPokemon } from '@/api/pokeApi'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Pokemon } from '@/types/Pokemon'
import { useEffect, useState } from 'react'

export default function PokemonModal({ name }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  useEffect(() => {
    getPokemon(name).then((data) => {
      setPokemon(data)
    })
  }, [name])

  return (
    <div className="flex flex-col justify-between items-center">
      <Avatar className="w-24 h-24">
        <AvatarImage src={pokemon?.sprites.front_default} />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <h4 className="text-sm font-semibold">{name}</h4>
    </div>
  )
}
