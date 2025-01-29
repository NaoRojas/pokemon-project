import { usePokemon } from '@/hooks/usePokemon'

import { Skeleton } from '../../ui/skeleton'
import { Progress } from '../../ui/progress'
import Image from 'next/image'
import { toCapitalize } from '@/lib/toCapitalize'
import { colorType } from '@/constants/colorType'
import { toTitleCase } from '@/lib/toTitleCase'
import { Stat } from '@/types/Pokemon'

interface PokemonDialogContentProps {
  name: string
}

export default function PokemonDialogContent({
  name,
}: PokemonDialogContentProps) {
  const { pokemon, isLoading } = usePokemon(name)

  return (
    <>
      {!isLoading && !!pokemon ? (
        <>
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center bg-slate-200 lg:p-4 rounded-lg">
              <Image
                priority
                src={pokemon.sprites.front_default}
                width={120}
                height={120}
                alt={pokemon.name}
              />
            </div>
            <div className="pl-4 flex flex-col justify-between space-y-2">
              <h4 className="text-lg font-semibold">Types</h4>
              <div className="flex items-start space-x-2">
                {pokemon.types.map((type) => (
                  <span
                    key={`${pokemon.name}-${type.type.name}`}
                    className="text-xs font-semibold px-4 py-1  rounded-full text-white w-fit"
                    style={{ backgroundColor: colorType[type.type.name] }}
                  >
                    {toCapitalize(type.type.name)}
                  </span>
                ))}
              </div>
              <h4 className="text-lg font-semibold mt-3">Stats</h4>
              {pokemon.stats.map((statObject: Stat) => {
                const statName = statObject.stat.name
                const statValue = statObject.base_stat
                return (
                  <div
                    className="flex flex-col justify-start items-start bg-slate-100 rounded-lg p-2"
                    key={statName}
                  >
                    <span className="text-sm text-slate-900">
                      {toTitleCase(statName)}: {statValue}
                    </span>
                    <Progress value={statValue} />
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 space-x-2">
          <Skeleton className="h-[420px] lg:w-[200px] w-[150px] p-4" />
          <div className="flex flex-col justify-between space-y-2">
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
            <Skeleton className="h-10 lg:w-[200px] w-[150px]" />
          </div>
        </div>
      )}
    </>
  )
}
