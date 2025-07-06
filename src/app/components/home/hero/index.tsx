import { getSlider } from "@/lib/notion";
import HeroContent from "./content";

async function BeritaTerbaru() {
  const data = await getSlider();
  return (
    <section id="Hero">
      <HeroContent data={data.results} />
    </section>
  );
}

export default BeritaTerbaru;
