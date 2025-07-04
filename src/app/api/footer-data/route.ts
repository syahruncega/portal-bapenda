import { NextResponse } from "next/server";

const footerData = {
  brand: {
    name: "Awake",
    tagline:
      "Selamat datang di website Badan Pendapatan Daerah Provinsi Sulawesi Tenggara. Website ini sebagai sarana publikasi untuk memberikan Informasi dan gambaran tentang aktivitas Badan Pendapatan Daerah Provinsi Sulawesi Tenggara dalam melaksanakan pelayanan publik di sektor pendapatan daerah.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/twitter.svg",
        dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
        link: "https://twitter.com",
      },
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://linkedin.com/in",
      },
      {
        icon: "/images/home/footerSocialIcon/dribble.svg",
        dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
        link: "https://dribbble.com",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://instagram.com",
      },
    ],
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "Contact us", url: "/contact" },
      { name: "About us", url: "/#aboutus" },
      { name: "Work", url: "/#work" },
      { name: "Services", url: "/#services" },
      { name: "Pricing", url: "/#pricing" },
    ],
  },
  otherPages: {
    name: "Halaman lain",
    links: [
      { name: "Pemprov Sulawesi Tenggara", url: "https://sultraprov.go.id" },
      { name: "SP4N Lapor", url: "https://lapor.go.id" },
      { name: "Sigap", url: "https://sigap.sultraprob.go.id" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  contactDetails: {
    name: "Kontak",
    address:
      "Jl. Haluoleo, Anduonohu, Poasia, Kota Kendari, Sulawesi Tenggara 93231",
    email: "bapenda@sultraprov.go.id",
    phone: "+62 811 4020 5527",
  },
  copyright: "©2025 Awake. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
