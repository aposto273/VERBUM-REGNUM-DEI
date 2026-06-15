import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navText = scrolled ? "text-slate-900" : "text-white";

  const navHover = scrolled ? "hover:text-blue-600" : "hover:text-blue-200";

  const menus = [
    {
      label: "Beranda",
      href: "#",
    },

    {
      label: "Visi & Misi",
      href: "#visimisi",
    },

    {
      label: "Program Studi",
      href: "#programstudi",
    },
    {
      label: "Tentang Kami",
      href: "#about",
    },
    {
      label: "Galeri",
      href: "#gallery",
    },
    {
      label: "Kontak",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled ? "bg-white/90 backdrop-blur-xl  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="STT Verbum Regnum Dei"
              className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110 rounded-full"
            />

            <div className="hidden sm:block">
              <h1
                className={`font-semibold text-sm leading-tight transition-colors ${navText}`}
              >
                SEKOLAH TINGGI TEOLOGI <br /> VERBUM REGNUM DEI
              </h1>

              <p
                className={`text-xs transition-colors ${
                  scrolled ? "text-slate-500" : "text-white/70"
                }`}
              >
                Membentuk Murid Kristus yang Memuridkan
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav
            className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${navText}`}
          >
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                className={`transition-colors duration-200 ${navHover}`}
              >
                {menu.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className={`md:hidden transition-colors ${navText}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t px-6 py-6">
          <div className="flex flex-col gap-4">
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {menu.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
