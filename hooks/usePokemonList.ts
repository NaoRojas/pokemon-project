import { getPokemonListByType } from "@/api/pokeApi"
import { Pokemon, PokemonListItem } from "@/types/Pokemon"
import { useEffect, useMemo, useState } from "react"

export function usePokemonList(type: string) {
  const [pokemonList, setPokemon] = useState<Pokemon[] | PokemonListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getPokemonListByType(type).then((data) => {
      setPokemon(data)
      setIsLoading(false)
    })
  }, [type])

  return useMemo(() => ({ pokemonList, isLoading }), [pokemonList, isLoading])
}