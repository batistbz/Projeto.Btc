import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Repositório de Conteúdos
          <span className="text-primary block">Bootcamp Universitário</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Acesse materiais de estudo, exercícios, projetos e recursos educacionais organizados para potencializar seu
          aprendizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="O que você está procurando?"
              className="pl-10 h-12 bg-card border-border focus:border-primary"
            />
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Buscar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
          <span>Populares:</span>
          <Button variant="link" className="h-auto p-0 text-accent hover:text-accent/80">
            JavaScript
          </Button>
          <span>•</span>
          <Button variant="link" className="h-auto p-0 text-accent hover:text-accent/80">
            React
          </Button>
          <span>•</span>
          <Button variant="link" className="h-auto p-0 text-accent hover:text-accent/80">
            Python
          </Button>
          <span>•</span>
          <Button variant="link" className="h-auto p-0 text-accent hover:text-accent/80">
            Algoritmos
          </Button>
        </div>
      </div>
    </section>
  )
}
