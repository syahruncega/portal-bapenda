/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

function Faq() {
  const [faqList, setfaqList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setfaqList(data?.faqList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-md text-center mx-auto">
              <h2>
                {"Pertanyaan yang sering "}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  ditanyakan
                </span>
              </h2>
            </div>
            <div className="flex flex-col">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                <AccordionItem
                  value={`item-1`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {"Di mana saya dapat melakukan pengaduan?"}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      {
                        "Silakan ke Menu Pelayanan, pilih pengaduan dan anda akan masuk ke dalam halaman pengaduan. Silahkan isi form pengaduan dan kirim"
                      }
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={`item-2`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {
                        "Apa saja persyaratan pengurusan pengesahan Kendaraan Bermotor?"
                      }
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      1. STNK asli
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      2. Bukti pelunasan PKB / BBN-KB dan SWDKLLJ tahun terakhir
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      3. Identitas
                      <div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          a. Perorangan: Tanda jati diri yang sah (KTP, SIM &
                          Pasport Asli) bagi yang berhalangan melampirkan surat
                          kuasa
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          b. Badan Hukum: SIUP dan NPWP, keterangan domisili,
                          surat kuasa bermaterai cukup dan ditandatangani oleh
                          pimpinan serta dibubuhi cap Badan hukum yang
                          bersangkutan.
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          c. Instansi Pemerintah (termasuk BUMN & BUMD): Surat
                          tugas/surat kuasa bermaterai dan ditandatangani oleh
                          pimpinan serta dibubuhkan cap instansi terkait
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={`item-3`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {
                        "Apa saja persyaratan pengurusan perpanjangan ganti Plat dan STNK?"
                      }
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      1. Mengisi formulir Permohonan
                    </div>

                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      2. Identitas
                      <div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          a. Perorangan: Tanda jati diri yang sah (KTP, SIM &
                          Pasport Asli) bagi yang berhalangan melampirkan surat
                          kuasa
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          b. Badan Hukum: SIUP dan NPWP, keterangan domisili,
                          surat kuasa bermaterai cukup dan ditandatangani oleh
                          pimpinan serta dibubuhi cap Badan hukum yang
                          bersangkutan.
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          c. Instansi Pemerintah (termasuk BUMN & BUMD): Surat
                          tugas/surat kuasa bermaterai dan ditandatangani oleh
                          pimpinan serta dibubuhkan cap instansi terkait
                        </div>
                      </div>
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      3. STNK asli
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      4. Fotocopy BPKB
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      5. Surat keterangan apabila BPKP dalam agunan / jaminan
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      6. Bukti pelunasan PKB / BBN-KB dan SWDKLLJ tahun terakhir
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      7. Cek fisik kendaraan bermotor
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={`item-4`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {"Apa saja persyaratan balik nama kendaraan bermotor?"}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      1. Mengisi formulir Permohonan
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      2. STNK asli
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      3. BPKB asli
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      4. Bukti pelunasan PKB / BBN-KB dan SWDKLLJ tahun terakhir
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      5. Cek fisik kendaraan bermotor
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      6. Identitas
                      <div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          a. Perorangan: Tanda jati diri yang sah (KTP, SIM &
                          Pasport Asli) bagi yang berhalangan melampirkan surat
                          kuasa
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          b. Badan Hukum: SIUP dan NPWP, keterangan domisili,
                          surat kuasa bermaterai cukup dan ditandatangani oleh
                          pimpinan serta dibubuhi cap Badan hukum yang
                          bersangkutan.
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          c. Instansi Pemerintah (termasuk BUMN & BUMD): Surat
                          tugas/surat kuasa bermaterai dan ditandatangani oleh
                          pimpinan serta dibubuhkan cap instansi terkait
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={`item-5`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {"Apa saja persyaratan penggantian STNK rusak/hilang?"}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      1. Mengisi formulir permohonan
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      2. Surat keterangan hilang dari kepolisian
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      3. BPKB asli
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      4. Bukti pelunasan PKB / BBN-KB dan SWDKLLJ tahun terakhir
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      5. Surat pernyataan bermaterai
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      6. Cek fisik kendaraan bermotor
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      7. Identitas
                      <div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          a. Perorangan: Tanda jati diri yang sah (KTP, SIM &
                          Pasport Asli) bagi yang berhalangan melampirkan surat
                          kuasa
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          b. Badan Hukum: SIUP dan NPWP, keterangan domisili,
                          surat kuasa bermaterai cukup dan ditandatangani oleh
                          pimpinan serta dibubuhi cap Badan hukum yang
                          bersangkutan.
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          c. Instansi Pemerintah (termasuk BUMN & BUMD): Surat
                          tugas/surat kuasa bermaterai dan ditandatangani oleh
                          pimpinan serta dibubuhkan cap instansi terkait
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={`item-6`}
                  className="p-6 border border-dark_black/10 dark:border-white/50 group"
                >
                  <AccordionTrigger className="group-hover:cursor-pointer">
                    <h4 className="text-dark_black dark:text-white/80">
                      {"Apa saja persyaratan pengurusan kendaraan baru?"}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      1. Mengisi formulir permohonan
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      2. Faktur pembelian
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      3. Sertifikat NIK
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      4. Cek fisik kendaraan bermotor
                    </div>
                    <div className="text-base font-normal text-dark_black/60 dark:text-white/60">
                      5. Identitas
                      <div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          a. Perorangan: Tanda jati diri yang sah (KTP, SIM &
                          Pasport Asli) bagi yang berhalangan melampirkan surat
                          kuasa
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          b. Badan Hukum: SIUP dan NPWP, keterangan domisili,
                          surat kuasa bermaterai cukup dan ditandatangani oleh
                          pimpinan serta dibubuhi cap Badan hukum yang
                          bersangkutan.
                        </div>
                        <div className="pl-5 text-base font-normal text-dark_black/60 dark:text-white/60">
                          c. Instansi Pemerintah (termasuk BUMN & BUMD): Surat
                          tugas/surat kuasa bermaterai dan ditandatangani oleh
                          pimpinan serta dibubuhkan cap instansi terkait
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
