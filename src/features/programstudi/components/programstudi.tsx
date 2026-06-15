import {
  GraduationCap,
  Church,
  BookOpen,
  Globe,
  Users,
  PenSquare,
} from "lucide-react";

const careers = [
  {
    title: "Pendeta & Pelayan Gereja",
    icon: Church,
  },
  {
    title: "Pembina Pemuridan",
    icon: Users,
  },
  {
    title: "Penginjil & Misionaris",
    icon: Globe,
  },
  {
    title: "Guru Pendidikan Agama Kristen",
    icon: BookOpen,
  },
  {
    title: "Penulis & Peneliti Kristen",
    icon: PenSquare,
  },
  {
    title: "Pemimpin Pelayanan Kristen",
    icon: GraduationCap,
  },
];

export const ProgramStudiSection = () => {
  return (
    <section
      id="programstudi"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium text-blue-100">
            Program Studi
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Sarjana Teologi (S.Th.)
          </h2>

          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed">
            Program Sarjana Teologi dirancang untuk mempersiapkan lulusan yang
            memiliki kompetensi akademik, spiritual, dan praktis dalam pelayanan
            Kristen, serta mampu menjadi pemimpin yang berdampak bagi gereja,
            masyarakat, dan bangsa.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-blue-500/20 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-blue-200" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Program Sarjana Teologi
              </h3>

              <p className="mt-4 text-blue-100/80 leading-relaxed">
                Program ini berfokus pada pembentukan pelayan Tuhan yang
                memiliki pemahaman Alkitab yang kokoh, karakter yang serupa
                Kristus, serta kemampuan melayani secara efektif dalam gereja,
                pendidikan Kristen, pelayanan misi, dan berbagai bidang
                pelayanan lainnya.
              </p>
            </div>
          </div>
        </div>

        {/* Profil Lulusan */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white">
            Profil Lulusan
          </h3>

          <p className="text-center text-blue-100/70 mt-4 max-w-2xl mx-auto">
            Lulusan dipersiapkan untuk melayani dalam berbagai bidang pelayanan,
            pendidikan, pemuridan, penelitian, dan penginjilan.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => {
              const Icon = career.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    hover:bg-white/10
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">
                    <Icon className="text-blue-200" />
                  </div>

                  <h4 className="font-bold text-white text-lg">
                    {career.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold text-white">
            Status Program Studi
          </h3>

          <p className="mt-6 text-blue-100/80 leading-relaxed max-w-4xl mx-auto">
            STT VERBUM REGNUM DEI saat ini sedang dalam proses pengajuan izin
            penyelenggaraan Program Studi Sarjana Teologi (S.Th.) sesuai dengan
            ketentuan yang berlaku. Kami berkomitmen untuk menyelenggarakan
            pendidikan teologi yang berkualitas, berintegritas, dan berorientasi
            pada pemuridan guna mempersiapkan generasi pelayan Tuhan yang siap
            melayani gereja dan masyarakat Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
};
