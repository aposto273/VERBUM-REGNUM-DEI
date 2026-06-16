import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const phone = "6285693129534"; // GANTI NOMOR KAMU
  const message = encodeURIComponent("");

  const waLink = `https://wa.me/${phone}?text=${message}`;
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2E6D] to-[#030712]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-400/15 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="animate-[fadeUp_0.8s_ease-out] inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 backdrop-blur px-4 py-2 text-sm text-amber-200">
              Sekolah Tinggi Teologi
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                VERBUM REGNUM DEI
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-slate-100 font-semibold">
              Mempersiapkan Generasi Pelayan Tuhan yang Memuridkan Bangsa
            </h2>

            <div className="relative mt-8 lg:hidden  animate-[fadeUp_0.8s_ease-out]">
              <div className="absolute -inset-4 rounded-[32px] bg-amber-400/20 blur-2xl" />

              <div className="absolute top-4 left-4 z-20 rounded-[0.5rem] bg-white/95 px-4 py-2 shadow-xl">
                <span className="text-xs font-semibold text-amber-600 ">
                  📖 Sarjana Teologi (S.Th.)
                </span>
              </div>

              <img
                src="/kampus.png"
                alt="STT Verbum Regnum Dei"
                className="relative w-full h-[280px] object-cover rounded-[28px] shadow-2xl"
              />

              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#081F4D]/80 via-[#081F4D]/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-semibold">
                  Sekolah Tinggi Teologi Verbum Regnum Dei
                </p>

                <p className="text-white/80 text-sm mt-1">
                  Membentuk Murid Kristus yang Memuridkan
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg text-slate-200 leading-relaxed">
              VERBUM REGNUM DEI hadir dengan kerinduan untuk mempersiapkan
              generasi pelayan Tuhan yang memiliki pemahaman Alkitab yang kokoh,
              karakter yang serupa Kristus, dan komitmen untuk memuridkan
              bangsa.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Kami percaya bahwa pendidikan teologi bukan sekadar proses
              akademik, melainkan perjalanan pemuridan yang membentuk kehidupan,
              pelayanan, dan kepemimpinan Kristen yang berintegritas.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4 ">
              <Button
                size="lg"
                className="
                  bg-gradient-to-r
                  from-amber-500
                  to-yellow-600
                  hover:from-amber-600
                  hover:to-yellow-700
                  text-slate-950
                  font-semibold
                "
              >
                <a href="#about" className="flex text-white items-center gap-2">
                  Tentang Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                className="
                  border-amber-300/40
                  bg-white/5
                  text-white
                  hover:bg-white
                  hover:text-slate-900
                "
                asChild
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>

            {/* Values */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-100">
              <div>📖 Berakar pada Firman</div>
              <div>🙏 Karakter Kristus</div>
              <div>🌍 Memuridkan Bangsa</div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* MOBILE IMAGE */}

            {/* DESKTOP IMAGE */}
            <div className="relative hidden lg:block animate-[fadeUp_0.8s_ease-out]">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-amber-400/20 blur-2xl" />

              {/* Top Floating Card */}
              <div className="absolute -left-8 top-10 z-20 bg-white rounded-2xl p-5 shadow-2xl border border-amber-100">
                <p className="text-xs text-slate-500">Program Studi</p>

                <h3 className="font-bold text-amber-700">
                  Sarjana Teologi (S.Th.)
                </h3>
              </div>

              {/* Main Image */}
              <img
                src="/kampus.png"
                alt="STT Verbum Regnum Dei"
                className="relative w-full h-[650px] object-cover rounded-[32px] shadow-2xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#081F4D]/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-bold">
                  Kampus Pemuridan
                </h3>

                <p className="text-white/80 mt-2">
                  Berakar pada Firman • Bertumbuh dalam Kristus • Memuridkan
                  Bangsa
                </p>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
