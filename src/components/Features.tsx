import { Feature } from './Feature';

const features = [
  {
    title: 'Ecossistema de Integrações',
    description:
      'Aumente sua produtividade conectando-se com suas ferramentas, mantendo o essencial em um só lugar.',
  },
  {
    title: 'Definição e Acompanhamento de Metas',
    description:
      'Defina e acompanhe suas metas, dividindo objetivos em tarefas alcançáveis para manter seus alvos em vista.',
  },
  {
    title: 'Criptografia de Dados Segura',
    description:
      'Com criptografia de ponta a ponta, seus dados são armazenados de forma segura e protegidos contra acessos não autorizados.',
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Tudo o que você precisa
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
    Aproveite listas personalizáveis, ferramentas de trabalho em equipe e rastreamento inteligente, tudo em um só lugar.
  </p>
  <p className="text-center mt-3 text-xl text-white/70">
    Defina tarefas, receba lembretes e veja seu progresso de forma simples e rápida.
  </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
