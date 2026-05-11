import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Início" },
  { href: "/testes", label: "Testes" },
  { href: "./filamentos", label: "Filamentos" },
  { href: "/impressoras", label: "Impressoras" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white tracking-tight"
        >
          <span className="grid place-items-center w-11 h-11 rounded-2xl bg-blue-500 text-white text-sm font-bold shadow-[0_20px_60px_-45px_rgba(59,130,246,0.9)]">
            3D
          </span>

          <div className="flex flex-col leading-none">
            <span className="text-white font-bold">PrintLab</span>
            <span className="text-xs text-zinc-500 font-medium">
              Hub de Impressão 3D
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-2 text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-2xl border font-medium transition-all duration-200",
                    isActive
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-[0_10px_30px_-20px_rgba(59,130,246,0.75)]"
                      : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/testes"
          className="hidden sm:inline-flex items-center rounded-2xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 shadow-lg shadow-blue-500/20"
        >
          Explorar Testes
        </Link>
      </div>
    </nav>
  );
}