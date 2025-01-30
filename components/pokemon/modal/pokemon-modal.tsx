import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { toCapitalize } from '@/lib/toCapitalize'
import PokemonModalContent from './pokemon-modal-content'
import { Button } from '@/components/ui/button'
interface PokemonModalProps {
  name: string
}

export default function PokemonModal({ name }: PokemonModalProps) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="font-bold">
            {toCapitalize(name)}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="p-4">
          <PokemonModalContent name={name}></PokemonModalContent>
        </HoverCardContent>
      </HoverCard>
    </>
  )
}
