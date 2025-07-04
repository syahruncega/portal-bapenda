import { fetchNews } from "@/lib/notion";
import BeritaTerbaruContent from "./content";

async function BeritaTerbaru() {
  const data = await fetchNews();
  return (
    <section id="Berita">
      <BeritaTerbaruContent data={data.results} />
    </section>
  );
}

export default BeritaTerbaru;
