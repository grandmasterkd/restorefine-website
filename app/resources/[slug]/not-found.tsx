import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] px-4">
      <h1 className="text-4xl font-bold mb-4 text-white">Blog Post Not Found</h1>
      <p className="text-[#999999] mb-8">The blog post you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/blog" className="px-6 py-3 bg-white text-black rounded-full hover:bg-[#f0f0f0] transition-colors">
        Back to Blog
      </Link>
    </div>
  )
}
