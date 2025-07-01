import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Cog,
  Database,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para SEO que impulsan tu presencia digital.",
    features: [
      "Diseño responsive y moderno",
      "Optimización SEO avanzada",
      "Integración con CMS",
      "E-commerce personalizado",
      "Mantenimiento y soporte",
    ],
    price: "Desde $2,500 USD",
    popular: false,
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Desarrollo de Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas para iOS y Android que conectan con tus usuarios donde sea que estén.",
    features: [
      "Apps nativas iOS/Android",
      "Desarrollo híbrido React Native",
      "Integración con APIs",
      "Push notifications",
      "Publicación en stores",
    ],
    price: "Desde $5,000 USD",
    popular: true,
  },
  {
    id: 3,
    icon: Cloud,
    title: "Servicios en la Nube",
    description: "Migración y gestión de infraestructura cloud para escalabilidad, seguridad y eficiencia operativa.",
    features: [
      "Migración a AWS/Azure/GCP",
      "Arquitectura serverless",
      "DevOps y CI/CD",
      "Monitoreo 24/7",
      "Backup automático",
    ],
    price: "Desde $1,800 USD/mes",
    popular: false,
  },
  {
    id: 4,
    icon: Shield,
    title: "Seguridad Cibernética",
    description: "Protección integral de tus activos digitales con las mejores prácticas de seguridad empresarial.",
    features: [
      "Auditorías de seguridad",
      "Implementación de firewalls",
      "Monitoreo de amenazas",
      "Capacitación del personal",
      "Planes de contingencia",
    ],
    price: "Desde $3,200 USD",
    popular: false,
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transformamos tus datos en insights accionables con dashboards interactivos y análisis avanzado.",
    features: [
      "Dashboards personalizados",
      "Análisis predictivo",
      "Integración de datos",
      "Reportes automatizados",
      "Visualización avanzada",
    ],
    price: "Desde $4,000 USD",
    popular: false,
  },
  {
    id: 6,
    icon: Cog,
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento estratégico para optimizar tus procesos tecnológicos y acelerar la transformación digital.",
    features: [
      "Auditoría tecnológica",
      "Estrategia digital",
      "Selección de tecnologías",
      "Roadmap de implementación",
      "Gestión del cambio",
    ],
    price: "Desde $200 USD/hora",
    popular: false,
  },
  {
    id: 7,
    icon: Database,
    title: "Gestión de Bases de Datos",
    description: "Diseño, optimización y administración de bases de datos para máximo rendimiento y confiabilidad.",
    features: [
      "Diseño de arquitectura DB",
      "Optimización de consultas",
      "Migración de datos",
      "Backup y recuperación",
      "Monitoreo de performance",
    ],
    price: "Desde $2,800 USD",
    popular: false,
  },
  {
    id: 8,
    icon: Palette,
    title: "Diseño UX/UI",
    description: "Experiencias de usuario excepcionales con diseños intuitivos que convierten visitantes en clientes.",
    features: [
      "Research y análisis UX",
      "Wireframes y prototipos",
      "Diseño de interfaces",
      "Testing de usabilidad",
      "Design systems",
    ],
    price: "Desde $1,500 USD",
    popular: false,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consulta Inicial",
    description: "Analizamos tus necesidades y objetivos para proponer la mejor solución.",
  },
  {
    step: "02",
    title: "Propuesta Personalizada",
    description: "Desarrollamos una propuesta técnica y comercial adaptada a tu proyecto.",
  },
  {
    step: "03",
    title: "Desarrollo y Ejecución",
    description: "Implementamos la solución con metodologías ágiles y comunicación constante.",
  },
  {
    step: "04",
    title: "Entrega y Soporte",
    description: "Entregamos el proyecto y brindamos soporte continuo para garantizar el éxito.",
  },
]

export default function Servicios() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué Podemos Hacer por Ti?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios tecnológicos diseñados para satisfacer las necesidades específicas
              de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    service.popular ? "ring-2 ring-blue-500 transform scale-105" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-6">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      </div>
                      <Button
                        className={`w-full ${
                          service.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                        }`}
                      >
                        Solicitar Cotización
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seguimos una metodología probada que garantiza resultados exitosos en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo nuestros servicios pueden impulsar el crecimiento de tu empresa
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Solicitar Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cuánto tiempo toma desarrollar un proyecto?
                </h3>
                <p className="text-gray-600">
                  El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4
                  semanas, mientras que aplicaciones más complejas pueden requerir 3-6 meses. Siempre proporcionamos un
                  cronograma detallado durante la fase de planificación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Ofrecen soporte post-lanzamiento?</h3>
                <p className="text-gray-600">
                  Sí, ofrecemos diferentes planes de soporte y mantenimiento que incluyen actualizaciones de seguridad,
                  backup automático, monitoreo 24/7 y soporte técnico. El soporte está incluido durante los primeros 30
                  días después del lanzamiento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Trabajan con empresas de todos los tamaños?
                </h3>
                <p className="text-gray-600">
                  Absolutamente. Trabajamos con startups, PYMES y grandes corporaciones. Adaptamos nuestros servicios y
                  metodologías según el tamaño y necesidades específicas de cada cliente, desde proyectos pequeños hasta
                  implementaciones empresariales complejas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
