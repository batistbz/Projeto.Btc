import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Github, ExternalLink, Calendar } from "lucide-react"

// arquivo que fica responsavel pelo conteudo dentro dos cards // 
const champions = [
  {
    id: 1,
    edition: "2024",
    winner: "Ana Silva",
    project: "EcoTracker - App de Sustentabilidade",
    description: "Aplicativo mobile para rastreamento de pegada de carbono pessoal com gamificação",
    github: "https://github.com/anasilva/ecotracker",
    demo: "https://ecotracker-demo.vercel.app",
    tech: ["React Native", "Node.js", "MongoDB"],
    date: "1º lugar",
  },
  {
    id: 2,
    edition: "2024",
    winner: "Carlos Mendes",
    project: "StudyBuddy - Plataforma de Estudos",
    description: "Sistema colaborativo de estudos com salas virtuais e compartilhamento de recursos",
    github: "https://github.com/carlosmendes/studybuddy",
    demo: "https://studybuddy-platform.vercel.app",
    tech: ["Next.js", "PostgreSQL", "Socket.io"],
    date: "2º lugar",
  },
  {
    id: 3,
    edition: "2024",
    winner: "Mariana Costa",
    project: "HealthConnect - Telemedicina",
    description: "Plataforma de telemedicina conectando pacientes e médicos com consultas online",
    github: "https://github.com/marianacosta/healthconnect",
    demo: "https://healthconnect-demo.vercel.app",
    tech: ["Vue.js", "Express", "WebRTC"],
    date: "3º lugar",
  },
  {
    id: 1,
    edition: "2023",
    winner: "Pedro Santos",
    project: "SmartFinance - Gestão Financeira",
    description: "Dashboard inteligente para controle financeiro pessoal com IA para insights",
    github: "https://github.com/pedrosantos/smartfinance",
    demo: "https://smartfinance-ai.vercel.app",
    tech: ["React", "Python", "TensorFlow"],
    date: "1º lugar",
  },
  {
    id: 2,
    edition: "2023",
    winner: "Julia Oliveira",
    project: "CodeMentor - Mentoria de Programação",
    description: "Plataforma conectando mentores e iniciantes em programação com sistema de matching",
    github: "https://github.com/juliaoliveira/codementor",
    demo: "https://codementor-platform.vercel.app",
    tech: ["Angular", "NestJS", "Redis"],
    date: "2º lugar",
  },
  {
    id: 3,
    edition: "2023",
    winner: "Rafael Lima",
    project: "GreenCity - Cidades Sustentáveis",
    description: "Sistema de monitoramento urbano para cidades inteligentes e sustentáveis",
    github: "https://github.com/rafaellima/greencity",
    demo: "https://greencity-monitor.vercel.app",
    tech: ["Svelte", "FastAPI", "IoT"],
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
              {/* Badge de posição */}
              <div className="absolute top-4 right-4 bg-[#0D47A1] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                #{index + 1}
              </div>

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
                  <Button size="sm" className="flex-1 bg-[#2196F3] hover:bg-[#1565C0] text-white" asChild>
                    <a href={champion.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
