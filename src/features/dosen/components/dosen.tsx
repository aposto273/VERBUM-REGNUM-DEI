import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const lecturers = [
  {
    name: "Dr. Dony Effendi Kurniawan, S.Th., M.Th.",
    position: "Ketua Sekolah Tinggi Teologi VERBUM REGNUM DEI",
    image: "/dosen/dony.png",
    expertise: [
      "Kepemimpinan Pendidikan Tinggi Teologi",
      "Pengembangan Strategis Institusi",
      "Kepemimpinan Kristen dan Pelayanan Gereja",
    ],
  },
];

const dosen = [
  {
    name: "Billy Steven Kaitjily, M.Th.",
    position: "Dosen",
    image: "/dosen/billy.png",
    expertise: ["Studi Biblika", "Perjanjian Baru", "Pemuridan"],
  },
  {
    name: "Noferius Waruwu, M.Pd.",
    position: "Dosen",
    image: "/dosen/noferius.png",
    expertise: [
      "Pendidikan Kristen",
      "Kurikulum dan Pembelajaran",
      "Pengembangan Karakter",
    ],
  },
  {
    name: "Ekker Saogo, M.Th.",
    position: "Dosen",
    image: "/dosen/ekker.png",
    expertise: ["Pembinaan Jemaat", "Kepemimpinan Kristen", "Teologi Praktika"],
  },
];

export const Dosen = () => {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section
      id="dosen"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0B1F3A]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#C9A227]/20
              bg-[#C9A227]/10
              px-4 py-2
              text-sm
              font-medium
              text-[#C9A227]
            "
          >
            Tenaga Pendidik
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            <span className="block text-[#C9A227]">VERBUM REGNUM DEI</span>
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-6 rounded-full" />

          <p className="mt-6 text-slate-600 leading-relaxed">
            VERBUM REGNUM DEI didukung oleh tenaga pendidik yang memiliki
            kompetensi akademik dan pengalaman pelayanan untuk mendukung
            penyelenggaraan Program Studi Sarjana Teologi.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CardContent>
            {lecturers.map((lecturer) => (
              <CarouselItem key={lecturer.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <CarouselItem key={lecturer.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
                          {/* FOTO */}
                          <div className="aspect-[599/768] lg:h-[550px] ">
                            <img
                              src={lecturer.image}
                              alt={lecturer.name}
                              className="
                                w-full
                                h-full
                                lg:w-[350px]
                                lg:object-cover                              "
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="flex flex-col p-6 md:p-8 lg:p-14">
                            {lecturer.position && (
                              <span
                                className="
                                inline-flex
                                w-fit
                                px-4 py-2
                                rounded-full
                                bg-[#C9A227]/10
                                text-[#C9A227]
                                border
                                border-[#C9A227]/20
                                text-sm
                                font-medium
                                "
                              >
                                {lecturer.position}
                              </span>
                            )}

                            <h3 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1F3A] leading-tight">
                              {lecturer.name}
                            </h3>

                            <div className="w-24 h-[3px] bg-[#C9A227] mt-6 mb-8 rounded-full" />

                            {/* <p className="text-slate-600 leading-relaxed text-lg">
                              Memiliki kompetensi akademik dan pengalaman
                              pelayanan dalam bidang teologi serta pemuridan
                              untuk mendukung pembentukan pelayan Tuhan yang
                              berintegritas dan berdampak bagi gereja maupun
                              masyarakat.
                            </p> */}

                            {/* KEAHLIAN */}
                            <div className="mt-10">
                              <div className="flex items-center gap-2 mb-5">
                                <Award className="w-5 h-5 text-[#C9A227]" />

                                <span className="font-semibold text-[#0B1F3A]">
                                  Bidang Keahlian
                                </span>
                              </div>

                              <div className="grid sm:grid-cols-3 gap-3">
                                {lecturer.expertise.map((skill) => (
                                  <div
                                    key={skill}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-slate-200
                                        p-4
                                        bg-slate-50
                                        "
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#C9A227]" />

                                    <span className="text-[#0B1F3A] font-medium">
                                      {skill}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </CarouselItem>
                </motion.div>
              </CarouselItem>
            ))}
          </CardContent>
        </Carousel>
        <CardContent className="py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dosen.map((dosen) => (
              <div
                key={dosen.name}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={dosen.image}
                    alt={dosen.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#0B1F3A]">
                    {dosen.name}
                  </h3>

                  {dosen.position && (
                    <p className="mt-2 text-sm text-[#C9A227]">
                      {dosen.position}
                    </p>
                  )}

                  <div className="mt-10">
                    <div className="flex items-center gap-2 mb-5">
                      <Award className="w-5 h-5 text-[#C9A227]" />

                      <span className="font-semibold text-[#0B1F3A]">
                        Bidang Keahlian
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-1 gap-3">
                      {dosen.expertise.map((skill) => (
                        <div
                          key={skill}
                          className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-slate-200
                                        p-4
                                        bg-slate-50
                                        "
                        >
                          <div className="w-2 h-2 rounded-full bg-[#C9A227]" />

                          <span className="text-[#0B1F3A] font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </section>
  );
};
