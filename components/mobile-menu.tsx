"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { services } from "./navbar";

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
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const toggleServices = (event: React.MouseEvent) => {
    event.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="default"
          className="px-3 text-white hover:bg-transparent"
        >
          <Menu className="w-12 h-12" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[80%] bg-black border border-white/40 text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-white">
            <Link href="/">Go Home</Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          <Accordion
            type="single"
            collapsible
            value={servicesOpen ? "services" : ""}
          >
            <AccordionItem value="services" className="border-white/40">
              <AccordionTrigger
                className="hover:no-underline"
                onClick={toggleServices}
              >
                <div className="flex items-center justify-between w-full">
                  <Link
                    href="/services"
                    className="flex-grow text-left"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Services
                  </Link>
                  <ChevronDown
                    onClick={toggleServices}
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-5 pl-6">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className=" text-white/70 hover:text-white flex items-center gap-2"
                    >
                      <service.icon className="h-5 w-5" />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <nav className="mt-4 flex flex-col space-y-6">
            <Link href="/portfolio" className="hover:text-white/80">
              Portfolio
            </Link>
            <Link href="/company" className="hover:text-white/80">
              Company
            </Link>
            <Link href="/blog" className="hover:text-white/80">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="mt-8 w-full rounded-lg border border-white/30 bg-transparent text-white hover:bg-white/10"
            style={{
              boxShadow: "inset 0 0 15px rgba(164, 164, 164, 0.5)",
            }}
          >
            <Link href="/enquire-now">Enquire Now</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
