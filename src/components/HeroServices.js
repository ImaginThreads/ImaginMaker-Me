'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: "/path/to/your/graphic-design-icon.svg",
    title: "Graphic Design",
    description: "Crafting impactful visuals that bring your brand to life, from logos to full-scale branding solutions."
  },
  {
    icon: "/path/to/your/motion-design-icon.svg",
    title: "Motion Design",
    description: "Transform your brand with stunning animations that captivate and engage. Our motion design brings your ideas to life with creativity and precision."
  },
  {
    icon: "/path/to/your/ui-ux-design-icon.svg",
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that enhance user experience, making every interaction seamless and enjoyable."
  },
  {
    icon: "/path/to/your/branding-icon.svg",
    title: "Branding",
    description: "Creating distinctive brand identities that connect with your audiences and elevate your business."
  }
]

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
          Our Services
          <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-purple-600" />
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mb-16 relative">
        {services.map((service, index) => (
          <Link 
            href="/services" 
            key={service.title}
            className={`group relative w-full h-[260px] block ${
              index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
            }`}
          >
            {/* Main Card */}
            <div className="absolute inset-0 bg-white rounded-lg border-2 border-purple-600 border-b-4 p-6 transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-purple-100">
                  <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Button 
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-colors duration-300"
        >
          Get your Design Done
        </Button>
      </div>
    </section>
  )
}

