import Image from "next/image";

function Work() {
  return (
    <section className="py-32">
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          {/* Top full-width container */}
          <div className="col-span-2">
            <div className="aspect-[16/9] bg-[#1B1B1B] rounded-[32px] relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=900&width=1600"
                alt="Portfolio showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle row */}
          <div className="aspect-[3/2] bg-[#d9d9d9] rounded-[32px] relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=900"
              alt="Portfolio item"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/2] bg-[#d9d9d9] rounded-[32px] relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=900"
              alt="Portfolio item"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom row */}
          <div className="aspect-[3/2] bg-[#d9d9d9] rounded-[32px] relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=900"
              alt="Portfolio item"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/2] bg-[#d9d9d9] rounded-[32px] relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=900"
              alt="Portfolio item"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
