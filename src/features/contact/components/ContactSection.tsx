import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-20 -left-32 w-[350px] h-[350px] bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#0b1f3a]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-semibold border border-yellow-300">
            Hubungi Kami
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0b1f3a]">
            Mari Bersama Mempersiapkan
            <span className="block text-yellow-600">
              Generasi Pelayan Tuhan
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Kami mengundang gereja, hamba Tuhan, dan masyarakat Kristen untuk
            bersama-sama mendukung lahirnya Sekolah Tinggi Teologi VERBUM REGNUM
            DEI sebagai wadah pembentukan murid Kristus yang memuridkan.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-[#0b1f3a] mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-7">
              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a] text-sm">
                    Alamat
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">
                    Jalan Boulevard Raya Gading Serpong G5, Pakulonan Barat,
                    Kelapa Dua, Tangerang, Banten 15810
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-yellow-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a] text-sm">
                    WhatsApp
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">0856-9312-9534</p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-yellow-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a] text-sm">
                    Email
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 break-all">
                    sttverbumregnumdei@gmail.com
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-yellow-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a] text-sm">
                    Jam Pelayanan
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Senin - Jumat <br />
                    08.00 - 17.00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-[#0b1f3a] hover:bg-[#08172a] text-white"
              >
                <a
                  href="https://wa.me/6285693129534"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-yellow-400" />
                  Hubungi via WhatsApp
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-yellow-300 text-[#0b1f3a] hover:bg-yellow-50"
              >
                <a href="mailto:sttverbumregnumdei@gmail.com">Kirim Email</a>
              </Button>
            </div>
          </div>

          {/* Right (Map) */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Lokasi Sekolah Tinggi Teologi Verbum Regnum Dei"
              src="https://maps.google.com/maps?q=Jalan%20Boulevard%20Raya%20Gading%20Serpong%20G5%2C%20Pakulonan%20Barat%2C%20Kelapa%20Dua%2C%20Tangerang%2C%20Banten%2015810&z=16&output=embed"
              className="w-full h-full min-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 rounded-3xl bg-[#0b1f3a] border border-yellow-500/20 p-8 text-center">
          <h3 className="text-xl font-bold text-yellow-400">
            Informasi Penerimaan Mahasiswa Baru
          </h3>

          <p className="mt-4 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Informasi mengenai pembukaan pendaftaran mahasiswa baru akan
            diumumkan setelah proses perizinan penyelenggaraan Program Studi
            Sarjana Teologi (S.Th.) selesai sesuai dengan ketentuan yang
            berlaku.
          </p>
        </div>
      </div>
    </section>
  );
};
