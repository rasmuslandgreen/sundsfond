
import React, { forwardRef } from 'react';
import type { TimelineEvent } from '../types.ts';

const timelineData: TimelineEvent[] = [
  {
    year: '2018',
    recipient: 'Tegneren Jens Hage',
  },
  {
    year: '2013',
    recipient: 'Filmproducent Ole Christian Madsen',
  },
  {
    year: '2012',
    recipient: 'Forfatter Hans Edvard Nørregård-Nielsen\nFotograf Kirsten Klein',
  },
  {
    year: '2007',
    recipient: 'Musiker og komponist Steffen Brandt',
  },
  {
    year: '2003',
    recipient: 'Mag. Art Bente Scavenius',
  },
  {
    year: '2002',
    recipient: 'Forfatter Jørgen Leth',
  },
  {
    year: '2001',
    recipient: 'Balletkritiker Erik Aschengreen',
  },
];

const Recipients = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828]">Seneste kulturprismodtagere</h2>
        </div>
        
        <div className="space-y-12 max-w-3xl">
          {timelineData.map((item, index) => (
            <div key={index}>
              <p className="text-base font-semibold text-slate-500 mb-1">{item.year}</p>
              <h3 className="font-bold text-[#282828] text-2xl whitespace-pre-line leading-snug">{item.recipient}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Recipients.displayName = 'Recipients';
export default Recipients;