import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { toCapitalize } from '@/lib/toCapitalize'
import { Button } from '../ui/button'
import PokemonModalContent from './pokemon-modal-content'
export default function PokemonModal({ name }) {
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
