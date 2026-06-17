import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Award } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const waket = [
  {
    name: "Dr. Fery Rondonuwu M.Th",
    position: "Wakil Ketua I Bidang Akademis",
    image: "/waket/fery.png",
    expertise: [
      "Pendidikan Teologi",
      "Kurikulum dan Pembelajaran",
      "Manajemen Akademik",
    ],
  },
  {
    name: "Dian Laurenza, S.Pd",
    position: "Wakil Ketua II Bidang Keuangan",
    image: "/waket/dian.png",
    expertise: [
      "Pengelolaan Keuangan dan Anggaran",
      "Administrasi dan Tata Kelola Institusi",
      "Manajemen Aset dan Sumber Daya",
    ],
  },
  {
    name: "Dr. Albertus Kurniadi Saputro, SE., M.Si., M.Th.",
    position: "Wakil Ketua III Bidang Kemahasiswaan",
    image: "/waket/albertus.png",
    expertise: [
      "Kepemimpinan Pendidikan Tinggi Teologi",
      "Pengembangan Strategis Institusi",
      "Kepemimpinan Kristen dan Pelayanan Gereja",
    ],
  },
  {
    name: "Yordan Perutu, M.Th.",
    position: "Dosen",
    image: "/waket/yordan.png",
    expertise: [
      "Penginjilan dan Pemuridan",
      "Pertumbuhan Gereja",
      "Pelayanan Lintas Budaya",
      "Transformasi Masyarakat",
    ],
  },
  {
    name: "Guntar Tampubolon, M.Th.",
    position: "Dosen",
    image: "/waket/guntar.png",
    expertise: [
      "Teologi Perjanjian Baru",
      "Eksegesis Perjanjian Baru",
      "Hermeneutika Alkitab",
    ],
  },
  {
    name: "Billy Steven Kaitjily, M.Th.",
    position: "Dosen",
    image: "/dosen/billy.png",
    expertise: ["Studi Biblika", "Perjanjian Baru", "Pemuridan"],
  },

  {
    name: "Ekker Saogo, M.Th.",
    position: "Dosen",
    image: "/dosen/ekker.png",
    expertise: ["Pembinaan Jemaat", "Kepemimpinan Kristen", "Teologi Praktika"],
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
    name: "Dr. Valeria Sonata. S.Si., M.M., M.Th.",
    position: "Dosen Tidak Tetap",
    image: "/waket/valeria.png",
    expertise: [
      "Studi Intertestamental",
      "Yudaisme Bait Allah Kedua",
      "Eksposisi Injil dan KPR",
    ],
  },
  {
    name: "Ester Lorinsya Batee, S.Th.",
    position: "Staff",
    image: "/waket/ester.png",
    expertise: [],
  },
  {
    name: "Femmy Dwi Hardianti",
    position: "Staff",
    image: "/waket/femmy.png",
    expertise: [],
  },
];

export const Waket = () => {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  return (
    <div>
      {" "}
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {waket.map((waket) => (
            <CarouselItem
              key={waket.name}
              className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* FOTO */}
                <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={waket.image}
                    alt={waket.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0B1F3A]">
                      {waket.name}
                    </h3>

                    {waket.position && (
                      <span className="mt-3 inline-flex rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10 px-4 py-2 text-sm font-medium text-[#C9A227]">
                        {waket.position}
                      </span>
                    )}
                  </div>

                  {waket.expertise?.length > 0 && (
                    <div className="mt-8">
                      <div className="mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#C9A227]" />
                        <span className="font-semibold text-[#0B1F3A]">
                          Bidang Keahlian
                        </span>
                      </div>

                      <div className="space-y-3">
                        {waket.expertise.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-3 px-3"
                          >
                            <div className="h-2 w-2 rounded-full bg-[#C9A227]" />

                            <span className="text-sm font-medium text-[#0B1F3A]">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
