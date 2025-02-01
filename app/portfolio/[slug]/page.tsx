import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/portfolio";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find((item) => item.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32">
      <div className="">
        <header className="mb-16">
          <h1 className="mb-2 lg:mb-6 text-3xl lg:text-5xl font-bold text-white">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base lg:text-lg leading-relaxed text-white/50">
            {project.description}
          </p>
        </header>

        <div className="w-full">
          {project.images.map((image, index) => (
            <div key={index} className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
