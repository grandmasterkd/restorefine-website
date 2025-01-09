export function RestoOverview() {
  const features = [
    {
      title: "Development Strategy",
      description: "Our branding service dives deep into what makes your ...",
    },
    {
      title: "Target Research",
      description: "Our branding service dives deep into what makes your ...",
    },
    {
      title: "Content Management",
      description: "Our branding service dives deep into what makes your ...",
    },
  ];

  return (
    <section className="">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            Designing Is Secondary,
            <br />
            We Help You Grow.
          </h2>
          <p className="text-sm text-white/80">
            Meet the creative minds at RestoRefine Studios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#d9d9d9] rounded-[32px] p-6 aspect-square flex flex-col justify-end"
            >
              <h3 className="text-lg font-medium text-black mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-black/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
