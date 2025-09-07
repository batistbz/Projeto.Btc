import { BookOpen, Computer, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// arquivo que está configurações do footer //
export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e1/16/22e11680-3a41-14e6-e9c2-80dde6880826/source/512x512bb.jpg" className="h-8 w-8 text-primary"/>
            <h3 className="text-xl font-bold text-foreground">Bootcamp Repositório</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Plataforma educacional dedicada a disponibilizar os conteúdos já passados nas edições do Bootcamp
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">2025 / Bootcamp Repositório.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Button className="hover:text-secundary">
              <a href="https://github.com/batistbz">Feito por participante</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
