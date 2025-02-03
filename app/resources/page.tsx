import Link from "next/link";
import React from "react";

function Resources() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold max-w-lg">
          This page is currently under construction. Kindly come back later...
        </h2>

        <Link
          href="/"
          className="font-medium text-white/40 hover:text-white text-base ease-in-out duration-500 transition-tranform"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default Resources;
