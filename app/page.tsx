import PokemonTypeList from '@/components/pokemon/pokemon-type-list'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg fixed inset-0 z-50">
        <div className="container relative z-10 pointer-events-auto px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.2] pb-1">
            Welcome to Pokemon API
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 bg-gradient-to-b from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
            Select a Pokemon Type to view the list of Pokemons
          </p>
          <PokemonTypeList />
        </div>
      </div>
    </main>
  )
}
