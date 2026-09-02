import { Helmet } from "react-helmet-async";
import { contactInfo, socialLinks } from "../config/contact";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contactInfo.companyName,
    description:
      "Travel company providing student package trips, devotional trips and marriage trips with 16, 21, 34, 37, 38, 46 and 51 pushback seater AC/NON AC tourist buses for rent.",
    url: contactInfo.domain,
    email: contactInfo.email,
    telephone: `+91${contactInfo.phone}`,
    founder: {
      "@type": "Person",
      name: contactInfo.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "24-21 Beula Cottage, Kanjankadu, Manalikarai Post",
      addressLocality: "Nagercoil",
      addressRegion: "Tamil Nadu",
      postalCode: "629164",
      addressCountry: "IN",
    },
    areaServed: "India",
    sameAs: [socialLinks.instagram, socialLinks.facebook].filter(Boolean),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
