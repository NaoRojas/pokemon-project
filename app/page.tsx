import PokemonTypeList from '@/components/pokemon/pokemon-type-list'

export default function Home() {
  return (
    <div className="flex flex-col max-w-[720px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.2] pb-1">
        Welcome to Pokemon API
      </h1>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 bg-gradient-to-b from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
        Select a Pokemon Type to view the list of Pokemons
      </p>
      <PokemonTypeList />
    </div>
  )
}
