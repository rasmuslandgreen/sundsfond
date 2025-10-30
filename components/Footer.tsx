import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-12 py-12">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Ernst B. Sund Fonden</h3>
          <p>c/o. Peter engel møller</p>
          <p>Larsensvej 22</p>
          <p>2950 Vedbæk</p>
          <p className="mt-2">
            <a href="mailto:peter@kkornum.dk" className="text-[#4285F4] underline hover:opacity-80 transition-opacity">peter@kkornum.dk</a>
          </p>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-12 text-sm">
          <p>&copy; {new Date().getFullYear()} Ernst B. Sund Fonden. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;