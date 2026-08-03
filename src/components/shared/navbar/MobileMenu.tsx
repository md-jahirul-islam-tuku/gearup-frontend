"use client";

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
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

type Props = {
  items: NavItem[];
};

export default function MobileMenu({ items }: Props) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-6" />
          </Button>
        }
      />

      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/nav-logo.png"
              alt="nav-logo"
              width={50}
              height={50}
            />
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-muted"
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
