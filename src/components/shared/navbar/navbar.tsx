"use client";

import Link from "next/link";
import {
  Home,
  Info,
  Mail,
  Zap,
  User,
  CircleUser,
  CreditCard,
  LogOut,
  LifeBuoy,
  LayoutDashboard,
  Toolbox,
  Cog,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/services/auth/logout";
import ModeToggle from "../mode-toggle/ModeToggle";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

export const poppins = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Services", href: "/services", icon: Zap },
  { label: "Categories", href: "/news", icon: Toolbox },
  { label: "Gears", href: "/premium", icon: Cog },
];

const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Billing", icon: CreditCard, action: "billing" },
  { label: "Support", icon: LifeBuoy, action: "support" },
];

type IUser = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    profileImage: string;
    createdAt: string;
    updatedAt: string;
  };
};

type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();

  const handleLogout = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };
  const handleDashboard = async (action: string) => {
    const userRole = user.data.role;
    if (action === "dashboard") {
      switch (userRole) {
        case "ADMIN":
          redirect("/dashboard/admin");

        case "CUSTOMER":
          redirect("/dashboard/customer");

        case "PROVIDER":
          redirect("/dashboard/provider");

        default:
          redirect("/");
      }
      return;
    }
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-0">
          <Image
            src="/images/nav-logo.png"
            alt="nav-logo"
            width={50}
            height={50}
          />
          <span
            className={`${poppins.className} text-md font-bold leading-none tracking-tight text-foreground`}
          >
            GearUp
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <item.icon data-icon="inline-start" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Theme toggle */}
        <ModeToggle />

        {/* User dropdown */}
        {user.success ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Open user menu"
                />
              }
            >
              <Avatar className="size-8 cursor-pointer">
                <AvatarImage src={user.data?.profileImage as string} alt="profile_image" />
                <AvatarFallback>
                  <CircleUser className="size-7" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {user.data?.name || "Name"}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {user.data?.email || "Email"}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={async () => {
                      await handleDashboard(item.action);
                    }}
                  >
                    <item.icon data-icon="inline-start" />
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onClick={async () => {
                  await handleLogout("logout");
                }}
              >
                <LogOut data-icon="inline-start" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div>
            <Link href={"/login"}>
              <Button className="cursor-pointer font-bold">LOGIN</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="cursor-pointer font-bold">REGISTER</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
