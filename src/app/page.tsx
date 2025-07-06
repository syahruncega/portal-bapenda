import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Solutions from "./components/home/solution";
import GalleryPreview from "./components/home/gallery-preview";
import BeritaTerbaru from "./components/home/berita-terbaru";
import SambutanSection from "./components/home/sambutan";

export const metadata: Metadata = {
  title: "Beranda | BAPENDA",
};

export default async function Home() {
  return (
    <main>
      <HeroSection />

      <SambutanSection />

      <BeritaTerbaru />

      <GalleryPreview />

      <Faq />

      <Solutions />
    </main>
  );
}
