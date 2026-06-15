import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const phone = "6285693129534"; // GANTI NOMOR KAMU
  const message = encodeURIComponent("");

  const waLink = `https://wa.me/${phone}?text=${message}`;
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-500/10 backdrop-blur px-4 py-2 text-sm text-blue-100">
              Sekolah Tinggi Teologi
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                VERBUM REGNUM DEI
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-blue-100 font-semibold">
              Mempersiapkan Generasi Pelayan Tuhan yang Memuridkan Bangsa
            </h2>

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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="#about" className="flex items-center gap-2">
                  Tentang Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-white border border-blue-200 text-blue-900 hover:bg-white hover:text-blue-900"
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
          <div className="relative ">
            {/* Floating Card 1 */}

            {/* Floating Card 2 */}
            <div className="absolute -right-8 bottom-10 z-20 bg-white rounded-2xl p-4 shadow-2xl hidden md:block">
              <p className="text-xs text-slate-500">Program Studi</p>
              <h3 className="font-bold text-blue-700">
                Sarjana Teologi (S.Th.)
              </h3>
            </div>

            {/* Main Image */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-[36px] bg-blue-500/20 blur-xl" />

              <img
                src="/kampus.png"
                alt="STT Verbum Regnum Dei"
                className="relative w-full h-[600px] object-cover rounded-[32px] shadow-2xl"
              />

              <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
