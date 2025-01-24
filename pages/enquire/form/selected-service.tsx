import Image from "next/image";
import mesh from "@/public/enqbg.svg";
import light from "@/public/enqlight.svg";

interface SelectedServiceProps {
  title: string;
}

export function SelectedService({ title }: SelectedServiceProps) {
  return (
    <div className="relative aspect-square rounded-[24px] border-2 border-[#4D4D4D] bg-gradient-dark  overflow-hidden">
      <Image
        src={mesh || "/placeholder.svg"}
        alt="resto-enquire-mesh-bg"
        width={80}
        height={80}
        className="p-8 absolute top-0 right-0 z-10 w-full object-cover"
      />
      <Image
        src={light || "/placeholder.svg"}
        alt="resto-enquire-mesh-bg"
        width={100}
        height={100}
        className="absolute top-0 right-0 z-0 w-full object-left-bottom opacity-75"
      />
      <span className="relative z-20 flex h-full items-center justify-center font-semibold text-xl text-white capitalize">
        {title}
      </span>
    </div>
  );
}
