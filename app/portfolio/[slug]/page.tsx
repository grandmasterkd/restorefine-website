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
    <article className="min-h-screen bg-black pb-32 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16">
          <h1 className="mb-8 text-6xl font-bold text-white">
            {project.title}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/80">
            {project.description}
          </p>
        </header>

        <div className="space-y-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] overflow-hidden rounded-[32px]"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
