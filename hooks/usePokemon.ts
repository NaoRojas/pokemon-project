import { getPokemon } from "@/api/pokeApi"
import { Pokemon } from "@/types/Pokemon"
import { useEffect, useMemo, useState } from "react"

export function usePokemon(name: string) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getPokemon(name).then((data) => {
      setPokemon(data)
      setIsLoading(false)
    })
  }, [name])

  return useMemo(() => ({ pokemon, isLoading }), [pokemon, isLoading])
}