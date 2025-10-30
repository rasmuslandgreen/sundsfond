import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import Recipients from './components/Recipients';
import FundingCriteria from './components/FundingCriteria';
import Apply from './components/Apply';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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