import { Helmet } from "react-helmet-async";
import { contactInfo } from "../config/contact";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Seo({ title, description, path = "/" }: SeoProps) {
  const pageTitle = title
    ? `${title} | ${contactInfo.companyName}`
    : `${contactInfo.companyName} | Tourist Bus Rental & Travel Services`;

  const desc =
    description ??
    "Charisma Transport provides tourist bus rental for student, devotional, marriage and group trips from Kanyakumari District, Tamil Nadu. AC and Non-AC push-back seater buses. Travel throughout India.";

  const url = `${contactInfo.domain}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={contactInfo.companyName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
