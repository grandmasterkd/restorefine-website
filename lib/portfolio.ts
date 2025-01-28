export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  date: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "restorefine-web",
    title: "RestoRefine Web Platform",
    description:
      "Lorem ipsum dolor amet, consectetuer adipiscing elit. Accumsan rutrum rhoncus semper magnis justo lorem. Torquent dui hendrerit tortor condimentum per. Magnis lacinia suscipit risus suspendisse congue amet. Volutpat quisque fermentum torquent imperdiet curae. Varius efficitur netus purus habitasse finibus auctor.",
    thumbnail: "/placeholder.svg?height=900&width=1600",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
    ],
    date: "2024-01-28",
  },
  {
    id: "brand-identity",
    title: "Brand Identity Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
    ],
    date: "2024-01-15",
  },
  {
    id: "digital-campaign",
    title: "Winners Always Win",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumbnail: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
    ],
    date: "2023-12-20",
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    thumbnail: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
    ],
    date: "2023-12-10",
  },
  {
    id: "website-redesign",
    title: "Corporate Website Redesign",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=900&width=1600",
    ],
    date: "2023-11-30",
  },
];
