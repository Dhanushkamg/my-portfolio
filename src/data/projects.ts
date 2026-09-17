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
  gallery?: string[]; // Optional gallery for multiple images
}

export const projects: Project[] = [
  {
    slug: "suwa-sarana",
    title: "Suwa Sarana",
    type: "Personal Project",
    shortDescription: "A blood donation platform utilizing geospatial data to locate nearest eligible donors with real-time notification cascades.",
    description: "Automates and streamlines the entire donation lifecycle. By utilizing geospatial data, the platform instantly locates the nearest eligible donors and notifies them via a reliable real-time cascade. It also provides tools for private family donor circles and empowers hospitals to manage donation camps efficiently.",
    technologies: [
      "Java 21", "Spring Boot 3.2", "PostgreSQL", "Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI", "Docker", "Groq LLM", "Server-Sent Events"
    ],
    features: [
      "High-Performance Geospatial Matching Engine",
      "Fault-Tolerant Notification Cascade with SSE and SMS fallback",
      "Trilingual AI Assistants (Conversational Intake & Grounded FAQ Bot)",
      "Private 'Donor Circles' & Open Graph Sharing",
      "Donation Camp & Slot Booking System",
      "AI-Assisted Fraud & Duplicate Triage"
    ],
    detailedContributions: [
      {
        category: "High-Performance Geospatial Matching Engine",
        items: [
          "PostgreSQL (cube + earthdistance extensions), Spring Data JPA",
          "Optimized query engine calculating spherical distances (5km → 15km → 25km)",
          "Real-time eligibility checks before matching"
        ]
      },
      {
        category: "Fault-Tolerant Notification Cascade",
        items: [
          "Server-Sent Events (SSE), Spring Boot, 3rd-party SMS Gateway APIs",
          "NotificationCascadeService prioritizing zero-latency SSE for online donors",
          "Automatic fallback to SMS for offline or unacknowledged users"
        ]
      },
      {
        category: "Trilingual AI Assistants (Groq LLM)",
        items: [
          "Groq API (LLaMA models), Next.js, Spring Boot",
          "Conversational Intake extracting structured data in English, Sinhala, or Tamil",
          "Grounded FAQ Bot answering donor eligibility questions based on NBTS rules"
        ]
      },
      {
        category: "Private 'Donor Circles' & Open Graph Sharing",
        items: [
          "Tokenized sharing system for private volunteer networks",
          "Dynamically generated Open Graph cards for Facebook and WhatsApp sharing"
        ]
      },
      {
        category: "Donation Camp & Slot Booking System",
        items: [
          "Module for organizing national donation drives",
          "Appointment booking with capacity controls and QR code check-ins"
        ]
      },
      {
        category: "AI-Assisted Fraud & Duplicate Triage",
        items: [
          "Background job scheduler analyzing requests against historical patterns",
          "Assigns fraud risk score with explainable diagnostic flags"
        ]
      }
    ],
    github: "https://github.com/Dhanushkamg/Suwa-Sarana",
    liveDemo: null,
    image: "suwa-sarana.webp"
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
    image: "medicarex1.webp",
    gallery: ["medicarex1.webp", "medicarex2.webp", "medicarex3.webp", "medicarex4.webp"]
  },
  {
    slug: "technest",
    title: "TechNest E-Commerce Platform",
    type: "Personal Project",
    shortDescription: "A comprehensive, full-stack e-commerce application with a modern React frontend and a robust Spring Boot backend.",
    description: "TechNest is a comprehensive, full-stack e-commerce application designed to provide a rich shopping experience. It features a modern frontend built with React 19 and a robust backend powered by Spring Boot 3.x (Java 21) in a consolidated monorepo architecture.",
    technologies: [
      "React 19", "TypeScript", "Vite 8", "Tailwind CSS v4", "Zustand", "TanStack Query v5", "React Router v7", "React Hook Form", "Zod", "Playwright",
      "Java 21", "Spring Boot 3.x", "PostgreSQL", "Spring Data JPA", "Spring Security", "OAuth2", "JWT", "Flyway", "JUnit 5", "Testcontainers"
    ],
    features: [
      "Customer-facing store with product browsing, searching, and filtering",
      "Shopping cart and wishlist management",
      "Complete checkout flows including guest checkout",
      "Payment processing integration (Stripe, PayPal, COD)",
      "OAuth2 and JWT-based authentication",
      "Full-featured admin management dashboard",
      "PDF invoice generation for orders"
    ],
    detailedContributions: [
      {
        category: "Authentication & Security",
        items: [
          "JWT Authentication for secure login and registration",
          "OAuth2 Integration for seamless Google login",
          "Email Verification for newly registered non-OAuth users",
          "Password Management including forgot and reset flows"
        ]
      },
      {
        category: "Shopping Experience & Payments",
        items: [
          "Paginated product catalog with search and category filters",
          "Dynamic management of cart and wishlist with persistent state",
          "Guest Checkout supporting purchases without account creation",
          "Payment integration supporting Stripe, PayPal, and Cash on Delivery"
        ]
      },
      {
        category: "Admin Dashboard",
        items: [
          "Full CRUD capabilities for product and category inventory management",
          "Order tracking, cancellations with inventory restock, and PDF invoice downloads",
          "High-level analytics overview of store performance"
        ]
      },
      {
        category: "Architecture & Infrastructure",
        items: [
          "Consolidated monorepo structure for frontend and backend",
          "Database schema consistency managed by Flyway migrations",
          "Concurrency locks for inventory management",
          "Structured logging (Logstash Logback) and SMTP Mail integration"
        ]
      }
    ],
    github: "https://github.com/Dhanushkamg/technest-frontend",
    liveDemo: null,
    image: "technest.webp"
  },
  {
    slug: "quicklink",
    title: "QuickLink URL Shortener",
    type: "Personal Project",
    shortDescription: "A modern, high-performance URL shortener application with custom aliases and click analytics.",
    description: "A modern, high-performance URL shortener application allowing users to convert long URLs into compact links, generate custom aliases, track click analytics, and create QR codes for their shortened URLs.",
    technologies: [
      "Java 17", "Spring Boot 3", "React 19", "Vite", "H2 Database", "Flyway", "Bucket4j", "Mockito"
    ],
    features: [
      "URL Shortening & Redirection with custom aliases",
      "Analytics tracking for shortened links",
      "Automated cleanup for expired URLs",
      "API rate limiting using Bucket4j",
      "Database migrations via Flyway"
    ],
    detailedContributions: [
      {
        category: "URL Shortening & Redirection",
        items: [
          "Backend generates unique short codes",
          "Custom aliases support via customCode",
          "Redirection from GET /{shortCode} to original URL"
        ]
      },
      {
        category: "Analytics & Maintenance",
        items: [
          "ClickEvent recording with timestamp on access",
          "Scheduled cleanup task for expired URLs"
        ]
      },
      {
        category: "Security & Stability",
        items: [
          "RateLimiterFilter using Bucket4j for API abuse protection",
          "Flyway database migrations for consistent schema application across environments"
        ]
      }
    ],
    github: "https://github.com/Dhanushkamg/url-shortener",
    liveDemo: null,
    image: "quicklink.webp"
  }
];
