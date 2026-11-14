import { BlogArticleCard } from "@/components/blog/blog-article-card"
import { blogPosts } from "@/lib/blog-posts"

export function BlogGrid() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {blogPosts.map((article) => (
          <BlogArticleCard key={article.href} article={article} />
        ))}
      </div>
    </section>
  )
}
