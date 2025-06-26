import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/empresapro",
    followers: "15.2K",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/empresapro",
    followers: "8.5K",
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/empresapro",
    followers: "12.1K",
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/empresapro",
    followers: "6.8K",
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/empresapro",
    followers: "4.2K",
    color: "bg-red-600 hover:bg-red-700",
  },
]

export default function SocialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las últimas noticias, proyectos y consejos tecnológicos. Únete a nuestra comunidad
            digital.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <Card key={social.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Button size="lg" className={`w-16 h-16 rounded-full mb-4 ${social.color}`} asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-8 w-8" />
                    </a>
                  </Button>
                  <h3 className="font-semibold text-gray-900 mb-1">{social.name}</h3>
                  <p className="text-sm text-gray-600">{social.followers} seguidores</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Suscríbete a Nuestro Newsletter</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Recibe las últimas actualizaciones, casos de estudio y consejos tecnológicos directamente en tu bandeja de
            entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Suscribirse</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
