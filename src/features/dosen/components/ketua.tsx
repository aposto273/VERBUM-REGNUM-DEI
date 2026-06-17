import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const lecturer = {
  name: "Dr. Dony Effendi Kurniawan, S.Th., M.Th.",
  position: "KETUA VERBUM REGNUM DEI",
  image: "/dosen/dony.png",
  expertise: [
    "Kepemimpinan Pendidikan Tinggi Teologi",
    "Pengembangan Strategis Institusi",
    "Kepemimpinan Kristen dan Pelayanan Gereja",
  ],
};

export function Ketua() {
  return (
    <section className="relative overflow-hidden pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white lg:rounded-[40px]">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
              <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-10">
                <div className="absolute h-52 w-52 rounded-full bg-[#C9A227]/10 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72" />{" "}
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#C9A227]/20 to-transparent blur-xl" />

                  <img
                    src={lecturer.image}
                    alt={lecturer.name}
                    className="relative w-full max-w-[220px] rounded-3xl object-cover shadow-2xl sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:items-start lg:p-14">
                <span className="mt-3 inline-flex rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10 px-4 py-2 text-sm font-medium text-[#C9A227]">
                  {lecturer.position}
                </span>
                <h2 className="mt-5 max-w-2xl text-2xl leading-tight font-bold tracking-tight text-[#102548] sm:text-2xl lg:text-3xl">
                  {lecturer.name}
                </h2>

                <div className="mt-7 h-[3px] w-24 rounded-full bg-[#C9A227]" />

                <div className="mt-10">
                  <div className="mb-5 flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#C9A227]" />

                    <span className="font-semibold text-[#0B1F3A]">
                      Bidang Keahlian
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {lecturer.expertise.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#C9A227]" />

                        <span className="font-medium text-[#0B1F3A]">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
