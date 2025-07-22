export async function getBeritas() {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/beritas?sort[0]=createdAt:desc&populate=cover`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}

export async function getBeritaBySlug(slug: string) {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/beritas?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}

export async function getSliders() {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/sliders?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}

export async function getGaleris() {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/galeris?sort[0]=createdAt:desc&populate=cover`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}

export async function getGaleriBySlug(slug: string) {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/galeris?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data;
}
