import { Search, Menu, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e1/16/22e11680-3a41-14e6-e9c2-80dde6880826/source/512x512bb.jpg" className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Bootcamp</h1>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar conteúdos..." className="pl-10 bg-muted/50 border-border focus:border-primary" />
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
