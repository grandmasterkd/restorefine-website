const services = [
  "Product Design",
  "Social Media",
  "Landing Pages",
  "Logos",
  "Brand Guidelines",
  "Icons",
  "Branding",
  "Slide Decks",
  "Visual Identity",
  "Restaurant Menu Design",
];

export function RestoExpectation() {
  return (
    <section className="py-32">
      <div className="">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            And We'll Do Something
            <br />
            Like This For You
          </h2>
          <p className="text-sm text-white/80">
            Meet the creative minds at RestoRefine Studios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-baseline mb-8">
          {/* Top row with layered effect */}
          <div className="relative">
            <div className="absolute -top-5 left-6 w-[85%] h-[330px] bg-[#ABA9A9] rounded-[32px]" />

            <div className="relative w-full h-[330px] bg-[#d9d9d9] rounded-[32px]" />
          </div>
          <div className=" h-[350px] bg-[#d9d9d9] rounded-[32px] lg:col-span-2" />

          {/* Bottom row */}
          <div className="h-[200px] bg-[#d9d9d9] rounded-[32px]" />
          <div className="h-[200px] bg-[#d9d9d9] rounded-[32px]" />
          <div className="h-[200px] bg-[#d9d9d9] rounded-[32px]" />
        </div>

        <div className="flex flex-wrap gap-4">
          {services.map((service) => (
            <button
              key={service}
              className="px-6 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
