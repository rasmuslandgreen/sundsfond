import React, { forwardRef } from 'react';

// FIX: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const FocusCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-[8px_8px_0px_#e5e7eb]">
    <div className="mb-4 text-[#282828]">{icon}</div>
    <h3 className="text-2xl font-bold text-[#282828] mb-2">{title}</h3>
    <p className="text-[#282828]">{description}</p>
  </div>
);

const FocusAreas = forwardRef<HTMLElement>((props, ref) => {
  const areas = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25a8.25 8.25 0 00-8.25 8.25c0 1.928.704 3.684 1.868 5.068l-2.285 2.285A1.5 1.5 0 005.25 21H18.75a1.5 1.5 0 001.06-2.56l-2.285-2.285A8.25 8.25 0 0012 2.25z" /></svg>,
      title: 'Visuel kunst',
      description: 'Støtte til malere, billedhuggere, fotografer og installationskunstnere, der udfordrer opfattelsen og udforsker ny æstetik.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>,
      title: 'Scenekunst',
      description: 'Finansiering af banebrydende teater-, danse- og musikproduktioner, der fængsler publikum og skaber dialog.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0 0v14.25" /></svg>,
      title: 'Litteratur',
      description: 'Styrkelse af digtere, romanforfattere og faglitterære forfattere, der skaber fængslende fortællinger og beriger vores litterære arv.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
      title: 'Digitale medier',
      description: 'Fremme af projekter inden for digital kunst, interaktive medier og virtual reality, der udnytter teknologi til kreativ udfoldelse.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-100">
      <div className="max-w-6xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828]">Vores fokusområder</h2>
          <p className="mt-4 text-lg text-[#282828]">Vi retter vores støtte mod nøgleområder, hvor vi mener, vi kan gøre den mest markante forskel.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <FocusCard key={index} icon={area.icon} title={area.title} description={area.description} />
          ))}
        </div>
      </div>
    </section>
  );
});

FocusAreas.displayName = 'FocusAreas';
export default FocusAreas;