import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alfex - Soluciones Tecnológicas Empresariales",
  description:
    "Transformamos ideas en realidad con tecnología de vanguardia. Servicios de desarrollo web, móvil, consultoría tecnológica y más.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">EmpresaPro</h3>
                <p className="text-gray-400">
                  Soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Desarrollo Web</li>
                  <li>Desarrollo Móvil</li>
                  <li>Consultoría IT</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Sobre Nosotros</li>
                  <li>Blog</li>
                  <li>Carreras</li>
                  <li>Contacto</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>+52 (55) 1234-5678</li>
                  <li>info@empresapro.com</li>
                  <li>Ciudad Empresarial, México</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EmpresaPro. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
