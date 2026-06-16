import {
  GraduationCap,
  Church,
  BookOpen,
  Globe,
  Users,
  PenSquare,
} from "lucide-react";

const careers = [
  { title: "Pendeta & Pelayan Gereja", icon: Church },
  { title: "Pemuridan", icon: Users },
  { title: "Penginjil & Misionaris", icon: Globe },
  { title: "Guru Pendidikan Agama Kristen", icon: BookOpen },
  { title: "Penulis & Peneliti Kristen", icon: PenSquare },
  { title: "Pemimpin Pelayanan Kristen", icon: GraduationCap },
];

export const ProgramStudiSection = () => {
  return (
    <section
      id="programstudi"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#081F4D] via-[#0B2E6D] to-[#030712]"
    >
      {/* GOLD + BLUE GLOW */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            Program Studi
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Sarjana Teologi (S.Th.)
          </h2>

          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed">
            Program Sarjana Teologi dirancang untuk mempersiapkan lulusan yang
            memiliki kompetensi akademik, spiritual, dan praktis dalam pelayanan
            Kristen, serta menjadi pemimpin yang berdampak bagi gereja dan
            bangsa.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-amber-400/20 flex items-center justify-center border border-amber-400/30">
              <GraduationCap className="w-10 h-10 text-amber-300" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Program Sarjana Teologi
              </h3>

              <p className="mt-4 text-blue-100/80 leading-relaxed">
                Program ini berfokus pada pembentukan pelayan Tuhan yang
                memiliki pemahaman Alkitab yang kokoh, karakter yang serupa
                Kristus, serta kemampuan melayani secara efektif dalam gereja,
                pendidikan Kristen, dan pelayanan misi.
              </p>
            </div>
          </div>
        </div>

        {/* CAREERS */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white">
            Profil Lulusan
          </h3>

          <p className="text-center text-blue-100/70 mt-4 max-w-2xl mx-auto">
            Lulusan dipersiapkan untuk melayani dalam berbagai bidang pelayanan
            dan pemuridan.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => {
              const Icon = career.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    hover:border-amber-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 flex items-center justify-center mb-5 border border-amber-400/20">
                    <Icon className="text-amber-300" />
                  </div>

                  <h4 className="font-bold text-white text-lg">
                    {career.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-24 rounded-3xl border border-amber-400/20 bg-white/5 backdrop-blur-xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-amber-400/10 blur-3xl rounded-full" />

          <h3 className="text-2xl font-bold text-white">
            Status Program Studi
          </h3>

          <p className="mt-6 text-blue-100/80 leading-relaxed max-w-4xl mx-auto">
            STT VERBUM REGNUM DEI saat ini sedang dalam proses pengajuan izin
            penyelenggaraan Program Studi Sarjana Teologi (S.Th.). Kami
            berkomitmen menyelenggarakan pendidikan teologi yang berkualitas,
            berintegritas, dan berorientasi pada pemuridan untuk mempersiapkan
            generasi pelayan Tuhan bagi gereja dan bangsa Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
};
