import { getSliders } from "@/lib/strapi";
import HeroContent from "./content";

async function BeritaTerbaru() {
  const slider = await getSliders();
  return (
    <section id="Hero">
      <HeroContent data={slider.data} />
    </section>
  );
}

export default BeritaTerbaru;
