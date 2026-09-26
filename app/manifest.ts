import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Keeway Srbija", short_name: "Keeway", description: "Keeway motocikli, skuteri, dodatna oprema, prodajna mesta i servisi u Srbiji.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#F54308", lang: "sr-RS", icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] };
}
