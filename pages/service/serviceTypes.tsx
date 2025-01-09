import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "RestoWeb",
    description:
      "Our branding service dives deep into what makes your business unique, creating a powerful identity that not only stands out but connects with your audience on every level.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/web",
  },
  {
    title: "RestoPrint",
    description:
      "Our branding service dives deep into what makes your business unique, creating a powerful identity that not only stands out but connects with your audience on every level.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/print",
  },
  {
    title: "RestoMedia",
    description:
      "Our branding service dives deep into what makes your business unique, creating a powerful identity that not only stands out but connects with your audience on every level.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/services/media",
  },
];

const serviceDetails = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Our expertise lies in crafting bespoke web designs that are interactive, scalable, tailored to your brand.",
    services: ["Product Design"],
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Bringing your vision to life with cutting-edge technology and seamless functionality.",
    services: ["FrontEnd & Backend Development"],
  },
  {
    number: "03",
    title: "Restaurant Menu",
    description:
      "Bringing your vision to life with cutting-edge technology and seamless functionality.",
    services: ["Menu Structure & Design", "Menu Bulk Print"],
  },
  {
    number: "04",
    title: "Brand Identity",
    description:
      "Bringing your vision to life with cutting-edge technology and seamless functionality.",
    services: ["Graphic Design", "Brand Strategy", "Social Media Management"],
  },
];

export default function ServiceTypes() {
  return (
    <div className="py-24">
      <div className="space-y-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            Our Services
          </h1>
          <p className="text-sm text-white/80">
            Shaping Brands with Purpose and Precision
          </p>
        </div>

        <div className="mb-24">
          <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden bg-[#d9d9d9] mb-16">
            <Image
              src="/placeholder.svg?height=900&width=1600"
              alt="Services Hero"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
              RestoBranding
            </h2>
            <div className="space-y-6">
              <p className="text-sm text-white/80">
                Our branding service dives deep into what makes your business
                unique, creating a powerful identity that not only stands out
                but connects with your audience on every level.
              </p>
              <Link
                href="/services/branding"
                className="inline-flex items-center gap-2 text-white border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors group"
              >
                See More
                <div className="bg-[red] w-8 h-8 rounded-full p-1 flex items-center jsutify-center ">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#d9d9d9] rounded-[32px] overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-black mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/80 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex text-sm items-center gap-2 border border-black/10 rounded-3xl px-3 py-2 text-black hover:text-black/70 transition-colors group"
                  >
                    See More
                    <div className="flex items-center justify-center bg-black rounded-full p-1 w-8 h-8 ">
                      <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button className="p-4 rounded-full bg-[#303030] text-white hover:bg-[#404040] transition-colors">
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button className="p-4 rounded-full bg-[#ff0000] text-white hover:bg-[#ff0000]/90 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div key={service.number} className="relative">
              <div className="grid md:grid-cols-[100px_1fr] gap-4">
                <div className="text-4xl font-medium text-white">
                  {service.number}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {service.services.map((item) => (
                      <button
                        key={item}
                        className="px-6 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {index < serviceDetails.length - 1 && (
                <div className="absolute -bottom-8 left-0 right-0 h-px bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
