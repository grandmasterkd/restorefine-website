"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="ghost"
          className="px-2 text-white hover:bg-transparent"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="services" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/services/service-1"
                    className="hover:text-white/80"
                  >
                    Service 1
                  </Link>
                  <Link
                    href="/services/service-2"
                    className="hover:text-white/80"
                  >
                    Service 2
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="company" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                Company
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <Link href="/company/about" className="hover:text-white/80">
                    About Us
                  </Link>
                  <Link href="/company/team" className="hover:text-white/80">
                    Team
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <nav className="mt-4 flex flex-col space-y-4">
            <Link href="/portfolio" className="hover:text-white/80">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-white/80">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="mt-8 w-full rounded-lg border border-white/30 bg-transparent text-white hover:bg-white/10"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            <Link href="/book-call">Book Call</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
