import HeroBanner from "../../components/ui/HeroBanner";
import PageContainer from "../../components/ui/PageContainer";
import SectionTitle from "../../components/ui/SectionTitle";

export default function OverhangPage() {
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
        eyebrow="Overhang Test"
        title="Teste os limites sem suporte"
        description="Descubra até onde sua impressora consegue imprimir inclinações sem perder qualidade ou gerar deformações."
      >
        <a
          href="#overhang"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver recomendações
        </a>
      </HeroBanner>

      <section className="mt-12" id="overhang">
        <SectionTitle
          eyebrow="Inclinação"
          title="O que analisar no Overhang Test"
          description="Este teste mostra a capacidade da impressora em imprimir áreas suspensas sem suporte."
        />

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">

          {/* CONTEÚDO PRINCIPAL */}
          <div className="space-y-5">

            {/* IMAGEM PRINCIPAL */}
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95">

              {/* FOTO DO OVERHANG */}
              {/* Coloque em: public/images/overhang-main.jpg */}

              <img
                src="https://makerworld.bblmw.com/makerworld/model/USfde2fc486e8da7/design/a335e8a21bde1cc5.jpg?x-oss-process=image/resize,w_1000/format,webp"
                alt="Overhang Test"
                className="h-[360px] w-full object-cover transition duration-300 hover:scale-105"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-semibold mb-3">
                  Teste de overhang
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Descubra o limite da sua impressora
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  O Overhang Test permite verificar até qual ângulo sua impressora
                  consegue manter qualidade sem utilizar suportes adicionais.
                </p>
              </div>
            </div>

            {/* LISTA */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-8">
              <h3 className="text-xl font-semibold text-white mb-5">
                O que o teste revela
              </h3>

              <ul className="space-y-4 text-zinc-400 leading-relaxed">
                <li>• Qualidade em ângulos extremos.</li>

                <li>• Eficiência do cooling.</li>

                <li>• Deformações em camadas suspensas.</li>

                <li>• Necessidade de suportes.</li>

                <li>• Precisão em superfícies inclinadas.</li>
              </ul>
            </div>
          </div>

          {/* LATERAL */}
          <div className="grid gap-5">

            {/* ÂNGULOS */}
            <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-4">
                Ângulos comuns
              </p>

              <ul className="space-y-3 text-zinc-400">
                <li>• 45° → Excelente</li>
                <li>• 60° → Muito bom</li>
                <li>• 70° → Difícil</li>
                <li>• 80°+ → Crítico</li>
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
                Utilize este modelo para testar overhang e eficiência de resfriamento.
              </p>

              <a
                href="https://makerworld.com/pt/models/30969-simple-overhang-test?from=search#profileId-2582731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Baixar Overhang Test
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}