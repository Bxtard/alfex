import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Misión",
    description: 
    "Brindar soluciones técnicas integrales en ingeniería eléctrica, electrónica y automatización, con un enfoque profesional, eficiente y humano, adaptándonos a los cambios tecnológicos y ofreciendo siempre calidad, innovación y compromiso en cada proyecto."
  },
  {
    icon: Award,
    title: "Visión",
    description: 
    "Ser una empresa líder en ingeniería aplicada, reconocida a nivel nacional e internacional por su capacidad de innovación, excelencia técnica y compromiso con el desarrollo tecnológico y humano, contribuyendo activamente a la transformación de los sectores industrial, comercial y residencial."
  },
  {
    icon: Users,
    title: "Valores",
    description:
      "Integridad, innovación, excelencia, trabajo en equipo y compromiso con la satisfacción del cliente son los pilares que guían nuestro trabajo diario.",
  },
];

const stats = [
  { number: "10+", label: "Años de Experiencia" },
  { number: "200+", label: "Proyectos Completados" },
  { number: "50+", label: "Clientes Satisfechos" },
  { number: "24/7", label: "Soporte Técnico" },
];

export default function SobreNosotros() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Somos una empresa comprometida con la excelencia tecnológica y el
            éxito de nuestros clientes
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Alfex ingeniería nace hace más de 7 años con una visión clara:
                brindar soluciones integrales en el campo de la ingeniería
                eléctrica, electrónica y automatización, combinando experiencia,
                innovación y un enfoque humano en cada proyecto.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                La empresa fue fundada por un profesional con más de 25 años de
                trayectoria en el sector, apasionado por la tecnología y
                convencido de que la excelencia técnica y el aprendizaje
                continuo son claves para marcar la diferencia en la industria.
                Desde sus inicios, Alfex ingeniería se ha rodeado de un equipo
                altamente capacitado, comprometido con ofrecer un servicio
                personalizado, eficiente y alineado con las necesidades reales
                de sus clientes.
              </p>
              <p className="text-lg text-gray-600">
                A lo largo de estos años, hemos evolucionado junto con la
                tecnología, incorporando nuevas áreas como la domótica, el
                diseño de tarjetas electrónicas, la automatización industrial, y
                los sistemas de protección contra incendios, sin dejar de lado
                nuestras raíces en la reparación y diseño de maquinaria y
                tableros eléctricos.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro compromiso con la calidad y la mejora continua nos ha
                permitido consolidarnos como un aliado estratégico para empresas
                e industrias que buscan soluciones confiables, modernas y a la
                medida. Somos profesionales en constante formación, apasionados
                por la innovación y listos para enfrentar los desafíos del
                presente y del futuro.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Principios
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <IconComponent className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Números
            </h2>
            <p className="text-lg text-gray-600">
              Cifras que reflejan nuestro compromiso y experiencia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
