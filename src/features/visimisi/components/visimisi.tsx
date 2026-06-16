import {
  Target,
  GraduationCap,
  BookOpen,
  HandHeart,
  Heart,
  Users,
  Globe,
} from "lucide-react";

export const VisiMisi = () => {
  const missions = [
    {
      icon: GraduationCap,
      title: "Pendidikan & Pengajaran",
      description:
        "Menyelenggarakan pendidikan dan pengajaran berbasis pemuridan bagi gereja, sekolah, dan masyarakat di seluruh Indonesia.",
    },
    {
      icon: BookOpen,
      title: "Penelitian & Publikasi",
      description:
        "Mengembangkan penelitian dan publikasi dalam bidang pemuridan sesuai kebutuhan gereja dan masyarakat.",
    },
    {
      icon: HandHeart,
      title: "Pengabdian Masyarakat",
      description:
        "Mengabdi kepada masyarakat melalui penerapan ilmu pemuridan yang relevan dan kontekstual.",
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Berakar pada Firman",
      description:
        "Membangun kehidupan dan pelayanan berdasarkan kebenaran Alkitab.",
      emoji: "📖",
    },
    {
      icon: Heart,
      title: "Karakter Kristus",
      description:
        "Mengembangkan integritas, spiritualitas, dan kedewasaan iman.",
      emoji: "🙏",
    },
    {
      icon: Users,
      title: "Komunitas Pemuridan",
      description:
        "Hidup, bertumbuh, dan melayani dalam komunitas yang saling membangun.",
      emoji: "🤝",
    },
    {
      icon: Globe,
      title: "Dampak bagi Bangsa",
      description:
        "Menghadirkan transformasi melalui pelayanan yang relevan bagi gereja dan masyarakat.",
      emoji: "🌍",
    },
  ];

  return (
    <section id="visimisi" className="relative overflow-hidden py-24 bg-white">
      {/* Soft Background Glow */}
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-800 px-4 py-2 text-sm font-medium border border-blue-100">
            Visi, Misi & Nilai-Nilai
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Membangun Generasi Pelayan Tuhan
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Berlandaskan Firman Tuhan dan berfokus pada pemuridan untuk melayani
            gereja, masyarakat, dan bangsa.
          </p>
        </div>

        {/* VISI */}
        <div className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-800 to-blue-900 p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-amber-300" />
              <h3 className="text-2xl font-bold">Visi</h3>
            </div>

            <blockquote className="text-2xl md:text-4xl font-bold leading-relaxed">
              “Menjadi Sekolah Tinggi Teologi yang unggul dalam Pemuridan Injili
              di Indonesia.”
            </blockquote>
          </div>
        </div>

        {/* MISI */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Misi
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 border border-blue-100">
                    <Icon className="text-blue-700" />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    {mission.title}
                  </h4>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* NILAI */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Nilai-Nilai Utama
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="text-3xl mb-4">{value.emoji}</div>

                <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
