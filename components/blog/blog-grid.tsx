import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Machine Learning with Python",
      excerpt:
        "A comprehensive guide to getting started with machine learning using Python, scikit-learn, and practical examples.",
      content: `
        <p>Machine learning has revolutionized how we solve complex problems. In this guide, we'll explore the fundamentals and get hands-on with Python.</p>

        <h2>Getting Started</h2>
        <p>Learn the basics of machine learning, from understanding data to building your first model.</p>

        <h2>Essential Libraries</h2>
        <p>Master libraries like NumPy, Pandas, and scikit-learn that form the foundation of ML development.</p>

        <h2>Real-World Examples</h2>
        <p>Build practical machine learning models using real-world datasets and solve actual problems.</p>
      `,
      image: "https://images.unsplash.com/photo-1527522883525-cdfc56362db7?w=500&h=300&fit=crop",
      category: "AI/ML",
      date: "2024-03-15",
      readTime: "8 min read",
      author: "Rashmika Rupasinghe",
      slug: "machine-learning-python-guide",
      tags: ["Machine Learning", "Python", "AI", "Data Science"],
    },
    {
      id: 2,
      title: "Computer Vision Fundamentals: From Theory to Practice",
      excerpt:
        "Exploring the basics of computer vision, image processing techniques, and real-world applications using OpenCV.",
      content: `
        <p>Computer vision is transforming industries from healthcare to autonomous vehicles. Let's dive into the fundamentals.</p>

        <h2>Image Processing Basics</h2>
        <p>Understand image representation, filtering, and transformation techniques.</p>

        <h2>Feature Detection and Matching</h2>
        <p>Learn how to detect and match features across images for object recognition and tracking.</p>

        <h2>Practical Projects</h2>
        <p>Build real-world computer vision applications using OpenCV and Python.</p>
      `,
      image: "https://images.unsplash.com/photo-1535016120754-fd2cf4f4b5e2?w=500&h=300&fit=crop",
      category: "Computer Vision",
      date: "2024-03-10",
      readTime: "10 min read",
      author: "Rashmika Rupasinghe",
      slug: "computer-vision-fundamentals",
      tags: ["Computer Vision", "OpenCV", "Image Processing"],
    },
    {
      id: 3,
      title: "Building Predictive Models: Best Practices & Techniques",
      excerpt:
        "Deep dive into predictive modeling, feature engineering, and model evaluation for data science projects.",
      content: `
        <p>Predictive modeling is at the heart of data science. Let's explore best practices and techniques for building robust models.</p>

        <h2>Feature Engineering</h2>
        <p>Learn how to engineer features that improve model performance and generalization.</p>

        <h2>Model Evaluation</h2>
        <p>Understand different evaluation metrics, cross-validation, and avoiding overfitting.</p>

        <h2>Advanced Techniques</h2>
        <p>Explore ensemble methods, hyperparameter tuning, and production deployment.</p>
      `,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Data Science",
      date: "2024-03-05",
      readTime: "12 min read",
      author: "Rashmika Rupasinghe",
      slug: "predictive-models-best-practices",
      tags: ["Data Science", "Predictive Modeling", "Machine Learning"],
    },
    {
      id: 4,
      title: "Data Visualization with Power BI",
      excerpt:
        "Create compelling dashboards and visualizations using Power BI to uncover insights from your data.",
      content: `
        <p>Data visualization is crucial for communicating insights effectively. Master Power BI for professional analytics.</p>

        <h2>Dashboard Design</h2>
        <p>Learn principles of effective dashboard design and visualization.</p>

        <h2>Power BI Fundamentals</h2>
        <p>Get started with Power BI, from data connection to advanced visualizations.</p>

        <h2>Real-World Analytics</h2>
        <p>Build dashboards that tell stories and drive business decisions.</p>
      `,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "Data Analytics",
      date: "2024-03-01",
      readTime: "7 min read",
      author: "Rashmika Rupasinghe",
      slug: "power-bi-dashboard-guide",
      tags: ["Power BI", "Data Visualization", "Analytics"],
    },
    {
      id: 5,
      title: "Understanding Neural Networks",
      excerpt:
        "Exploring deep learning fundamentals, neural network architectures, and practical implementation with PyTorch.",
      content: `
        <p>Neural networks are the foundation of modern AI. Let's demystify them and build our own.</p>

        <h2>Neural Network Basics</h2>
        <p>Understand perceptrons, backpropagation, and how neural networks learn.</p>

        <h2>Deep Learning Architectures</h2>
        <p>Explore CNNs, RNNs, and transformer architectures for different applications.</p>

        <h2>PyTorch Implementation</h2>
        <p>Build and train neural networks using PyTorch with practical examples.</p>
      `,
      image: "https://images.unsplash.com/photo-1620326773019-e9f50e9d9b2e?w=500&h=300&fit=crop",
      category: "AI/ML",
      date: "2024-02-28",
      readTime: "9 min read",
      author: "Rashmika Rupasinghe",
      slug: "neural-networks-deep-learning",
      tags: ["Deep Learning", "Neural Networks", "PyTorch"],
    },
    {
      id: 6,
      title: "Data Preprocessing and Feature Engineering",
      excerpt:
        "Master data cleaning, transformation, and feature engineering techniques that improve model performance.",
      content: `
        <p>Quality data is the foundation of successful machine learning. Let's master data preprocessing.</p>

        <h2>Data Cleaning</h2>
        <p>Handle missing values, outliers, and data quality issues effectively.</p>

        <h2>Data Transformation</h2>
        <p>Normalize, scale, and encode data for optimal model performance.</p>

        <h2>Feature Engineering</h2>
        <p>Create meaningful features that boost model accuracy and interpretability.</p>
      `,
      image: "/placeholder.svg?height=300&width=500&text=Data+Preprocessing",
      category: "Data Science",
      date: "2024-02-25",
      readTime: "10 min read",
      author: "Rashmika Rupasinghe",
      slug: "data-preprocessing-feature-engineering",
      tags: ["Data Science", "Feature Engineering", "Data Preprocessing"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4" suppressHydrationWarning>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
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
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
