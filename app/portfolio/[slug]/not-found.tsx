import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Project Not Found
        </h2>
        <p className="mb-8 text-white/60">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/work"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
