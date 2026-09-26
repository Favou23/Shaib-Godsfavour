"use client";

import { CONTACT_URL } from "@/config/routes";
import type { NavLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  navLinks?: NavLinks[];
};

const fallbackNav: NavLinks[] = [
  { id: 1, name: "Projects", href: "/projects" },
  { id: 2, name: "Articles", href: "/articles" },
  { id: 3, name: "Contact", href: CONTACT_URL },
];

function withContactLink(links: NavLinks[]): NavLinks[] {
  const hasContact = links.some((link) => {
    const href = link.href.startsWith("/") ? link.href : `/${link.href}`;
    return href === CONTACT_URL;
  });

  if (hasContact) return links;

  return [...links, { id: "contact", name: "Contact", href: CONTACT_URL }];
}

const Header = ({ navLinks = fallbackNav }: HeaderProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = withContactLink(navLinks);

  return (
    <header className="flex items-center justify-between gap-4">
      <Link
        href="/"
        className={`font-display text-lg font-semibold tracking-tight transition-colors ${
          isHome ? "text-highlight" : "text-foreground hover:text-highlight"
        }`}
      >
        Godsfavour !
      </Link>

      <nav className="flex flex-wrap justify-end gap-2">
        {links.map((nav) => {
          const href = nav.href.startsWith("/") ? nav.href : `/${nav.href}`;
          const label = href === "/" ? "/home" : href;
          const isActive = pathname === href;

          return (
            <Link
              key={nav.id}
              href={href}
              className={`nav-chip ${isActive ? "border-highlight bg-highlight/10 text-highlight" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
