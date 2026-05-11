import HeroBanner from "../components/ui/HeroBanner";
import PageContainer from "../components/ui/PageContainer";
import SectionTitle from "../components/ui/SectionTitle";

const impressoras = [
  {
    nome: "Creality Ender 3",
    destaque: "Versátil e acessível",
    descricao: "Modelo popular para quem busca bons resultados em protótipos e testes de calibração.",
  },
  {
    nome: "Prusa i3 MK3",
    destaque: "Precisão avançada",
    descricao: "Focado em qualidade, com sensores de filamento e excelente acabamento em impressão contínua.",
  },
  {
    nome: "Anycubic Vyper",
    destaque: "Pronto para uso",
    descricao: "Configuração simplificada e recursos automáticos para iniciantes que desejam imprimir sem complicações.",
  },
];

export default function ImpressorasPage() {
  return (
    <PageContainer>
      <HeroBanner
        eyebrow="Impressoras"
        title="Equipamentos compatíveis"
        description="Uma visão inicial das máquinas mais comuns usadas em testes de impressão 3D e calibração." 
      >
        <a
          href="#modelos"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver modelos
        </a>
      </HeroBanner>

      <section className="mt-12" id="modelos">
        <SectionTitle
          eyebrow="Inventário"
          title="Impressoras com suporte"
          description="Cada equipamento exibe características compatíveis com nossos testes e futuras expansões de configuração." 
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {impressoras.map((item) => (
            <div key={item.nome} className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-6">
              <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-400 mb-3">{item.nome}</p>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.destaque}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>

        
      </section>

      <section className="mt-14 rounded-[1.75rem] border border-zinc-800 bg-zinc-900/95 p-8">
        <SectionTitle
          eyebrow="Pronto para"
          title="Integração com perfil de máquina"
          description="O layout está preparado para adicionar perfis, parâmetros e recomendações específicas para cada impressora." 
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Compatibilidade</p>
            <p className="text-white text-2xl font-semibold">Geral</p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Perfis</p>
            <p className="text-white text-2xl font-semibold">Futuros</p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Entrada</p>
            <p className="text-white text-2xl font-semibold">Planejada</p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
