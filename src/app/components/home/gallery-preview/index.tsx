import { getGaleri } from "@/lib/notion";
import GalleryPreviewContent from "./content";

async function GalleryPreview() {
  const data = await getGaleri();
  return (
    <section id="Galeri">
      <GalleryPreviewContent data={data.results} />
    </section>
  );
}

export default GalleryPreview;
