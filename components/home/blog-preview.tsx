import { Button } from "@/components/ui/button"
import { BlogArticleCard } from "@/components/blog/blog-article-card"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"

export function BlogPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-[-4rem] left-[-4rem] h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-20 blur-[120px]" />
        <div className="absolute right-[-6rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 opacity-20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl font-orbitron">
            Latest <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Notes on software testing, quality assurance, and the changing role of AI in testing.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {blogPosts.map((article) => (
            <BlogArticleCard key={article.href} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-600/50 bg-transparent text-cyan-700 hover:bg-cyan-50"
            asChild
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
