export type BlogArticle = {
  title: string
  excerpt: string
  href: string
  category: string
  image: string
}

export const blogPosts: BlogArticle[] = [
  {
    title: "The Principles of Test Management and AI Impact",
    excerpt:
      "A look at test management principles and the role AI can play in the way teams plan and oversee software testing.",
    href: "https://medium.com/@w.a.r.k.rupasinghe.1017/the-principles-of-test-management-and-ai-impact-62b2ec322add?sharedUserId=w.a.r.k.rupasinghe.1017",
    category: "Test Management & AI",
    image: "/images/articles/test-management-ai.png",
  },
  {
    title: "The Seven Principles of Software Testing",
    excerpt:
      "A practical look at the seven principles of software testing and how they guide testers in finding defects and building confidence in a product.",
    href: "https://medium.com/@w.a.r.k.rupasinghe.1017/the-seven-principles-of-software-testing-437ba083b2d0?sharedUserId=w.a.r.k.rupasinghe.1017",
    category: "Software Testing",
    image: "/images/articles/seven-principles-testing.png",
  },
]
