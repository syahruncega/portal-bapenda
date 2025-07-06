import { getBerita } from "@/lib/notion";
import BeritaTerbaruContent from "./content";

async function BeritaTerbaru() {
  const data = await getBerita();
  return (
    <section id="Berita">
      <BeritaTerbaruContent data={data.results} />
    </section>
  );
}

export default BeritaTerbaru;
