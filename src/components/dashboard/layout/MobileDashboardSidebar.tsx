"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import DashboardNav from "./DashboardNav";
import DashboardUser from "./DashboardUser";

import { DashboardSidebarProps } from "./dashboard.types";

export default function MobileDashboardSidebar({
  role,
  user,
}: DashboardSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-16 z-10 flex h-16 items-center border-b bg-background px-4 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Open dashboard menu"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-0 sm:max-w-xs">
          <SheetHeader className="border-b px-6 py-5">
            <SheetTitle className="text-xl font-bold">GearUp</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <DashboardNav role={role} onNavigate={() => setOpen(false)} />
          </div>

          <div className="border-t p-4">
            <DashboardUser user={user} />
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="ml-3 text-xl font-bold">GearUp</h1>
    </header>
  );
}
