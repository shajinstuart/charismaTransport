import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Destinations } from "./pages/Destinations";
import { Fleet } from "./pages/Fleet";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Services } from "./pages/Services";
import { routerBasename } from "./lib/asset";

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
