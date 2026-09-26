export const SITE_NAME = "Keeway Srbija";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keeway.rs").replace(/\/$/, "");
export const DEFAULT_DESCRIPTION = "Zvanična Keeway Srbija stranica. Otkrijte Keeway motocikle i skutere, specifikacije, dodatnu opremu, ovlašćene prodavce i servisnu mrežu u Srbiji.";
export function absoluteUrl(pathname = "/") { return new URL(pathname, `${SITE_URL}/`).toString(); }
export function truncateDescription(value: string, maxLength = 160) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length <= maxLength ? normalized : `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
