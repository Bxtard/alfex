import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Las Tendencias Tecnológicas que Dominarán 2024",
    excerpt:
      "Descubre las tecnologías emergentes que están transformando el panorama empresarial y cómo pueden beneficiar a tu organización.",
    image: "/placeholder.svg?height=300&width=400",
    author: "María González",
    date: "15 Marzo 2024",
    category: "Tecnología",
  },
  {
    id: 2,
    title: "Cómo la Inteligencia Artificial Está Revolucionando los Negocios",
    excerpt:
      "Exploramos casos reales de implementación de IA en empresas y los resultados obtenidos en términos de eficiencia y rentabilidad.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Carlos Rodríguez",
    date: "10 Marzo 2024",
    category: "Inteligencia Artificial",
  },
  {
    id: 3,
    title: "Seguridad Cibernética: Protege tu Empresa en la Era Digital",
    excerpt:
      "Guía completa sobre las mejores prácticas de seguridad cibernética para proteger los activos digitales de tu empresa.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ana Martínez",
    date: "5 Marzo 2024",
    category: "Seguridad",
  },
  {
    id: 4,
    title: "Transformación Digital: Pasos Clave para el Éxito",
    excerpt:
      "Metodología probada para implementar una transformación digital exitosa en tu organización, con casos de estudio reales.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Luis Fernández",
    date: "28 Febrero 2024",
    category: "Transformación Digital",
  },
  {
    id: 5,
    title: "Cloud Computing: Ventajas y Consideraciones para tu Empresa",
    excerpt:
      "Análisis detallado de los beneficios de migrar a la nube y las consideraciones importantes para una transición exitosa.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Patricia López",
    date: "20 Febrero 2024",
    category: "Cloud Computing",
  },
  {
    id: 6,
    title: "Desarrollo de Aplicaciones Móviles: Tendencias y Mejores Prácticas",
    excerpt:
      "Todo lo que necesitas saber sobre el desarrollo de apps móviles modernas y las tecnologías más demandadas del mercado.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Roberto Silva",
    date: "15 Febrero 2024",
    category: "Desarrollo Móvil",
  },
]

const categories = [
  "Todos",
  "Tecnología",
  "Inteligencia Artificial",
  "Seguridad",
  "Transformación Digital",
  "Cloud Computing",
  "Desarrollo Móvil",
]

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog Tecnológico</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Insights, tendencias y consejos del mundo de la tecnología empresarial
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className={category === "Todos" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Leer Más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Cargar Más Artículos
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
