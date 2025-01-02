export function BentoGrid() {
  return (
    <section className="">
      {/* Text Content */}
      <div className=" text-center mb-16">
        <h2 className="mb-4 text-3xl font-medium text-white md:text-3xl lg:text-4xl font-medium text-white ">
          Not Reinventing The Wheel,
          <br />
          Just Giving You Better
        </h2>
        <p className="text-lg text-white/80">
          RestoRefine Studios is your all-in-one digital partner, dedicated to
          <br />
          the vibrant world of hospitality.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Large Rectangles */}
          <div className="aspect-[4/3] rounded-[32px] bg-[#2b2b2b]" />
          <div className="aspect-[4/3] rounded-[32px] bg-[#d9d9d9]" />
        </div>

        {/* Small Rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/3] rounded-[32px] bg-[#d9d9d9]" />
          <div className="aspect-[4/3] rounded-[32px] bg-[#d9d9d9]" />
          <div className="aspect-[4/3] rounded-[32px] bg-[#d9d9d9]" />
        </div>
      </div>
    </section>
  );
}
