import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      label: "Beranda",
      href: "#hero",
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
      label: "Pengurus",

      dropdown: [
        {
          label: "Dosen & Staff",
          href: "#dosen",
        },
      ],
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
          ? "bg-[#081F4D]/85 backdrop-blur-2xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl scale-125 group-hover:scale-150 transition-all duration-500" />

              <div
                className="
                  relative
                  flex items-center justify-center
                  w-16 h-16
                  md:w-20 md:h-20
                  rounded-full
                  bg-white
                  shadow-xl
                  ring-4 ring-amber-300/30
                  transition-all duration-500
                  group-hover:scale-105
                "
              >
                <img
                  src="/logo.svg"
                  alt="Verbum Regnum Dei"
                  className="w-11 h-11 md:w-14 md:h-14 rounded-full"
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1 className="font-bold leading-tight text-white">
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
              <div key={menu.label} className="relative group">
                <a
                  href={menu.href}
                  className="
                    flex items-center gap-1
                    text-sm font-medium
                    text-white
                    hover:text-amber-300
                    transition-colors
                  "
                >
                  {menu.label}

                  {menu.dropdown && (
                    <ChevronDown
                      size={16}
                      className="
                        transition-transform duration-300
                        group-hover:rotate-180
                      "
                    />
                  )}
                </a>

                {menu.dropdown && (
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      mt-4
                      min-w-[220px]
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#081F4D]/95
                      backdrop-blur-xl
                      shadow-2xl
                      opacity-0
                      invisible
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    {menu.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="
                          block
                          px-5 py-3
                          text-sm
                          text-white
                          hover:bg-amber-500/10
                          hover:text-amber-300
                          transition-colors
                        "
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
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
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div
          className="
            bg-[#081F4D]/95
            backdrop-blur-2xl
            border-t
            border-white/10
            px-6 py-6
          "
        >
          <div className="flex flex-col gap-1">
            {menus.map((menu, index) => (
              <div key={menu.label}>
                {menu.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        py-3
                        text-amber-300
                        font-medium
                      "
                    >
                      {menu.label}

                      <ChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {menu.dropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="
                            block
                            py-2
                            pl-6
                            text-sm
                            text-slate-300
                            hover:text-amber-300
                            transition-colors
                          "
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className="
                      block
                      py-3
                      text-amber-300
                      font-medium
                      hover:text-yellow-200
                      transition-colors
                    "
                  >
                    {menu.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
