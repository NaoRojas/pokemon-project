import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePokemon } from '@/hooks/usePokemon'
import { Skeleton } from '../ui/skeleton'
import { toCapitalize } from '@/lib/toCapitalize'
import { colorType } from '@/constants/colorType'

export default function PokemonModal({ name }) {
  const { pokemon, isLoading } = usePokemon(name)

  return (
    <>
      {!isLoading ? (
        <div className="flex items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={pokemon?.sprites.front_default} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="space-y-2 ml-2">
            <h4 className="text-sm font-semibold">{toCapitalize(name)}</h4>
            <div className="flex space-x-2">
              {pokemon?.types.map((type) => (
                <span
                  key={type.type.name}
                  className="text-xs font-semibold px-2 py-1  rounded-full text-white"
                  style={{ backgroundColor: colorType[type.type.name] }}
                >
                  {toCapitalize(type.type.name)}
                </span>
              ))}
            </div>
          </div>
        </div>
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
