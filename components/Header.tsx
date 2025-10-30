import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onFocusClick: () => void;
  onRecipientsClick: () => void;
  onCriteriaClick: () => void;
  onApplyClick: () => void;
  onFaqClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFocusClick, onRecipientsClick, onCriteriaClick, onApplyClick, onFaqClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-12 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black font-header">
            Ernst B. Sund Fonden
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onFocusClick} className="text-black hover:text-slate-600 transition-colors">Fokus</button>
            <button onClick={onRecipientsClick} className="text-black hover:text-slate-600 transition-colors">Modtagere</button>
            <button onClick={onCriteriaClick} className="text-black hover:text-slate-600 transition-colors">Kriterier</button>
            <button onClick={onFaqClick} className="text-black hover:text-slate-600 transition-colors">FAQ</button>
            <button onClick={onApplyClick} className="bg-slate-800 text-white py-2 px-5 rounded-md hover:bg-slate-700 transition-colors">
              Ansøg
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={onApplyClick} className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-colors text-sm">
              Ansøg
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;