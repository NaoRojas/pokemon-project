import { getPokemonType } from '@/api/pokeApi'
import { PokemonType } from '@/types/Pokemon'
import { Button } from '../ui/button'
import Link from 'next/link'
import { iconType } from '@/constants/iconType'

export default async function PokemonTypeList() {
  const typeList: PokemonType[] = await getPokemonType()

  return (
    <div className="flex flex-wrap gap-4">
      {typeList.map((type: PokemonType) => (
        <Button asChild key={type.name} variant={'outline'}>
          <Link href={`/types/${type.name}`}>
            {`${iconType[type.name as keyof typeof iconType]} ${type.name}`}
          </Link>
        </Button>
      ))}
    </div>
  )
}
