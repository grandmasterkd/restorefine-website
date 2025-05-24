import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blogContent"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}


export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }



  return (
    <main>
     
      <section className="relative h-[500px] w-full">
        <div className="">
          <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>      
      </section>

       <div className="max-w-3xl relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{post.title}</h1>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#d9d9d9]">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex items-center text-white text-sm">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

     
      <section className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-[#d9d9d9]">
                    {block.content}
                  </p>
                )
              } else if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">
                    {block.content}
                  </h2>
                )
              } else if (block.type === "image") {
                return (
                  <div key={index} className="my-8">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={block.src || "/placeholder.svg"}
                        alt={block.alt || ""}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {block.caption && <p className="text-sm text-[#999999] mt-2 text-center">{block.caption}</p>}
                  </div>
                )
              }
              return null
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-[#464646]">
            <Link href="/resources" className="text-[#999999] hover:text-white transition-colors">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
