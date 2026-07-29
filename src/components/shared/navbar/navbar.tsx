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
  Sun,
  Moon,
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/services/auth/logout";
import { useTheme } from "@/providers/theme-provider";

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
    profile: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};
type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLogout = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };
  const handleDashboard = async (action: string) => {
    if (action === "dashboard") {
      if (user.data.profile.role === "USER") {
        router.push("/dashboard");
      } else if (user.data.profile.role === "AUTHOR") {
        router.push("/author-dashboard");
      } else if (user.data.profile.role === "ADMIN") {
        router.push("/admin-dashboard");
      }
      return;
    }
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Prisma<span className="text-primary">Press</span>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="cursor-pointer"
        >
          {theme === "light" ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
        </Button>

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
                <AvatarImage
                  src={user.data?.profile.profile.profilePhoto}
                  alt="Jane Doe"
                />
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
                      {user.data?.profile.name || "Name"}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {user.data?.profile.email || "Email"}
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
