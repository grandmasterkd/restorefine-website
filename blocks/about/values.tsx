const values = [
  {
    title: "Creative Integrity",
    description:
      "At RestoRefine Studios, integrity and innovation intertwine. We champion groundbreaking digital solutions with a commitment to ethical practices and transparent relationships. Our creative process is guided by honesty and responsibility, ensuring that innovation serves both our clients and the broader community positively.",
  },
  {
    title: "Unified Excellence",
    description:
      "Excellence at RestoRefine Studios arises from the synergy of our team's diverse talents. We harness collective creativity and expertise to exceed the expectations of our clients, delivering superior results that reflect our commitment to quality in every detail.",
  },
  {
    title: "Dynamic Client Focus",
    description:
      "Our client-centric approach is agile and responsive. We tailor our strategies to align closely with the evolving needs and goals of our clients, ensuring that each solution not only meets but anticipates their requirements. This adaptability allows us to provide impactful and enduring value in a dynamic digital landscape.",
  },
  {
    title: "Collaborative Quality",
    description:
      "Quality is non-negotiable. We achieve it through rigorous collaboration and continuous improvement, engaging our clients as partners in the creative process. Every project is an opportunity to refine our craft and enhance the client experience, setting new standards of excellence in digital solutions.",
  },
];

export function Values() {
  return (
    <section className="py-24">
      <div className="">
        <div className="space-y-8">
          {values.map((value, index) => (
            <div key={index} className="relative">
              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  {value.description}
                </p>
              </div>
              {index < values.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20 -mx-4 mt-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
