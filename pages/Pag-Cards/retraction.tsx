import HeroBanner from "../../components/ui/HeroBanner";
import PageContainer from "../../components/ui/PageContainer";
import SectionTitle from "../../components/ui/SectionTitle";

export default function RetractionPage() {
  return (
    <PageContainer>

      {/* BOTÃO VOLTAR */}
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
      >
        <span className="text-xl">←</span>
        Voltar para Home
      </a>

      <HeroBanner
        eyebrow="Retraction Test"
        title="Elimine stringing e vazamentos"
        description="Calibre a retração do filamento para reduzir fios, blobs e falhas entre movimentos da impressora."
      >
        <a
          href="#retraction"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver recomendações
        </a>
      </HeroBanner>

      <section className="mt-12" id="retraction">
        <SectionTitle
          eyebrow="Calibração"
          title="O que analisar no Retraction Test"
          description="Este teste ajuda a identificar a distância e velocidade ideais de retração para cada filamento."
        />

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">

          {/* CONTEÚDO PRINCIPAL */}
          <div className="space-y-5">

            {/* IMAGEM PRINCIPAL */}
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95">

              {/* FOTO DO RETRACTION TEST */}
              {/* Coloque em: public/images/retraction-main.jpg */}

              <img
                src="https://imgs.search.brave.com/y1-GkrO4RdlnQDgGxAFADdUrnLw5vziZlbbXwrWZFuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lb2xh/c3ByaW50cy5jb20v/Y2RuL3Nob3AvYXJ0/aWNsZXMvM2QtcHJp/bnQtcmV0cmFjdGlv/bi10ZXN0LndlYnA_/dj0xNzYyNTkyMTEx/JndpZHRoPTk2MA"
                alt="Retraction Test"
                className="h-[360px] w-full object-cover transition duration-300 hover:scale-105"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-semibold mb-3">
                  Retração do filamento
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Ajuste a retração ideal
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  O Retraction Test permite encontrar a configuração perfeita
                  para evitar stringing, excesso de material e falhas de transição
                  entre movimentos rápidos da impressora.
                </p>
              </div>
            </div>

            {/* LISTA */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-8">
              <h3 className="text-xl font-semibold text-white mb-5">
                Problemas identificados
              </h3>

              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li>• Stringing entre torres.</li>

                <li>• Vazamento excessivo no nozzle.</li>

                <li>• Blobs e marcas de extrusão.</li>

                <li>• Retração insuficiente ou exagerada.</li>

                <li>• Problemas de travel movement.</li>
              </ul>
            </div>
          </div>

          {/* LATERAL */}
          <div className="grid gap-5">

            {/* CONFIGURAÇÕES */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-4">
                Configurações iniciais
              </p>

              <ul className="space-y-3 text-zinc-400">
                <li>• Direct Drive: 0.5–2mm</li>
                <li>• Bowden: 4–6mm</li>
                <li>• Speed: 25–45mm/s</li>
                <li>• Cooling: 100%</li>
              </ul>
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

              </div>
            </div>

            {/* DOWNLOAD */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">
                Download STL
              </p>

              <p className="text-zinc-400 leading-relaxed mb-5">
                Utilize este modelo para calibrar retração e reduzir stringing.
              </p>

              <a
                href="https://makerworld.com/pt/models/28900-easy-quick-retraction-test-kuai-su-hui-suo-ce-shi?from=search#profileId-34069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Baixar Retraction Test
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageContainer>
  );
}