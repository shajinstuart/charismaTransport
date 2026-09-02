import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center py-28">
      <Seo title="Page not found" path="/404" />
      <div className="container-page text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl text-navy">Page not found</h1>
        <p className="mt-3 text-navy/70">The page you requested is not available.</p>
        <Link to="/" className="btn-navy mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
