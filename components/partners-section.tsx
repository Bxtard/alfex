import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Desarrollo de plataforma e-commerce completa con integración de pagos y gestión de inventario.",
  },
  {
    id: 2,
    name: "Global Industries",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Implementación de sistema ERP personalizado para optimización de procesos empresariales.",
  },
  {
    id: 3,
    name: "Innovation Labs",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Consultoría tecnológica y migración a la nube para mejorar la eficiencia operativa.",
  },
  {
    id: 4,
    name: "StartUp Dynamics",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Desarrollo de aplicación móvil y web para gestión de proyectos colaborativos.",
  },
  {
    id: 5,
    name: "Enterprise Group",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Automatización de procesos y desarrollo de dashboard ejecutivo para análisis de datos.",
  },
  {
    id: 6,
    name: "Digital Ventures",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Creación de marketplace B2B con funcionalidades avanzadas de matching y comunicación.",
  },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empresas que Confían en Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hemos tenido el privilegio de trabajar con empresas líderes, ayudándolas a alcanzar sus objetivos
            tecnológicos y de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`Logo de ${partner.name}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{partner.name}</h3>
                <p className="text-gray-600 text-center">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">¿Quieres ser parte de nuestros casos de éxito?</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Solicita una Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
