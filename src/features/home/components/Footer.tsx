import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-slate-300"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/logo.svg"
                alt="STT Verbum Regnum Dei"
                className="h-14 w-14 rounded-full bg-white p-1"
              />

              <div>
                <h3 className="font-bold text-white leading-tight">
                  SEKOLAH TINGGI TEOLOGI
                </h3>

                <h3 className="font-bold text-white leading-tight">
                  VERBUM REGNUM DEI
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Membentuk generasi pelayan Tuhan yang memiliki pemahaman Alkitab
              yang kokoh, karakter yang serupa Kristus, dan komitmen untuk
              memuridkan bangsa.
            </p>

            <div className="mt-5 text-sm text-blue-300">
              Belajar Firman • Bertumbuh dalam Kristus • Memuridkan Bangsa
            </div>
          </div>

          {/* NAVIGASI */}
          <div>
            <h3 className="font-semibold text-white mb-5">Navigasi</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Beranda
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>

              <li>
                <a
                  href="#visimisi"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Visi & Misi
                </a>
              </li>

              <li>
                <a
                  href="#programstudi"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Program Studi
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="font-semibold text-white mb-5">Hubungi Kami</h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 mt-1 shrink-0" />

                <span className="text-slate-400">
                  Jalan Boulevard Raya Gading Serpong G5,
                  <br />
                  Pakulonan Barat, Kelapa Dua,
                  <br />
                  Tangerang, Banten 15810
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300 shrink-0" />

                <a
                  href="https://wa.me/6285693129534"
                  className="text-slate-400 hover:text-blue-300 transition-colors"
                >
                  0856-9312-9534
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300 shrink-0" />

                <a
                  href="mailto:sttverbumregnumdei25@gmail.com"
                  className="text-slate-400 hover:text-blue-300 transition-colors break-all"
                >
                  sttverbumregnumdei25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} STT VERBUM REGNUM DEI. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
