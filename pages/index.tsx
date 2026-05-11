import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

const testes = [
  {
    rota: "/Pag-Cards/benchy",
    titulo: "Benchy",
    categoria: "Qualidade Geral",
    descricao: "Teste clássico para avaliar qualidade e precisão da impressão.",
  },

  {
    rota: "/Pag-Cards/temp-tower",
    titulo: "Temp Tower",
    categoria: "Temperatura",
    descricao: "Descubra a temperatura ideal para cada filamento.",
  },

  {
    rota: "/Pag-Cards/retraction",
    titulo: "Retraction Test",
    categoria: "Stringing",
    descricao: "Ajuste retração e reduza fios entre peças.",
  },

  {
    rota: "/Pag-Cards/overhang",
    titulo: "Overhang Test",
    categoria: "Suportes",
    descricao: "Teste limites de impressão sem suporte.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="PRINTLAB"
        title="O hub definitivo para testes de impressão 3D"
        description="Encontre STL de calibração organizados por impressora, filamento e tipo de teste."
      />

      {/* HERO */}
      <section className="mb-14">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Centralize seus testes de impressão 3D
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Explore arquivos STL, testes de calibração e configurações
              recomendadas para melhorar a qualidade das suas impressões.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/testes"
                className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg shadow-blue-600/20"
              >
                Explorar Testes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTES */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Testes Populares
            </h2>

            <p className="text-zinc-400 mt-1">
              Principais arquivos usados para calibração.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testes.map((teste) => (
            <article
              key={teste.rota}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-5 hover:border-blue-500/40 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                {teste.categoria}
              </p>

              <h3 className="text-xl font-bold text-white mb-3">
                {teste.titulo}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {teste.descricao}
              </p>

              <Link
                href={teste.rota}
                className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition"
              >
                Explorar →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}