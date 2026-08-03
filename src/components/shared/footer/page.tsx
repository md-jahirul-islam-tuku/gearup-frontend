"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siFacebook, siInstagram, siX, siYoutube } from "simple-icons";
import { Montserrat_Alternates } from "next/font/google";

export const footerFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],

  support: [
    { label: "Help Center", href: "/" },
    { label: "Terms & Conditions", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Cancellation Policy", href: "/" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: siFacebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: siInstagram,
  },
  {
    label: "Twitter",
    href: "#",
    icon: siX,
  },
  {
    label: "YouTube",
    href: "#",
    icon: siYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex flex-col items-center gap-0">
              <Image
                src="/images/nav-logo.png"
                alt="GearUp"
                width={55}
                height={55}
              />

              <span
                className={`${footerFont.className} text-md font-bold leading-none tracking-tight text-foreground`}
              >
                GearUp
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              Rent the gear you need. Explore more, travel better, and enjoy
              every adventure with GearUp.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border bg-background text-foreground transition-colors hover:bg-muted"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-4 fill-current"
                  >
                    <path d={social.icon.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}

                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}

                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

                <span className="text-sm leading-5 text-muted-foreground">
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />

                <Link
                  href="mailto:support@gearup.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  tukuwebian@gmail.com
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />

                <Link
                  href="tel:+8801000000000"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +880 1768 667747
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} GearUp. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <Link href="/" className="transition-colors hover:text-foreground">
              Privacy
            </Link>

            <span className="text-border">•</span>

            <Link href="/" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
