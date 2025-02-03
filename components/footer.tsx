import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  Socials: [
    { name: "Instagram", href: "https://www.instagram.com/restorefine/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/acharya-rohit/" },
    // { name: "Media", href: "/services/restomedia" },
    // { name: "Print", href: "/services/restoprint" },
    // { name: "POS", href: "" },
  ],
  Company: [
    { name: "RestoRefine", href: "/company" },
    { name: "Founders", href: "/company" },
    // { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/" },
    // { name: "Manifesto", href: "/manifesto" },
    // { name: "Press", href: "/press" },
    // { name: "Contract", href: "/contract" },
  ],
  Support: [
    { name: "Enquiries", href: "/enquire-now" },
    { name: "Careers", href: "/contact" },
    { name: "Help Center", href: "/contact" },
    // { name: "Community", href: "/community" },
    // { name: "Guides", href: "/guides" },
    // { name: "Docs", href: "/docs" },
    // { name: "Press", href: "/press" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  // { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/restorefine/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/acharya-rohit/",
  },
  // { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="pt-44 pb-8 lg:pb-20">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 lg:gap-20 place-items-end justify-between lg:grid-cols-12">
          {/* Logo and Social Links */}
          <div className="flex flex-col h-full justify-between lg:col-span-4">
            <Link href="/" className="block mb-8">
              <Image
                src="/restorefine-logowhite.svg"
                alt="RestoRefine"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="space-y-4">
              {/* <h3 className="text-lg font-medium text-white">
                Connect With Us
              </h3> */}
              <div className="flex gap-4 hidden">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-white/60 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <section className="block space-y-1">
              <div> 272 Bath Street Glasgow G2 4JR</div>
              <div className="text-white/40 text-sm">
                ©2025 RestoRefine Studios. All rights reserved.
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="w-full grid grid-cols-2 gap-8 justify-between sm:grid-cols-4 lg:col-span-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-medium text-white">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
