import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from '../ui/button'
import PokemonDialogContent from './pokemon-dialog-content'
export default function PokemonDialog({ name }) {
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
