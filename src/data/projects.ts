export interface Project {
  slug: string;
  title: string;
  type: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  contributions?: string[];
  github: string | null;
  liveDemo: string | null;
  image: string; // Placeholder for visual preview
}

export const projects: Project[] = [
  {
    slug: "technest",
    title: "Technology Products E-Commerce Platform",
    type: "Personal Project",
    shortDescription: "A full-stack e-commerce platform for tech products with secure JWT authentication and PayHere integration.",
    description: "Independently built a full-stack e-commerce platform with JWT-based authentication, customer/admin role-based access, product and inventory management, shopping cart, wishlist, coupon-based discounts, and order processing.",
    technologies: [
      "React 19", "TypeScript", "Java 21", "Spring Boot 4", "PostgreSQL",
      "JWT", "PayHere", "Vite", "Tailwind CSS", "TanStack Query", "Zustand"
    ],
    features: [
      "JWT authentication and role-based access control",
      "Product, inventory, cart, and wishlist management",
      "Coupon-based discount system",
      "Order processing and backend transaction validation",
      "Idempotent webhook handling for PayHere integration"
    ],
    github: null, // Placeholder
    liveDemo: null, // Placeholder
    image: "technest-preview" // We'll handle this in the UI components
  },
  {
    slug: "medicarex",
    title: "Pharmacy Supply Chain Management System",
    type: "Group Project",
    shortDescription: "A full-stack platform connecting customers, pharmacists, suppliers, and admins, featuring AI content generation.",
    description: "A full-stack pharmacy supply chain platform connecting customers, pharmacists, suppliers, and administrators.",
    technologies: [
      "React 19", "TypeScript", "NestJS 11", "Firebase", "Groq API",
      "Llama models", "PayHere", "jsPDF", "React Native", "Tailwind CSS"
    ],
    features: [
      "Multi-role pharmacy workflow",
      "Secure checkout with PayHere",
      "Automated PDF invoice generation",
      "AI-powered health blog with automated content generation",
      "Pharmacist approval workflows",
      "Mobile application integration"
    ],
    contributions: [
      "System design and sequence diagrams",
      "Secure checkout and PayHere payment processing integration",
      "Automated PDF invoice generation using jsPDF",
      "AI-powered health blog and automated content generation via Groq API (Llama models)",
      "Pharmacist approval workflows",
      "Mobile application development and cross-platform integration"
    ],
    github: null, // Placeholder
    liveDemo: null, // Placeholder
    image: "medicarex-preview"
  }
];
