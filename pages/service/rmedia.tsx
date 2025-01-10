import React from "react";
import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";
import mlogo from "@/public/rmedialogo.svg";

function RMedia() {
  return (
    <main className="">
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
          <Image
            src={luxevent}
            alt="luxevent"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <span className="min-h-screen relative z-10 flex items-center justify-center">
            <Image
              src={mlogo}
              alt="restomedialogo"
              width={100}
              height={100}
              className=""
            />
          </span>
        </div>
      </section>

      <section>Hello World</section>
    </main>
  );
}

export default RMedia;
