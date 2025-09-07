import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// parte de cima, antes dos conteudos, como se fosse na parte do banner  //
export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Repositório de Conteúdos
          <span className="text-primary block">Bootcamp</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Acesse materiais de estudo, exercícios e projetos dos vencedores anteriores para aprimorar seu conhecimento.
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
      </div>
    </section>
  )
}
