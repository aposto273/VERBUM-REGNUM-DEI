import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Blur Background */}
      <div className="absolute top-20 -left-32 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-sky-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
            Hubungi Kami
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Mari Bersama Mempersiapkan
            <span className="block text-blue-700">Generasi Pelayan Tuhan</span>
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
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <MapPin className="text-blue-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">Alamat</h4>

                  <p className="text-slate-600 mt-1">
                    Jalan Boulevard Raya Gading Serpong G5, Pakulonan Barat,
                    Kelapa Dua, Tangerang, Banten 15810
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Phone className="text-blue-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">WhatsApp</h4>

                  <p className="text-slate-600 mt-1">0856-9312-9534</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Mail className="text-blue-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>

                  <p className="text-slate-600 mt-1 break-all">
                    sttverbumregnumdei@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Clock className="text-blue-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Jam Pelayanan
                  </h4>

                  <p className="text-slate-600 mt-1">
                    Senin - Jumat
                    <br />
                    08.00 - 17.00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <a
                  href="https://wa.me/6285693129534"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Hubungi via WhatsApp
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a href="mailto:sttverbumregnumdei@gmail.com">Kirim Email</a>
              </Button>
            </div>
          </div>

          {/* Right */}
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
        <div className="mt-16 rounded-3xl bg-blue-50 border border-blue-100 p-8 text-center">
          <h3 className="text-xl font-bold text-blue-900">
            Informasi Penerimaan Mahasiswa Baru
          </h3>

          <p className="mt-4 text-blue-700 max-w-3xl mx-auto leading-relaxed">
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
