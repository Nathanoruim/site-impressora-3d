import HeroBanner from "@/components/ui/HeroBanner";
import PageContainer from "@/components/ui/PageContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import TestCard from "@/components/cards/TestCard";

const testes = [
  {
    href: "/benchy",
    title: "Benchy",
    subtitle: "Qualidade geral",
    description: "Verifique precisão, detalhes e estabilidade com o teste de referência mais popular.",
  },
  {
    href: "/temp-tower",
    title: "Temp Tower",
    subtitle: "Temperatura ideal",
    description: "Identifique a melhor faixa de temperatura para cada filamento e evite deformações.",
  },
  {
    href: "/retraction",
    title: "Retraction Test",
    subtitle: "Stringing",
    description: "Ajuste retração e reduza fios entre as seções do modelo para superfícies limpas.",
  },
  {
    href: "/overhang",
    title: "Overhang Test",
    subtitle: "Limites sem suporte",
    description: "Avalie o ângulo máximo de overhang suportado pela sua máquina e configuração.",
  },
];

export default function TestesPage() {
  return (
    <PageContainer>
      <HeroBanner
        eyebrow="Testes"
        title="Biblioteca de testes de calibração"
        description="Explore arquivos de referência com foco em qualidade, temperatura, retração e limites de impressão." 
      >
        <a
          href="#principais-testes"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver principais testes
        </a>
      </HeroBanner>

      <section className="mt-12" id="principais-testes">
        <SectionTitle
          eyebrow="Dashboard"
          title="Testes essenciais para impressoras 3D"
          description="Cada arquivo foi pensado para te ajudar em um ponto crítico de calibração: qualidade, temperatura, retração e overhang."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {testes.map((item) => (
            <TestCard key={item.href} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400 mb-3">Futuro</p>
          <h3 className="text-xl font-semibold text-white mb-3">Integração com backend</h3>
          <p className="text-zinc-400 leading-relaxed">
            Preparado para conectar dados de impressão, resultados de testes e recomendações automáticas em uma próxima fase.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400 mb-3">Visualização</p>
          <h3 className="text-xl font-semibold text-white mb-3">Espaço para STL</h3>
          <p className="text-zinc-400 leading-relaxed">
            Área reservada para preview 3D ou captura de imagens dos modelos de calibração em futuras versões.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400 mb-3">Configurações</p>
          <h3 className="text-xl font-semibold text-white mb-3">Pronto para ajustes</h3>
          <p className="text-zinc-400 leading-relaxed">
            Espaços de configuração dedicados permitem incluir parâmetros de impressora, material e qualidade em breve.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
