import { Users, Target, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes, superando sus expectativas en cada proyecto.",
  },
  {
    icon: Award,
    title: "Visión",
    description:
      "Ser la empresa líder en servicios tecnológicos, reconocida por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Valores",
    description:
      "Integridad, innovación, excelencia, trabajo en equipo y compromiso con la satisfacción del cliente son los pilares que guían nuestro trabajo diario.",
  },
]

const stats = [
  { number: "10+", label: "Años de Experiencia" },
  { number: "200+", label: "Proyectos Completados" },
  { number: "50+", label: "Clientes Satisfechos" },
  { number: "24/7", label: "Soporte Técnico" },
]

export default function SobreNosotros() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Somos una empresa comprometida con la excelencia tecnológica y el éxito de nuestros clientes
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundada en 2014, EmpresaPro nació con la visión de transformar la manera en que las empresas abordan sus
                desafíos tecnológicos. Comenzamos como un pequeño equipo de desarrolladores apasionados y hemos crecido
                hasta convertirnos en una empresa líder en soluciones tecnológicas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A lo largo de los años, hemos tenido el privilegio de trabajar con empresas de todos los tamaños, desde
                startups innovadoras hasta corporaciones multinacionales, ayudándolas a alcanzar sus objetivos a través
                de la tecnología.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro compromiso con la calidad, la innovación y la satisfacción del cliente nos ha permitido
                construir relaciones duraderas y exitosas con nuestros partners comerciales.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo de EmpresaPro"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Principios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <IconComponent className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Números</h2>
            <p className="text-lg text-gray-600">Cifras que reflejan nuestro compromiso y experiencia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
