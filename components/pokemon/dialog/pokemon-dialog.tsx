import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from '../../ui/button'
import PokemonDialogContent from './pokemon-dialog-content'
interface PokemonDialogProps {
  name: string
}

export default function PokemonDialog({ name }: PokemonDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="font-semibold">
          See Details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{name}</DialogTitle>
        <PokemonDialogContent name={name}></PokemonDialogContent>
      </DialogContent>
    </Dialog>
  )
}
