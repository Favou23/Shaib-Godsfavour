import {
  ARTICLE_URL,
  CONTACT_URL,
  EXPERIENCE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  PROJECT_URL,
} from "@/config/routes";
import type { CmsFooterBrand } from "@/lib/cms";
import type { FooterColumn, FooterLink, PortfolioItem } from "@/lib/definitions";
import { formatUtcOffset, getCurrentYear } from "@/lib/helper";
import Link from "next/link";

type FooterProps = {
  columns: FooterColumn[];
  socialLinks?: PortfolioItem[];
  brand?: CmsFooterBrand;
};

const fallbackSocialLinks: PortfolioItem[] = [
  { id: "github", name: "GitHub", uri: GITHUB_URL },
  { id: "linkedin", name: "LinkedIn", uri: LINKEDIN_URL },
  { id: "medium", name: "Medium", uri: MEDIUM_URL },
];

const fallbackRoutes: FooterLink[] = [
  { id: "projects", label: "Projects", url: PROJECT_URL },
  { id: "experience", label: "Experience", url: EXPERIENCE_URL },
  { id: "articles", label: "Articles", url: ARTICLE_URL },
  { id: "contact", label: "Contact", url: CONTACT_URL },
];

function withContactRoute(links: FooterLink[]): FooterLink[] {
  const hasContact = links.some((link) => link.url === CONTACT_URL);
  if (hasContact) return links;

  return [...links, { id: "contact", label: "Contact", url: CONTACT_URL }];
}

const Footer = ({ columns, socialLinks = [], brand }: FooterProps) => {
  const configuredSocialLinks = socialLinks.filter(
    (link) => !/resume|cv|email/i.test(link.name),
  );
  const elsewhere = configuredSocialLinks.length > 0
    ? configuredSocialLinks
    : fallbackSocialLinks;

  const configuredRoutes =
    columns.find((column) => column.title.toLowerCase().includes("quick"))?.links ??
    columns[columns.length - 1]?.links ??
    [];
  const routes = withContactRoute(
    configuredRoutes.length > 0 ? configuredRoutes : fallbackRoutes,
  );

  const year = getCurrentYear();
  const copyrightName = brand?.copyrightName || "SHAIB GODSFAVOUR";
  const location = brand?.location || "LAGOS, NIGERIA";
  const utcOffset = formatUtcOffset(brand?.timezone || "Africa/Lagos");

  return (
    <footer className="mt-20 border-t border-border pt-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="section-label mb-4">Find me elsewhere</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {elsewhere.map((link) => (
              <li key={link.id}>
                <Link href={link.uri} target="_blank" rel="noopener noreferrer" className="soft-link">
                  {link.name.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="section-label mb-4">Routes</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {routes.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="soft-link">
                  {link.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-10 space-y-1 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
        <p>
          &copy; {year} {copyrightName}
        </p>
        <p>
          {location} · {utcOffset}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
