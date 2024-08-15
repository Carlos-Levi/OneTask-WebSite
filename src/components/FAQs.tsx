"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';

const items = [
  {
    question: "Quais métodos de pagamento vocês aceitam?",
    answer:
      "Aceitamos todos os principais cartões de crédito, PayPal e diversos outros métodos de pagamento, dependendo da sua localização. Entre em contato com nossa equipe de suporte para mais informações sobre os métodos aceitos em sua região.",
  },
  {
    question: "Como funciona a precificação para equipes?",
    answer:
      "Nossa precificação é por usuário, por mês. Isso significa que você paga apenas pelo número de membros da equipe que tem em sua conta. Oferecemos descontos para equipes maiores e assinaturas anuais.",
  },
  {
    question: "Posso mudar meu plano mais tarde?",
    answer:
      "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações no seu plano serão proporcionais e refletidas no seu próximo ciclo de faturamento.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "A segurança é nossa principal prioridade. Usamos criptografia de ponta e seguimos as melhores práticas da indústria para garantir que seus dados sejam armazenados com segurança e acessados apenas por usuários autorizados.",
  },
];

const AccordinationItem = ({question, answer}: {question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{opacity: 0, height: 0, marginTop: 0}}
            animate={{opacity: 1, height: "auto", marginTop: '16px'}}
            exit={{opacity: 0, height: 0, marginTop: 0}}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Perguntas Frequentes
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </div>
  );
};
