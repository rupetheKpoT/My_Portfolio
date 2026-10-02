import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function BlogPreview() {
  const recentPosts = [
    {
      id: 1,
      title: "Introduction to Machine Learning with Python",
      excerpt: "A comprehensive guide to getting started with machine learning using Python, scikit-learn, and practical examples.",
      image: "https://images.unsplash.com/photo-1527522883525-cdfc56362db7?w=300&h=200&fit=crop",
      category: "AI/ML",
      date: "2024-03-15",
      readTime: "8 min read",
      slug: "machine-learning-python-guide",
    },
    {
      id: 2,
      title: "Computer Vision Fundamentals: From Theory to Practice",
      excerpt:
        "Exploring the basics of computer vision, image processing techniques, and real-world applications using OpenCV.",
      image: "https://images.unsplash.com/photo-1535016120754-fd2cf4f4b5e2?w=300&h=200&fit=crop",
      category: "Computer Vision",
      date: "2024-03-10",
      readTime: "10 min read",
      slug: "computer-vision-fundamentals",
    },
    {
      id: 3,
      title: "Building Predictive Models: Best Practices & Techniques",
      excerpt: "Deep dive into predictive modeling, feature engineering, and model evaluation for data science projects.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      category: "Data Science",
      date: "2024-03-05",
      readTime: "12 min read",
      slug: "predictive-models-best-practices",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Blurred Gradient Bubbles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-4rem] left-[-4rem] w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-30 rounded-full filter blur-[120px]" />
        <div className="absolute top-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-500 to-purple-500 opacity-30 rounded-full filter blur-[140px]" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-black">
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on machine learning, data science, and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4" suppressHydrationWarning>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-600/50 hover:bg-cyan-50 text-cyan-700 bg-transparent"
          >
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
