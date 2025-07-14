import { Metadata } from "next";
import { getBerita, getGaleri, getSlider } from "@/lib/notion";
import GalleryPreviewContent from "./components/home/gallery-preview/content";
import HeroContent from "./components/home/hero/content";
import Faq from "./components/home/faq";
// import SambutanSection from "./components/home/sambutan";
import BeritaTerbaru from "./components/home/berita-terbaru";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Beranda | BAPENDA",
};

const Page = async () => {
  const slider = await getSlider();
  const berita = await getBerita();
  const galeri = await getGaleri();

  return (
    <main>
      <section id="Hero">
        <HeroContent data={slider.results} />
      </section>

      {/* <SambutanSection /> */}

      <section id="Berita" className="mt-30">
        <BeritaTerbaru data={berita.results} />
      </section>

      <section id="Geleri">
        <GalleryPreviewContent data={galeri.results} />
      </section>

      <Faq />
    </main>
  );
};

export default Page;
