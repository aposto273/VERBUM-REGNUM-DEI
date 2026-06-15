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
        "Melakukan pengembangan penelitian dan publikasi dalam bidang pemuridan sesuai kebutuhan gereja, sekolah, dan masyarakat.",
    },
    {
      icon: HandHeart,
      title: "Pengabdian Masyarakat",
      description:
        "Melakukan pengabdian kepada masyarakat sebagai penerapan dan pengembangan ilmu pemuridan bagi gereja, sekolah, dan masyarakat Indonesia.",
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Berakar pada Firman Tuhan",
      description:
        "Membangun kehidupan dan pelayanan berdasarkan kebenaran Alkitab.",
      emoji: "📖",
    },
    {
      icon: Heart,
      title: "Bertumbuh dalam Karakter Kristus",
      description:
        "Mengembangkan integritas, spiritualitas, dan kedewasaan iman.",
      emoji: "🙏",
    },
    {
      icon: Users,
      title: "Hidup dalam Komunitas Pemuridan",
      description:
        "Belajar, bertumbuh, dan melayani bersama dalam kasih Kristus.",
      emoji: "🤝",
    },
    {
      icon: Globe,
      title: "Berdampak bagi Gereja dan Bangsa",
      description:
        "Menghadirkan transformasi melalui pelayanan yang relevan dan kontekstual.",
      emoji: "🌍",
    },
  ];

  return (
    <section
      id="visimisi"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />

      {/* Blur Kiri Atas */}
      <div className="absolute top-20 -left-32 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-3xl" />

      {/* Blur Kanan Tengah */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-sky-400/20 rounded-full blur-3xl" />

      {/* Blur Tengah Bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
            Visi, Misi & Nilai-Nilai
          </span>

          <p className="mt-4 text-slate-600">
            Berlandaskan Firman Tuhan dan berfokus pada pemuridan untuk melayani
            gereja, masyarakat, dan bangsa.
          </p>
        </div>

        {/* VISI */}
        <div className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8" />
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
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
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
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{value.emoji}</div>

                <h4 className="font-bold text-slate-900 mb-3">{value.title}</h4>

                <p className="text-slate-600 leading-relaxed text-sm">
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
