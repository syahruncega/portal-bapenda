import { getNotionPage, getSinglePageBySlug } from "@/lib/notion";
import SambutanContent from "./content";

async function SambutanSection() {
  const post = await getSinglePageBySlug("sambutan");

  const recordMap = await getNotionPage(post!.id);

  return (
    <section id="Sambutan">
      <SambutanContent post={post} recordMap={recordMap} />
    </section>
  );
}

export default SambutanSection;
