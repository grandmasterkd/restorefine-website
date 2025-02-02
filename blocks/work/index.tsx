import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio";
import newtag from "@/public/newtag.svg";

export default function Work() {
  // Sort items by date to ensure most recent is first
  const sortedItems = [...portfolioItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-32">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {sortedItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className={`group relative overflow-hidden rounded-[24px] ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-3 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                  : "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              }`}
            >
              <div className="absolute inset-0 bg-[#1B1B1B] transition-opacity group-hover:opacity-50" />
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {index === 0 && (
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <Image
                    src={newtag || "/placeholder.svg"}
                    alt="resto-new-tag"
                    width={60}
                    height={60}
                    className="coil w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
