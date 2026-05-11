const equipe: { nome: string; github: string }[] = [];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-300 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              PrintLab
            </h3>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Plataforma focada em testes, calibração e organização de arquivos
              STL para impressão 3D.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              Projeto
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">
                Biblioteca de Testes
              </li>

              <li className="hover:text-white transition">
                Impressoras Compatíveis
              </li>

              <li className="hover:text-white transition">
                Filamentos
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © {ano} PrintLab — Hub de impressão 3D
          </span>

          <span>Construído com Next.js + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}