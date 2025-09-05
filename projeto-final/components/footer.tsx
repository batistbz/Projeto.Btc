import { BookOpen, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Bootcamp Repository</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Plataforma educacional dedicada a fornecer recursos de qualidade para estudantes de tecnologia e
              programação.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-border hover:border-primary bg-transparent">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-border hover:border-primary bg-transparent">
                <Mail className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Todos os Materiais
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Categorias
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Projetos
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Exercícios
                </Button>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  FAQ
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Como Usar
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Reportar Problema
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Contribuir
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Bootcamp Repository. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Termos de Uso
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Privacidade
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
