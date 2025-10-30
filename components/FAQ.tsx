import React, { useState, forwardRef } from 'react';
import type { FAQItem } from '../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex justify-between items-center text-left py-6"
        onClick={onClick}
      >
        <h3 className="text-2xl font-semibold text-[#282828]">{item.question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#282828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-[#282828] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = forwardRef<HTMLElement>((props, ref) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Er der en ansøgningsfrist?',
      answer: 'Nej, der er ingen fast ansøgningsfrist. Ansøgninger behandles løbende.',
    },
    {
      question: 'Hvordan ansøger jeg?',
      answer: 'Ansøgninger skal sendes via e-mail som én samlet fil. Der bruges ikke et specifikt ansøgningsskema. Du kan indsende din ansøgning via e-mail-knappen i sektionen "Sådan søger du støtte".',
    },
    {
      question: 'Hvilke filformater accepteres?',
      answer: 'Din ansøgning skal fremsendes som én samlet fil i enten Word (.doc/.docx) eller PDF-format.',
    },
    {
      question: 'Hvilke typer projekter støtter fonden?',
      answer: 'Fonden støtter primært projekter inden for kunst og kultur med høj kunstnerisk kvalitet, og med relevans for Danmark. Vores fokusområder er visuel kunst, scenekunst, litteratur og digitale medier.',
    },
    {
        question: 'Hvad støtter fonden ikke?',
        answer: 'Fonden yder ikke støtte til studieophold, studierejser, dækning af rejseudgifter, arbejdslegater eller anskaffelse af inventar, arbejdsredskaber og materialer.',
    },
    {
      question: 'Får jeg en begrundelse ved afslag?',
      answer: 'Nej, fonden giver ikke begrundelser for afslag, og alle afgørelser er endelige.',
    },
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-100">
      <div className="max-w-6xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828]">Ofte stillede spørgsmål</h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;