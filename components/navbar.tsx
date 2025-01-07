"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Paperclip, ArrowUpRight, FileEdit, Camera } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import navlogo from "@/public/restorefine-logowhite.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const services = [
  {
    title: "Resto Branding",
    href: "/services/branding",
    description: "Development of brand identities, stories etc",
    icon: Box,
  },
  {
    title: "Resto Print",
    href: "/services/print",
    description: "Menu design, prints and more",
    icon: Paperclip,
  },
  {
    title: "Resto Consult",
    href: "/services/consult",
    description: "Interactive business solutions and more",
    icon: ArrowUpRight,
  },
  {
    title: "Resto Web",
    href: "/services/web",
    description: "Website and app development, SEO and more",
    icon: FileEdit,
  },
  {
    title: "Resto Events",
    href: "/services/events",
    description: "Event photography, videos, hosting and more",
    icon: Camera,
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-b-white/15 text-sm font-normal">
      <div className="flex h-20 px-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <Image src={navlogo} alt="Resto Refine" width={25} height={25} />
        </Link>

        {/* Navigation Items Container */}
        <div className="ml-20 hidden md:block">
          <div className="rounded-full border border-white/15 px-10 py-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80 data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[400px] space-y-3 p-4 border border-white/30 bg-black">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                          icon={service.icon}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/company" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Company
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Book Call Button */}
        <div className="bg-transparent border border-white/10 p-1.5 rounded-xl flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex relative rounded-lg border border-white/35 bg-transparent text-white hover:bg-white/10"
            style={{ boxShadow: "inset 0 0  15px rgba(164, 164, 164, 0.5)" }}
          >
            <Link href="/contact">Enquire Now</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-start gap-4 rounded-md p-3 hover:bg-white/5 transition-colors",
            className
          )}
          {...props}
        >
          {Icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10">
              <Icon className="size-5 text-white/50" />
            </div>
          )}
          <div className="space-y-1">
            <div className="text-base font-medium leading-none text-white/50">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
