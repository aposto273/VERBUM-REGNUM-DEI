import { Section } from "@/components/common/Section";
import {
  Network,
  Server,
  Wrench,
  ShieldCheck,
} from "lucide-react";


const services = [
  {
    title: "IT Infrastructure & Network",
    desc: "Konsultasi, desain, dan implementasi infrastruktur jaringan yang stabil, aman, dan scalable untuk kebutuhan bisnis Anda.",
    icon: Network,
  },
  {
    title: "Server & Deployment",
    desc: "Manajemen server, setup infrastruktur, deployment aplikasi, hingga migrasi server dengan downtime minimal.",
    icon: Server,
  },
  {
    title: "CCTV & Monitoring",
    desc: "Instalasi dan konfigurasi sistem CCTV berbasis NVR & IP Camera untuk monitoring yang real-time dan terintegrasi.",
    icon: ShieldCheck,
  },
  {
    title: "IT Support & Troubleshooting",
    desc: "Penanganan masalah IT, maintenance sistem, serta optimasi performa jaringan dan server secara profesional.",
    icon: Wrench,
  },
];



export const ServicesSection = () => {
  return (
    <section id="services">
      <Section
        title="Layanan Kami"
      >
        <p className="text-center text-gray-600 mb-6">
          Solusi lengkap di bidang IT untuk mendukung operasional dan pertumbuhan bisnis Anda
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon size={24} />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
    </section>
  );
};