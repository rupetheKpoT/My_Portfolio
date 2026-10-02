import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Development Best Practices",
      excerpt:
        "Exploring the latest trends and best practices in modern web development for 2024. Learn about performance optimization, accessibility, and user experience.",
      content: `
        <p>Web development has evolved significantly over the past few years. In this comprehensive guide, we'll explore the best practices that every modern web developer should follow in 2024.</p>

        <h2>Performance First</h2>
        <p>Performance is no longer optional. With Core Web Vitals becoming a ranking factor, it's crucial to optimize your websites for speed and user experience. Here are key strategies:</p>
        <ul>
          <li>Optimize images and use modern formats like WebP</li>
          <li>Implement lazy loading for images and components</li>
          <li>Use code splitting to reduce bundle sizes</li>
          <li>Leverage browser caching effectively</li>
        </ul>

        <h2>Accessibility Matters</h2>
        <p>Building accessible websites isn't just about compliance—it's about creating inclusive experiences for all users. Key considerations include:</p>
        <ul>
          <li>Semantic HTML structure</li>
          <li>Proper ARIA labels and roles</li>
          <li>Keyboard navigation support</li>
          <li>Color contrast compliance</li>
        </ul>

        <h2>Modern Frameworks</h2>
        <p>Frameworks like Next.js, React, and Vue.js have revolutionized how we build web applications. Learn how to leverage their power effectively by understanding:</p>
        <ul>
          <li>Component-based architecture</li>
          <li>State management patterns</li>
          <li>Server-side rendering benefits</li>
          <li>Build optimization techniques</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Following these best practices will help you build better, faster, and more accessible web applications. Remember, the web development landscape is constantly evolving, so stay curious and keep learning!</p>
      `,
      image: "/placeholder.svg?height=400&width=800&text=Web+Development",
      category: "Technology",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Rashmika Rupasinghe",
      slug: "modern-web-development-best-practices",
      tags: ["Web Development", "Best Practices", "Performance", "2024"],
    },
    {
      id: 2,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt:
        "A comprehensive guide to creating flexible and responsive layouts using CSS Grid and modern techniques. Master the art of responsive design.",
      content: `
        <p>CSS Grid has revolutionized how we create layouts on the web. In this tutorial, we'll dive deep into creating responsive layouts that work across all devices.</p>

        <h2>Understanding CSS Grid</h2>
        <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease. Unlike Flexbox, which is one-dimensional, Grid lets you work with both rows and columns simultaneously.</p>

        <h2>Basic Grid Concepts</h2>
        <p>Before diving into responsive layouts, let's understand the fundamental concepts:</p>
        <ul>
          <li><strong>Grid Container:</strong> The parent element with display: grid</li>
          <li><strong>Grid Items:</strong> The direct children of the grid container</li>
          <li><strong>Grid Lines:</strong> The dividing lines that make up the structure</li>
          <li><strong>Grid Tracks:</strong> The space between two adjacent grid lines</li>
        </ul>

        <h2>Creating Responsive Grids</h2>
        <p>Here's how to create layouts that adapt to different screen sizes:</p>
        <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
        </code></pre>

        <h2>Advanced Techniques</h2>
        <p>For more complex layouts, you can use:</p>
        <ul>
          <li>Grid template areas for semantic layouts</li>
          <li>Subgrid for nested grid alignment</li>
          <li>Container queries for component-based responsiveness</li>
        </ul>

        <h2>Conclusion</h2>
        <p>CSS Grid is a powerful tool for creating responsive layouts. With practice, you'll find it becomes an indispensable part of your CSS toolkit.</p>
      `,
      image: "/placeholder.svg?height=400&width=800&text=CSS+Grid",
      category: "Tutorial",
      date: "2024-01-10",
      readTime: "8 min read",
      author: "Rashmika Rupasinghe",
      slug: "building-responsive-layouts-css-grid",
      tags: ["CSS", "Grid", "Responsive Design", "Tutorial"],
    },
    // Add more blog posts here...
  ]

  return blogPosts.find((post) => post.slug === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Rashmika's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    < >
      <BlogPost post={post} />
      <RelatedPosts currentPostId={post.id} />
    </>
  )
}
