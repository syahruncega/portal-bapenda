import { NextResponse } from "next/server";
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  news,
} from "@/app/types/menu";

const avatarList: avatar[] = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const brandList: brand[] = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

const innovationList: innovation[] = [
  {
    image: "/images/home/innovation/brand.svg",
    title: "Brand\nStrategy",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/innovation/digitalmarketing.svg",
    title: "Digital\nMarketing",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/innovation/uiux.svg",
    title: "UI/UX\nDesign",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    image: "/images/home/innovation/analitics.svg",
    title: "Analytics &\nReporting",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
  {
    image: "/images/home/innovation/webdevp.svg",
    title: "Web\nDevelopment",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
];

const onlinePresenceList: onlinePresence[] = [
  {
    image: "/images/home/onlinePresence/online_img_1.jpg",
    title: "Hindari data Ranmor dihapuskan",
    tag: ["UX Research", "Interface Design"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_2.jpg",
    title: "Standar Pelayanan Samsat Kota Kendari",
    tag: ["Product Design", "Interaction Design"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    title: "Survei Kepuasan Masyarakat",
    tag: ["Brand identity design", "UX Research"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    title: "Pendanda tanganan MOU Samsat SIGNAL",
    tag: ["Visual Storytelling", "Web & Mobile Design"],
    link: "https://www.wrappixel.com/",
  },
];

const creativeMindList: creativeMind[] = [
  {
    image: "/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    position: "WordPress Developer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    position: "Social Media Specialist",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    position: "Product Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    position: "UI Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
];

const WebResultTagList: WebResultTag[] = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Creativity",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Innovation",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Strategy",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Starter",
    plan_descp: "For companies who need design support. One request at a time",
    plan_price: "$2500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Design Updates Every 2 Days",
      "Mid-level Designer",
      "SEO optimization",
      "Monthly analytics",
      "2x Calls Per Month",
      "License free assets",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Pro",
    plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
    plan_price: "$3800",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Design Updates Daily",
      "Senior-level Designer",
      "AI Advisory Framework",
      "Full-service Creative Team",
      "4x Calls Per Month",
      "License free assets",
    ],
  },
];

const faqList: faq[] = [
  {
    faq_que: "Di mana saya dapat melakukan pengaduan?",
    faq_ans:
      "Silakan ke Menu Pelayanan, pilih pengaduan dan anda akan masuk ke dalam halaman pengaduan. Silahkan isi form pengaduan dan kirim.",
  },
  {
    faq_que: "Apa saja persyaratan pengurusan pengesahan kendaraan bermotor?",
    faq_ans: `1. STNK asli \n
      2. Bukti pelunasan PKB / BBN-KB dan SWDKLLJ tahun terakhir`,
  },
  {
    faq_que:
      "Apa saja persyaratan pengurusan perpanjangan ganti Plat dan STNK?",
    faq_ans:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    faq_que: "Apa saja persyaratan Balik Nama Kendaraan Bermotor?",
    faq_ans:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    faq_que: "Apa saja persyaratan penggantian STNK rusak/hilang?",
    faq_ans:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    faq_que: "Apa saja persyaratan pengurusan kendaraan baru?",
    faq_ans:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
];

const newsList: news[] = [
  {
    cover:
      "https://bapenda.sultraprov.go.id/upload/news/thumbnailnews-20220829003515.jpeg",
    sub_title: "Framer Awards",
    title: "Survey Kepuasan Masyarakat (SKM)",
    year: "12 Juni 2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    cover:
      "https://bapenda.sultraprov.go.id/upload/news/thumbnailnews-20220829002238.jpeg",
    sub_title: "Dribbble Awards",
    title: "Laporan Forum Konsultasi Publik",
    year: "13 Juni 2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    cover:
      "https://bapenda.sultraprov.go.id/upload/news/thumbnailnews-20210701220111.jpg",
    sub_title: "awwwards Awards",
    title:
      "Percepatan Optimaolisasi Pendapatan Pajak Kendaraan Bermotor dan Bea Balik Nama Kendaraan Bermotor",
    year: "14 Juni 2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    newsList,
  });
};
