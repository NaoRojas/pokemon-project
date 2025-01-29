import { usePokemon } from '@/hooks/usePokemon'

import { Skeleton } from '../ui/skeleton'
import { Progress } from '../ui/progress'
import Image from 'next/image'
import { toCapitalize } from '@/lib/toCapitalize'
import { colorType } from '@/constants/colorType'

export default function PokemonDialogContent({ name }) {
  const { pokemon, isLoading } = usePokemon(name)

  return (
    <>
      {!isLoading && !!pokemon ? (
        <>
          <Image
            src={pokemon.sprites.front_default}
            width={250}
            height={250}
            alt={pokemon.name}
          />

          <h1 className="text-4xl text-bold space-y-2">{pokemon.name}</h1>

          {/* {pokemon.types.map((type) => (
            <span
              key={`${pokemon.name}-${type.type.name}`}
              className="text-xs font-semibold px-2 py-1  rounded-full text-white"
            >
              {toCapitalize(type.type.name)}
            </span>
          ))} */}

          <h3>Weight: {pokemon.weight}</h3>
          {/* <div className="flex-col">
            {pokemon.stats.map((statObject: any) => {
              const statName = statObject.stat.name
              const statValue = statObject.base_stat

              return (
                <div
                  className="flex items-stretch"
                  style={{ width: '500px' }}
                  key={statName}
                >
                  <h3 className="p-3 w-2/4">
                    {statName}: {statValue}
                  </h3>
                  <Progress className="w-2/4 m-auto" value={statValue} />
                </div>
              )
            })}
          </div> */}
        </>
      ) : (
        <div className="flex items-center">
          <Skeleton className="w-24 h-24 rounded-full" />
          <div className="space-y-2 ml-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      )}
    </>
  )
}
