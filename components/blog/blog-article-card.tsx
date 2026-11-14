import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogArticle } from "@/lib/blog-posts"

type BlogArticleCardProps = {
  article: BlogArticle
}

export function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <Card className="group overflow-hidden border-gray-200 transition-all hover:border-cyan-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={1672}
          height={944}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <Badge className="absolute left-4 top-4 bg-cyan-700 text-white">{article.category}</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-cyan-700">
          {article.title}
        </h3>
        <p className="mb-5 text-sm leading-6 text-gray-600">{article.excerpt}</p>
        <a
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium text-cyan-700 transition-colors hover:text-cyan-800"
        >
          Read on Medium
          <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </CardContent>
    </Card>
  )
}
