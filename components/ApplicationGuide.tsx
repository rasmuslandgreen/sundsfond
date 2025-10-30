import React from 'react';

const Step: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex items-center justify-center bg-slate-200 text-slate-700 font-bold rounded-full text-xl">
        {number}
      </div>
      <div className="w-px h-full bg-slate-200"></div>
    </div>
    <div className="pb-12">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{children}</p>
    </div>
  </div>
);

const ApplicationGuide: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Sådan ansøger du</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Vores ansøgningsproces er designet til at være ligetil. Følg disse trin for at indsende din ansøgning.
          </p>
        </div>
        <div className="max-w-2xl">
          <Step number="01" title="Gennemgå berettigelse">
            Før du ansøger, bedes du omhyggeligt gennemgå vores støttekriterier og fokusområder for at sikre, at dit projekt er i overensstemmelse med vores mission. Vi støtter ikke projekter uden for disse områder.
          </Step>
          <Step number="02" title="Forbered din ansøgning">
            Saml alle nødvendige dokumenter, herunder en detaljeret projektbeskrivelse, budget, tidsplan og kunstner-CV'er. Din ansøgning skal være et enkelt PDF-dokument.
          </Step>
          <Step number="03" title="Indsend via e-mail">
            Når din ansøgning er klar, send den som en enkelt PDF-vedhæftning til vores ansøgnings-e-mailadresse. Brug venligst emnelinjen 'Legatansøgning: [Din Projekttitel]'.
          </Step>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-800 text-white font-bold rounded-full text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Vurdering og afgørelse</h3>
              <p className="text-slate-600">Vores bestyrelse gennemgår ansøgninger kvartalsvis. Du vil blive underrettet om afgørelsen inden for 90 dage efter ansøgningsfristen. Vi takker for din tålmodighed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;