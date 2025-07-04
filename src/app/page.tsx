import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Solutions from "./components/home/solution";
import GalleryPreview from "./components/home/gallery-preview";
import BeritaTerbaru from "./components/home/berita-terbaru";

export const metadata: Metadata = {
  title: "Beranda | BAPENDA",
};

export default async function Home() {
  return (
    <main>
      <HeroSection />

      <BeritaTerbaru />

      <GalleryPreview />

      <Faq />

      <Solutions />
    </main>
  );
}
