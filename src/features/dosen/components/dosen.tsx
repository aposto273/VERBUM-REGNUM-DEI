import { Ketua } from "./ketua";
import { Waket } from "./waket";

export const Dosen = () => {
  return (
    <section
      id="dosen"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#0B1F3A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10 px-4 py-2 text-sm font-medium text-[#C9A227]">
            Tenaga Pendidik
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
            <span className="block text-[#C9A227]">VERBUM REGNUM DEI</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

          <p className="mt-6 leading-relaxed text-slate-600">
            VERBUM REGNUM DEI didukung oleh tenaga pendidik yang memiliki
            kompetensi akademik dan pengalaman pelayanan untuk mendukung
            penyelenggaraan Program Studi Sarjana Teologi.
          </p>
        </div>

        <Ketua />

        <Waket />
      </div>
    </section>
  );
};
