import React, { forwardRef } from 'react';

const InclusionListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-[#282828]">{children}</span>
  </li>
);

const ExclusionListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
      <svg className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="text-[#282828]">{children}</span>
    </li>
  );

const FundingCriteria = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-100">
      <div className="max-w-6xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828]">Støttekriterier</h2>
          <p className="mt-4 text-lg text-[#282828]">
            For at sikre, at vores ressourcer fordeles effektivt, har vi etableret klare retningslinjer for berettigelse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#282828] mb-6">Fonden yder støtte til:</h3>
            <ul className="space-y-4">
              <InclusionListItem>
                <strong>Projekter inden for kunst og kultur:</strong> Støtte gives primært til projekter, der beriger det danske kunst- og kulturliv.
              </InclusionListItem>
              <InclusionListItem>
                <strong>Høj kunstnerisk kvalitet:</strong> Fonden prioriterer ansøgninger fra særlige talenter, der demonstrerer et højt kunstnerisk niveau og potentiale.
              </InclusionListItem>
              <InclusionListItem>
                <strong>Konkrete projektudgifter:</strong> Støtte kan søges til specifikke, veldefinerede projekter såsom udstillinger, produktioner eller udgivelser.
              </InclusionListItem>
              <InclusionListItem>
                <strong>Projekter inden for fondens fokusområder:</strong> Ansøgninger skal relatere sig til et eller flere af fondens hovedområder: visuel kunst, scenekunst, litteratur eller digitale medier.
              </InclusionListItem>
               <InclusionListItem>
                <strong>Projekter med relevans for Danmark:</strong> Fonden støtter primært projekter, der er forankret i Danmark og bidrager til den nationale kulturscene.
              </InclusionListItem>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#282828] mb-6">Fonden yder ikke støtte til:</h3>
            <ul className="space-y-4">
              <ExclusionListItem>
                Studieophold eller studierejser
              </ExclusionListItem>
              <ExclusionListItem>
                Dækning af rejseudgifter
              </ExclusionListItem>
              <ExclusionListItem>
                Arbejdslegater
              </ExclusionListItem>
              <ExclusionListItem>
                Anskaffelse af inventar, arbejdsredskaber eller materialer
              </ExclusionListItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

FundingCriteria.displayName = 'FundingCriteria';
export default FundingCriteria;