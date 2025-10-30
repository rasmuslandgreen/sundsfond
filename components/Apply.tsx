import React, { forwardRef } from 'react';

const Apply = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#282828]">Sådan søger du støtte fra Ernst B. Sund Fonden</h2>
        
        <ul className="mt-8 list-disc list-inside text-lg text-[#282828] space-y-3 max-w-3xl">
          <li>Ansøgninger modtages udelukkende via e-mail.</li>
          <li>Der anvendes ikke et ansøgningsskema.</li>
          <li>Ansøgningen skal fremsendes som én samlet fil i enten Word (.doc/.docx) eller PDF-format.</li>
          <li>Der er ingen fast ansøgningsfrist.</li>
          <li>Fonden giver ikke begrundelser for afslag, og afgørelser er endelige.</li>
        </ul>
        
        <div className="mt-10">
          <a 
            href="mailto:peter@kkornum.dk?subject=Legatansøgning: [Din Projekttitel]" 
            className="bg-slate-800 text-white text-lg py-4 px-10 rounded-lg hover:bg-slate-700 transition-transform hover:scale-105 transform inline-block"
          >
            E-mail din ansøgning
          </a>
        </div>
      </div>
    </section>
  );
});

Apply.displayName = 'Apply';
export default Apply;