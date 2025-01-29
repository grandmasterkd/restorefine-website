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
        <div className="grid grid-cols-2 gap-4">
          {sortedItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className={`group relative overflow-hidden rounded-[32px] ${
                index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[3/2]"
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
                <div className="absolute left-6 top-6 ">
                  <Image
                    src={newtag}
                    alt="resto-new-tag"
                    width={100}
                    height={100}
                    className="coil"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
