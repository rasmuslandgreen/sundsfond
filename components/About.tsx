import React, { forwardRef } from 'react';

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="pt-4 md:pt-8 pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-12">
        <div className="max-w-4xl text-lg text-[#282828] leading-relaxed space-y-6">
          <p>
            Det er en af dansk erhvervslivs mest succesrige iværksættere, der står bag Ernst B. Sund Fonden.
          </p>
          <p>
            Fondens stifter, ingeniør Ernst B. Sund, blev født i 1922 på Jegindø i Limfjorden. Opvæksten var præget af nøjsomhed og flid – egenskaber, der blev en ledetråd gennem hele hans liv.
          </p>
          <p>
            Efter sin uddannelse som ingeniør fra Odense Teknikum blev han ansat i Grønlandsdepartementet. I 1955 grundlagde han Hadsten Hjulfabrik, som under hans visionære ledelse voksede til en international succes. Fabrikken blev solgt i midten af 1990’erne.
          </p>
          <p>
            Ernst B. Sund døde i 2002, og det er frugten af hans lange og succesfulde arbejdsliv, der i dag kommer uddannelse, kunst og kultur til gode gennem fondens virke.
          </p>
          <p>
            Siden de første uddelinger i år 2000 har Ernst B. Sund Fonden støttet særlige talenter, der bidrager til at højne det kunstneriske og kulturelle niveau i Danmark.
          </p>
          <p>
            Fonden uddeler desuden et større kulturlegat, som ikke kan søges.
          </p>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;