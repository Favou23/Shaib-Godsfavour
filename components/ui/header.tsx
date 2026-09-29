"use client";

import { ARTICLE_URL, CONTACT_URL, EXPERIENCE_URL, PROJECT_URL } from "@/config/routes";
import type { NavLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  navLinks?: NavLinks[];
};

const fallbackNav: NavLinks[] = [
  { id: 1, name: "Projects", href: PROJECT_URL },
  { id: 2, name: "Experience", href: EXPERIENCE_URL },
  { id: 3, name: "Articles", href: ARTICLE_URL },
  { id: 4, name: "Contact", href: CONTACT_URL },
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
  const links = withContactLink(navLinks.length > 0 ? navLinks : fallbackNav);

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
          const isActive = pathname === href;

          return (
            <Link
              key={nav.id}
              href={href}
              className={`nav-chip ${isActive ? "border-highlight bg-highlight/10 text-highlight" : ""}`}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
