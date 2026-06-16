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
      label: "Kontak",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081F4D]/85 backdrop-blur-2xl shadow-2xl "
          : "bg-transparent"
      }`}
    >
      {/* Gold Line */}
      {/* <div
        className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-all duration-500 ${
          scrolled ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      /> */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-4 md:gap-5 group">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl scale-125 group-hover:scale-150 transition-all duration-500" />

              {/* Circle */}
              <div
                className="
                        
              relative
              flex items-center justify-center
              w-16 h-16
              md:w-20 md:h-20
              lg:w-20 lg:h-20
              rounded-full
              bg-white
              shadow-2xl
              ring-4 ring-amber-300/30
              transition-all duration-500
              group-hover:scale-110
            "
              >
                <img
                  src="/logo.svg"
                  alt="STT Verbum Regnum Dei"
                  className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1
                className={`font-bold leading-tight transition-colors ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                <span className="text-sm md:text-base">
                  SEKOLAH TINGGI TEOLOGI
                </span>

                <br />

                <span className="text-base md:text-lg bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  VERBUM REGNUM DEI
                </span>
              </h1>

              <p className="text-xs text-slate-300 mt-1">
                Membentuk Murid Kristus yang Memuridkan
              </p>
            </div>
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-white
                  hover:text-amber-300
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-amber-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {menu.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} className="text-amber-300" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#081F4D]/95 backdrop-blur-2xl border-t border-amber-400/20 px-6 py-6">
          {" "}
          <div className="flex flex-col gap-4">
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  py-3
                  text-amber-300
                  hover:text-amber-300
                  transition-colors
                  "
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
