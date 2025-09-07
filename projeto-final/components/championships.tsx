  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Github, ExternalLink, Calendar } from "lucide-react"

// arquivo que fica responsavel pelo conteudo dentro dos cards de vencedores // 
const champions = [
  {
    id: 1,
    edition: "2024",
    winner: "Livia Monteiro",
    project: "ClassNote - IA",
    description: "Site que transcreve e resume aulas com inteligência artificial.",
    github: "https://github.com/anasilva/ecotracker",
    tech: ["React", "Node.js", "HTML"],
    date: "1º lugar",
  },
  {
    id: 2,
    edition: "2024",
    winner: "André Gonçalves",
    project: "UniMapa",
    description: "Mapa digital do campus com localização e eventos em tempo real.",
    github: "https://github.com/carlosmendes/studybuddy",
    tech: ["React", "Node.js", "HTML"],
    date: "2º lugar",
  },
  {
    id: 3,
    edition: "2024",
    winner: "Eduardo Nakamura",
    project: "LabControl",
    description: "Sistema de agendamento e gestão de laboratórios universitários.",
    github: "https://github.com/marianacosta/healthconnect",
    tech: ["React", "Node.js", "HTML"],
    date: "3º lugar",
  },
  {
    id: 4,
    edition: "2023",
    winner: "Pedro Santos",
    project: "EcoSmart Unimar",
    description: "Monitoramento de consumo de energia e água no campus.",
    github: "https://github.com/pedrosantos/smartfinance",
    tech: ["React", "Node.js", "HTML"],
    date: "1º lugar",
  },
  {
    id: 5,
    edition: "2023",
    winner: "Murilo Duarte",
    project: "MentorMatch",
    description: "Plataforma que conecta calouros e veteranos para mentoria.",
    github: "https://github.com/juliaoliveira/codementor",
    tech: ["React", "Node.js", "HTML"],
    date: "2º lugar",
  },
  {
    id: 6,
    edition: "2023",
    winner: "Renan Lima",
    project: "VagaFácil - Unimar",
    description: "App que mostra vagas de estacionamento disponíveis na faculdade.",
    github: "https://github.com/rafaellima/greencity",
    tech: ["React", "Node.js", "HTML"],
    date: "3º lugar",
  },
]

export function Championships() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-[#2196F3]" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Vencedores</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os projetos vencedores das <br />edições anteriores do Bootcamp e inspire-se
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {champions.map((champion, index) => (
            <Card
              key={champion.id}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-[#2196F3]/50 bg-card relative overflow-hidden"
            >

              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {champion.date} • Edição {champion.edition}
                  </span>
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-[#1565C0] transition-colors">
                  {champion.project}
                </CardTitle>
                <p className="text-sm font-medium text-[#2196F3]">por {champion.winner}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{champion.description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {champion.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#BBDEFB]/30 text-[#0D47A1] text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de ação */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0] hover:text-white bg-transparent"
                    asChild
                  >
                    <a href={champion.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
                <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white bg-transparent">
            <Trophy className="h-5 w-5 mr-2" />
            Ver Todas as Edições
          </Button>
        </div>
      </div>
    </section>
  )
}
