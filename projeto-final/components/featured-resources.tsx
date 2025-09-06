import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Clock } from "lucide-react"

// arquivo responsavel pelo conteudo dentro das cards do curso//
const featuredResources = [
  {
    id: 1,
    title: "Fundamentos de JavaScript",
    description: "Conteúdo teórico passado nas aulas",
    category: "Versátil",
    type: "PDF",
    duration: "1h 30min",
    level: "Intermediário",
  },
  {
    id: 2,
    title: "Framework React",
    description: "Projeto prático para construir uma aplicação de tarefas usando React, hooks e context API.",
    category: "Frontend",
    type: "PDF",
    duration: "3h 15min",
    level: "Intermediário",
  },
  {
    id: 3,
    title: "HTML Básico",
    description: "Coleção de exercícios e explicações sobre algoritmos fundamentais e estruturas de dados.",
    category: "Frontend",
    type: "PDF",
    duration: "2h 45min",
    level: "Iniciante",
  },
  {
    id: 4,
    title: "Python",
    description: "Tutorial completo para criar APIs RESTful usando Node.js, Express e MongoDB.",
    category: "Backend",
    type: "PDF",
    duration: "3h 20min",
    level: "Iniciante",
  },
]

export function FeaturedResources() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conteúdos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Materiais ensinados durantes as aulas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {featuredResources.map((resource) => (
            <Card
              key={resource.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {resource.category}
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    {resource.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {resource.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`
                      ${resource.level === "Iniciante" ? "border-green-300 text-green-700 bg-green-50" : ""}
                      ${resource.level === "Intermediário" ? "border-yellow-300 text-yellow-700 bg-yellow-50" : ""}
                      ${resource.level === "Avançado" ? "border-red-300 text-red-700 bg-red-50" : ""}
                    `}
                  >
                    {resource.level}
                  </Badge>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-border hover:border-primary bg-transparent">
                      <Eye className="h-4 w-4 mr-1" />
                      Ver
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Download className="h-4 w-4 mr-1" />
                      Exercícios
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
