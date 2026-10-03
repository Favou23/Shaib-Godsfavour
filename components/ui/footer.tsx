import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from "@/config/routes";
import type { CmsFooterBrand } from "@/lib/cms";
import type { PortfolioItem } from "@/lib/definitions";
import { formatUtcOffset, getCurrentYear } from "@/lib/helper";
import Link from "next/link";

type FooterProps = {
  socialLinks?: PortfolioItem[];
  brand?: CmsFooterBrand;
};

const fallbackSocialLinks: PortfolioItem[] = [
  { id: "github", name: "GitHub", uri: GITHUB_URL },
  { id: "linkedin", name: "LinkedIn", uri: LINKEDIN_URL },
  { id: "medium", name: "Medium", uri: MEDIUM_URL },
];

const Footer = ({ socialLinks = [], brand }: FooterProps) => {
  const configuredSocialLinks = socialLinks.filter(
    (link) => !/resume|cv|email/i.test(link.name),
  );
  const elsewhere = configuredSocialLinks.length > 0
    ? configuredSocialLinks
    : fallbackSocialLinks;

  const year = getCurrentYear();
  const copyrightName = brand?.copyrightName || "SHAIB GODSFAVOUR";
  const location = brand?.location || "LAGOS, NIGERIA";
  const utcOffset = formatUtcOffset(brand?.timezone || "Africa/Lagos");

  return (
    <footer className="mt-20 border-t border-border pt-10">
      <div className="flex flex-wrap items-start justify-between gap-8">
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
        <Link href="/" className="soft-link text-sm">
          ← home
        </Link>
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
