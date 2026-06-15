import { BookOpen, Landmark } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
            Filosofi Nama
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            VERBUM REGNUM DEI
          </h2>

          <p className="mt-4 text-slate-600">
            Sebuah nama yang menjadi dasar identitas, visi, dan panggilan
            pelayanan VERBUM REGNUM DEI.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-10 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Firman Kerajaan Allah</h3>
              </div>

              <blockquote className="text-3xl md:text-4xl font-bold leading-tight">
                “Verbum Regnum Dei”
              </blockquote>

              <p className="mt-6 text-blue-100 leading-relaxed">
                Verbum berarti Firman dan Regnum Dei berarti Kerajaan Allah.
                Kedua kata ini menjadi landasan bagi seluruh proses pendidikan,
                pemuridan, dan pelayanan yang diselenggarakan oleh VERBUM REGNUM
                DEI.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm backdrop-blur">
                  Firman Tuhan
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-sm backdrop-blur">
                  Pemuridan
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-sm backdrop-blur">
                  Kerajaan Allah
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="text-blue-600" />
                <h3 className="font-semibold text-lg">Makna Filosofis</h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Makna ini mencerminkan komitmen VERBUM REGNUM DEI untuk
                menjadikan Firman Tuhan sebagai fondasi utama dalam pendidikan,
                pemuridan, penelitian, dan pelayanan Kristen.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Komitmen Kami</h3>

              <p className="text-slate-600 leading-relaxed">
                Kami percaya bahwa pendidikan teologi bukan hanya proses
                akademik, tetapi perjalanan pemuridan yang membentuk karakter,
                spiritualitas, dan kepemimpinan Kristen yang berintegritas.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="font-semibold text-blue-900 mb-3">
                Visi yang Dihidupi
              </h3>

              <p className="text-blue-800 leading-relaxed">
                Menghadirkan nilai-nilai Kerajaan Allah melalui pendidikan
                teologi yang berkualitas, pemuridan yang berkelanjutan, dan
                pelayanan yang berdampak bagi gereja, masyarakat, dan bangsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
