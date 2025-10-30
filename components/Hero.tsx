import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-100 flex items-start relative overflow-hidden pt-56 pb-24">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/3/38/Hadsten_-_vue_mod_nord.jpg)`}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-12 relative z-10 text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-[#282828] leading-tight">
          Fonden har til formål at støtte kunst, videnskab og andre almennyttige formål.
        </h1>
        <div className="mt-28 max-w-4xl text-lg text-[#282828] leading-relaxed space-y-6">
           <p>
            Det er en af dansk erhvervslivs mest succesrige iværksættere, der står bag Ernst B. Sund Fonden.
          </p>
          <p>
            Fondens stifter, ingeniør <strong>Ernst B. Sund</strong>, blev født i 1922 på Jegindø i Limfjorden. Opvæksten var præget af nøjsomhed og flid – egenskaber, der blev en ledetråd gennem hele hans liv.
          </p>
          <p>
            Efter sin uddannelse som ingeniør fra Odense Teknikum blev han ansat i Grønlandsdepartementet. I 1955 grundlagde han <strong>Hadsten Hjulfabrik</strong>, som under hans visionære ledelse voksede til en international succes. Fabrikken blev solgt i midten af 1990’erne.
          </p>
          <p>
            Ernst B. Sund døde i 2002, og det er frugten af hans lange og succesfulde arbejdsliv, der i dag kommer <strong>uddannelse, kunst og kultur</strong> til gode gennem fondens virke.
          </p>
          <p>
            Siden de første uddelinger i år 2000 har <strong>Ernst B. Sund Fonden</strong> støttet særlige talenter, der bidrager til at højne det kunstneriske og kulturelle niveau i Danmark.
          </p>
          <p>
            Fonden uddeler desuden et større <strong>kulturlegat</strong>, som <strong>ikke kan søges</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;