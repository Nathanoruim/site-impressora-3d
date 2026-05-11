import HeroBanner from "../../components/ui/HeroBanner";
import PageContainer from "../../components/ui/PageContainer";
import SectionTitle from "../../components/ui/SectionTitle";

export default function TempTowerPage() {
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
        eyebrow="Temp Tower"
        title="Descubra a faixa térmica ideal"
        description="Use a torre de temperatura para calibrar o ponto de fusão e obter superfícies consistentes em cada camada."
      >
        <a
          href="#configuracoes"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver recomendações
        </a>
      </HeroBanner>

      <section className="mt-12" id="configuracoes">
        <SectionTitle
          eyebrow="Teste térmico"
          title="O que medir na Temp Tower"
          description="Cada bloco representa um intervalo diferente de temperatura. Identifique linhas suaves, adesão de camada e ausência de deformação."
        />

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">

          {/* CONTEÚDO PRINCIPAL */}
          <div className="space-y-5">

            {/* IMAGEM PRINCIPAL */}
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95">

              {/* FOTO DA TEMP TOWER */}
              {/* Coloque em: public/images/temp-tower-main.jpg */}

              <img
                src="https://imgs.search.brave.com/fzYwMRH7-elCLa9vGUH1j0nfkLHJSuizO6mFjVuIsb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dGVtcC10b3dlci1m/aXJzdC10aW1lLXdo/aWNoLWlzLXRoZS1i/ZXN0LXYwLTJ1b3ph/cHc2dWxtYjEuanBn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPTc1/OGEzMGQ2NzY3ODBl/Mzk5MDBiZWU0OTYy/NWIyNGUwMjZhZWI0/MTk"
                alt="Temp Tower"
                className="h-[360px] w-full object-cover transition duration-300 hover:scale-105"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-semibold mb-3">
                  Calibração térmica
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Ajuste a temperatura perfeita
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  A Temp Tower ajuda a identificar a melhor faixa de temperatura
                  para cada filamento, reduzindo stringing, falhas de camada
                  e problemas de acabamento.
                </p>
              </div>
            </div>

            {/* TEMPERATURAS */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-8">
              <h3 className="text-xl font-semibold text-white mb-5">
                Temperaturas sugeridas
              </h3>

              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li>• PLA: 190–220°C</li>

                <li>• PETG: 230–250°C</li>

                <li>• ABS: 240–260°C</li>

                <li>• Silk PLA: 210–230°C</li>
              </ul>
            </div>
          </div>

          {/* LATERAL */}
          <div className="grid gap-5">

            {/* CARD MATERIAL */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-4">
                Materiais compatíveis
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

            {/* DOWNLOAD STL */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">
                Download STL
              </p>

              <p className="text-zinc-400 leading-relaxed mb-5">
                Utilize este modelo para calibrar diferentes materiais e encontrar a temperatura ideal. 
                Esse modelo e compativel com os seguintes materiais: PLA, PETG, ABS.
              </p>

              <a
                href="https://makerworld.com/pt/models/54325-tower-temp-temperature-tower-test-pla-abs-petg?from=search#profileId-56042"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Baixar Temp Tower
              </a>
            </div>

            {/* CONFIG */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">
                Configuração sugerida
              </p>

              <ul className="space-y-3 text-zinc-400">
                <li>• Layer Height: 0.2mm</li>
                <li>• Cooling: 100%</li>
                <li>• Speed: 45mm/s</li>
                <li>• Nozzle: 0.4mm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}