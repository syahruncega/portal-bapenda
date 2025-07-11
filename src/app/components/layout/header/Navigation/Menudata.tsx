import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "",
    children: [
      { label: "Kata Sambutan", href: "/p/kata-sambutan" },
      { label: "Struktur Organisasi", href: "/p/struktur-organisasi" },
      {
        label: "Tentang Bapenda",
        href: "",
        children: [
          { label: "Biografi Bapenda", href: "/p/biografi-bapenda" },
          {
            label: "Tugas Pokok dan Fungsi",
            href: "/p/tugas-pokok-dan-fungsi",
          },
          {
            label: "Logo Bapenda",
            href: "/p/logo-bapenda",
          },
          {
            label: "Maskot Bapenda",
            href: "/p/maskot-bapenda",
          },
        ],
      },
      { label: "Visi Misi", href: "/p/visi-misi" },

      { label: "Perencanaan", href: "/p/perencanaan" },
    ],
  },
  {
    label: "Berita",
    href: "",
    children: [
      { label: "Berita", href: "/berita" },
      { label: "Berita Video", href: "/berita-video" },
      { label: "Inforgrafis", href: "/infografis" },
      { label: "Galeri", href: "/galeri" },
    ],
  },
  {
    label: "Pelayanan",
    href: "",
    children: [
      { label: "Maklumat Pelayanan", href: "/p/maklumat-pelayanan" },
      { label: "Standar Pelayanan", href: "/p/standar-pelayanan" },
      { label: "Pengumuman", href: "/p/pengumuman" },
      { label: "pengaduan", href: "/p/pengaduan" },
    ],
  },
  {
    label: "Informasi PAD",
    href: "",
    children: [
      { label: "Pajak Daerah", href: "/p/pajak-daerah" },
      { label: "Retribusi Daerah", href: "/p/retribusi-daerah" },
      { label: "Peraturan", href: "/p/peraturan" },
      {
        label: "Keputusan Kepala Bapenda",
        href: "/p/keputusan-kepala-bapenda",
      },
      { label: "Laporan", href: "/p/laporan" },
      { label: "Tim Pembina Samsat", href: "/p/tim-pembina-samsat" },
    ],
  },
  {
    label: "Samsat",
    href: "",
    children: [
      { label: "Samsat Kab/Kota", href: "/p/samsat-kab-kota" },
      { label: "Samsat Keliling", href: "/p/samsat-keliling" },
      { label: "Samsat DriveThru", href: "/p/samsat-drive-thru" },
      { label: "Samsat Gendong", href: "/p/samsat-gendong" },
      { label: "Gerai Samsat", href: "/p/gerai-samsat" },
    ],
  },
  { label: "Cek Pajak Ranmor", href: "/p/cek-pajak-ranmor" },
  { label: "Pengaduan", href: "/p/pengaduan" },
  // { label: "Kebijakan Privasi", href: "/p/kebijakan-privasi" },
];
