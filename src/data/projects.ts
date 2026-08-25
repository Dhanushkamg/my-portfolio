export interface DetailedContribution {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  contributions?: string[];
  detailedContributions?: DetailedContribution[];
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
    github: "https://github.com/Dhanushkamg/technest-frontend",
    liveDemo: null,
    image: "technest.webp"
  },
  {
    slug: "medicarex",
    title: "MediCareX",
    type: "Group Project",
    shortDescription: "AI-powered pharmacy and healthcare supply chain management platform.",
    description: "AI-powered pharmacy and healthcare supply chain management platform connecting customers, pharmacists, suppliers, and administrators with secure payment processing, automated invoicing, AI blog generation, and mobile app integration.",
    technologies: [
      "React 19", "TypeScript", "NestJS 11", "Firebase", "Groq API",
      "Llama models", "React Native", "Tailwind CSS", "PayHere", "jsPDF", "jsPDF-AutoTable"
    ],
    features: [
      "Multi-role pharmacy workflow connecting customers, pharmacists, suppliers, and admins",
      "Secure checkout with PayHere payment gateway integration and backend verification",
      "Automated PDF invoice generation using jsPDF and jsPDF-AutoTable",
      "AI-powered health blog system using Groq API and Llama models",
      "Pharmacist review and approval workflow for AI-generated articles",
      "React Native mobile application with blog features and WebView payments",
      "System design diagrams and documentation"
    ],
    detailedContributions: [
      {
        category: "Checkout & Payment Integration",
        items: [
          "Complete checkout workflow",
          "PayHere payment gateway integration",
          "Cart/billing validation",
          "Order processing",
          "External payment redirect handling"
        ]
      },
      {
        category: "Secure Payment Processing",
        items: [
          "NestJS + Firebase backend payment verification",
          "Secure hash generation",
          "Payment tampering prevention",
          "Webhook handling",
          "Payment/order status updates",
          "Customer and pharmacist notifications"
        ]
      },
      {
        category: "Invoice Generation",
        items: [
          "jsPDF",
          "jsPDF-AutoTable",
          "Automated PDF invoices",
          "Order details",
          "Items",
          "Dates",
          "Transaction information"
        ]
      },
      {
        category: "AI-Powered Health Blog System",
        items: [
          "AI-generated health articles",
          "Scheduled content generation",
          "Groq API",
          "Llama models",
          "Automatic topic selection",
          "AI-generated article images"
        ]
      },
      {
        category: "Pharmacist Approval Workflow",
        items: [
          "Pharmacist review of AI-generated health articles",
          "Approve / reject workflow",
          "Regeneration after rejection",
          "Human-in-the-loop approach"
        ]
      },
      {
        category: "Mobile App Integration",
        items: [
          "Health blog integration",
          "Likes",
          "Comments",
          "Sharing",
          "Medical disclaimers",
          "PayHere WebView payment integration",
          "Payment tracking",
          "Automatic order updates"
        ]
      },
      {
        category: "System Design & Documentation",
        items: [
          "Payment sequence diagrams",
          "AI blog generation sequence diagrams",
          "Supporting documentation",
          "Admin interfaces for blog approval/monitoring"
        ]
      }
    ],
    github: "https://github.com/SoftwareProjectInnovateX",
    liveDemo: "https://innovatexuom.vercel.app/",
    image: "medicarex.webp"
  }
];
