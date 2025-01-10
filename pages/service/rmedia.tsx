import React from "react";
import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";

function RMedia() {
  return (
    <main className="">
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full object-cover absolute top-0 left-0">
          <Image
            src={luxevent}
            alt="luxevent"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </section>

      <section>Hello World</section>
    </main>
  );
}

export default RMedia;
