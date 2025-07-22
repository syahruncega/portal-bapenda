import { Metadata } from "next";
import GalleryPreviewContent from "./components/home/gallery-preview/content";
import HeroContent from "./components/home/hero/content";
import Faq from "./components/home/faq";
import BeritaTerbaru from "./components/home/berita-terbaru";
import { getBeritas, getGaleris, getSliders } from "@/lib/strapi";
import SambutanContent from "./components/home/sambutan";

export const metadata: Metadata = {
  title: "Beranda | BAPENDA",
};

const Page = async () => {
  const sliders = await getSliders();
  const berita = await getBeritas();
  const galeri = await getGaleris();

  return (
    <main>
      <section id="Hero">
        <HeroContent data={sliders.data} />
      </section>

      <section id="Sambutan">
        <SambutanContent />
      </section>

      <section id="Berita" className="mt-30">
        <BeritaTerbaru data={berita.data} />
      </section>

      <section id="Geleri">
        <GalleryPreviewContent data={galeri.data} />
      </section>

      <Faq />
    </main>

    // Just for redeploy
  );
};

export default Page;
