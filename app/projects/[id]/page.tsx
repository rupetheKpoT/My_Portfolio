import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/projects/projects-detail"
import { RelatedProjects } from "@/components/projects/related-projects"

// This would typically come from a database or CMS
const getProject = (id: string) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.",
      longDescription: `
        This comprehensive e-commerce platform was built to handle the complete online shopping experience. The project involved creating a scalable architecture that could handle high traffic loads while maintaining excellent performance.

        The platform includes a sophisticated product catalog system, user authentication and authorization, secure payment processing through Stripe, inventory management, order tracking, and a comprehensive admin dashboard for managing all aspects of the business.

        One of the key challenges was implementing real-time inventory updates across multiple concurrent users while maintaining data consistency. This was solved using optimistic locking and event-driven architecture.
      `,
      image: "/placeholder.svg?height=400&width=800&text=E-Commerce+Platform",
      images: [
        "/placeholder.svg?height=300&width=500&text=Homepage",
        "/placeholder.svg?height=300&width=500&text=Product+Page",
        "/placeholder.svg?height=300&width=500&text=Shopping+Cart",
        "/placeholder.svg?height=300&width=500&text=Admin+Dashboard",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/IT22106360",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order management and tracking",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "SEO optimized product pages",
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Handling concurrent user sessions",
        "Optimizing database queries for large product catalogs",
        "Ensuring PCI compliance for payment processing",
      ],
      solutions: [
        "Used optimistic locking for inventory management",
        "Implemented Redis for session management",
        "Added database indexing and query optimization",
        "Integrated Stripe for secure payment processing",
      ],
      timeline: "3 months",
      client: "TechCommerce Inc.",
      year: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: `
        This task management application was designed to streamline team collaboration and project management. The app features real-time updates, intuitive drag-and-drop interfaces, and comprehensive project tracking capabilities.

        The application supports multiple project workspaces, team member management, task assignments, due date tracking, and progress monitoring. Real-time collaboration was a key requirement, implemented using WebSocket connections for instant updates across all connected clients.

        The interface was designed with user experience as the top priority, featuring an intuitive Kanban board layout, customizable workflows, and detailed reporting capabilities.
      `,
      image: "/placeholder.svg?height=400&width=800&text=Task+Management",
      images: [
        "/placeholder.svg?height=300&width=500&text=Dashboard",
        "/placeholder.svg?height=300&width=500&text=Kanban+Board",
        "/placeholder.svg?height=300&width=500&text=Team+Management",
        "/placeholder.svg?height=300&width=500&text=Reports",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Material-UI"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/IT22106360",
      features: [
        "Real-time collaborative editing",
        "Drag-and-drop task management",
        "Team member management",
        "Project workspaces",
        "Due date tracking and notifications",
        "Progress reporting and analytics",
        "File attachments and comments",
        "Mobile-responsive design",
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Managing complex state across multiple users",
        "Optimizing performance for large datasets",
        "Creating intuitive drag-and-drop interactions",
      ],
      solutions: [
        "Used Socket.io for real-time communication",
        "Implemented Redux for state management",
        "Added pagination and virtual scrolling",
        "Used React DnD for smooth drag-and-drop",
      ],
      timeline: "4 months",
      client: "ProductivityPro",
      year: "2023",
    },
    // Add more projects...
  ]

  return projects.find((project) => project.id === Number.parseInt(id))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProject(params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Rashmika's Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    < >
      <ProjectDetail project={project} />
      <RelatedProjects currentProjectId={project.id} />
    </>
  )
}
