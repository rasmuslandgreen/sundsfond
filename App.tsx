
import React, { useRef } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import FocusAreas from './components/FocusAreas.tsx';
import Recipients from './components/Recipients.tsx';
import FundingCriteria from './components/FundingCriteria.tsx';
import Apply from './components/Apply.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const focusRef = useRef<HTMLElement>(null);
  const recipientsRef = useRef<HTMLElement>(null);
  const criteriaRef = useRef<HTMLElement>(null);
  const applyRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-[#282828] antialiased">
      <Header
        onFocusClick={() => scrollTo(focusRef)}
        onRecipientsClick={() => scrollTo(recipientsRef)}
        onCriteriaClick={() => scrollTo(criteriaRef)}
        onApplyClick={() => scrollTo(applyRef)}
        onFaqClick={() => scrollTo(faqRef)}
      />
      <main>
        <Hero />
        <FocusAreas ref={focusRef} />
        <Recipients ref={recipientsRef} />
        <FundingCriteria ref={criteriaRef} />
        <Apply ref={applyRef} />
        <FAQ ref={faqRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;