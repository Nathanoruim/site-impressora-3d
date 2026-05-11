import HeroBanner from "../../components/ui/HeroBanner";
import PageContainer from "../../components/ui/PageContainer";
import SectionTitle from "../../components/ui/SectionTitle";

export default function BenchyPage() {
  return (
    <PageContainer>
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
      >
        <span className="text-xl">←</span>
        Voltar para Home
      </a>
      <HeroBanner
        eyebrow="Benchy"
        title="Teste de qualidade geral"
        description="O Benchy é o principal benchmark da impressão 3D para avaliar precisão, acabamento e estabilidade da impressora."
      >
        <a
          href="#detalhes"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver detalhes do teste
        </a>
      </HeroBanner>

      <section className="mt-12" id="detalhes">
        <SectionTitle
          eyebrow="Benchmark 3D"
          title="Por que usar o Benchy"
          description="Utilize este modelo para analisar qualidade de camadas, overhang, bridging, retração e acabamento geral."
        />

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">

          {/* CONTEÚDO PRINCIPAL */}
          <div className="space-y-5">

            {/* IMAGEM PRINCIPAL */}
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95">

              {/* FOTO DO BENCHY */}
              {/* Coloque a imagem em: public/images/benchy-main.jpg */}

              <img
                src="https://makerworld.bblmw.com/makerworld/model/US2262720d55a8f6/design/2023-10-14_994ac3c06d028.jpg?x-oss-process=image/resize,w_1000/format,webp"
                alt="Modelo Benchy"
                className="h-[360px] w-full object-cover transition duration-300 hover:scale-105"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-semibold mb-3">
                  Modelo Benchmark
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  O teste mais usado da impressão 3D
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  O Benchy permite identificar problemas de resfriamento,
                  vibração, retração, overhang e inconsistências de extrusão
                  utilizando um único modelo extremamente popular.
                </p>
              </div>
            </div>

            {/* LISTA */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-8">
              <h3 className="text-xl font-semibold text-white mb-5">
                O que o Benchy revela
              </h3>

              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li>
                  • Precisão de dimensões externas e internas.
                </li>

                <li>
                  • Qualidade de superfícies curvas e acabamento.
                </li>

                <li>
                  • Eficiência do cooling e overhang.
                </li>

                <li>
                  • Problemas de stringing e retração.
                </li>

                <li>
                  • Vibração e ghosting em altas velocidades.
                </li>
              </ul>
            </div>
          </div>

          {/* LATERAL */}
          <div className="grid gap-5">

            {/* CARD STL */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">
                Download STL
              </p>

              <p className="text-zinc-400 leading-relaxed mb-5">
                Baixe o modelo Benchy original para começar seus testes de calibração.
              </p>

              <a
                href="https://www.printables.com/model/3161-3d-benchy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Baixar Benchy
              </a>
            </div>

            {/* FILAMENTOS */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-4">
                Materiais recomendados
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                  PLA
                </span>

                <span className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                  PETG
                </span>

                <span className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                  ABS
                </span>
              </div>
            </div>

            {/* CONFIG */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">
                Configuração sugerida
              </p>

              <ul className="space-y-3 text-zinc-400">
                <li>• Layer Height: 0.2mm</li>
                <li>• Speed: 50mm/s</li>
                <li>• Cooling: 100%</li>
                <li>• Nozzle: 0.4mm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}