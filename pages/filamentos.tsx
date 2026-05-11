import HeroBanner from "../components/ui/HeroBanner";
import PageContainer from "../components/ui/PageContainer";
import SectionTitle from "../components/ui/SectionTitle";

const filamentos = [
  {
    nome: "PLA",
    destaque: "Fácil de imprimir",
    descricao: "Material padrão para prototipagem rápida, pouca deformação e ótima aderência entre camadas.",
  },
  {
    nome: "PETG",
    destaque: "Resistência e transparência",
    descricao: "Boa resistência mecânica e química, ideal para peças funcionais e visuais claros.",
  },
  {
    nome: "ABS",
    destaque: "Durabilidade térmica",
    descricao: "Requer mesa aquecida e ambiente controlado, mas entrega resistência e acabamento sólido.",
  },
];

export default function FilamentosPage() {
  return (
    <PageContainer>
      <HeroBanner
        eyebrow="Filamentos"
        title="Materiais prontos para testes"
        description="Conheça os tipos mais usados em impressão 3D e suas características de impressão na prática." 
      >
        <a
          href="#lista"
          className="inline-flex rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
        >
          Ver filamentos
        </a>
      </HeroBanner>

      <section className="mt-12" id="lista">
        <SectionTitle
          eyebrow="Inventário"
          title="Filamentos com perfil técnico"
          description="Cada material inclui notas sobre comportamento térmico, aderência e recomendações de teste." 
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {filamentos.map((item) => (
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
          eyebrow="Futuro"
          title="Componentes preparados para integração"
          description="O espaço foi projetado para receber comparação de filamentos, testes de adesão e recomendações de temperatura por material." 
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Adesão</p>
            <p className="text-white text-2xl font-semibold">Alta</p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Temperatura</p>
            <p className="text-white text-2xl font-semibold">190–260°C</p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-400 mb-3">Integração</p>
            <p className="text-white text-2xl font-semibold">Planejada</p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
