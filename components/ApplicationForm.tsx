import React, { useState, forwardRef, FormEvent } from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <input id={id} {...props} className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500" />
  </div>
);

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <textarea id={id} {...props} className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"></textarea>
  </div>
);

const ApplicationForm = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTitle: '',
    projectSummary: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('File:', file?.name);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <section ref={ref} className="py-20 md:py-32 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Tak!</h2>
            <p className="mt-4 text-lg text-slate-600">Din ansøgning er modtaget. Vi vil gennemgå din indsendelse og kontakte dig inden for 90 dage. Vi sætter pris på din interesse i Ernst B. Sund Fonden.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Legatansøgning</h2>
          <p className="mt-4 text-lg text-slate-600">Udfyld venligst formularen nedenfor for at påbegynde din ansøgning.</p>
        </div>
        <div className="max-w-2xl bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Fulde navn" id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
            <Input label="E-mailadresse" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <Input label="Projekttitel" id="projectTitle" name="projectTitle" type="text" value={formData.projectTitle} onChange={handleChange} required />
            <Textarea label="Projektsammendrag (maks. 250 ord)" id="projectSummary" name="projectSummary" rows={5} value={formData.projectSummary} onChange={handleChange} required />
            <div>
              <label htmlFor="proposal" className="block text-sm font-medium text-slate-700 mb-1">Ansøgnings-pdf</label>
              <input 
                id="proposal" 
                name="proposal" 
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange} 
                required 
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
              />
              <p className="mt-1 text-xs text-slate-500">Upload venligst din komplette ansøgning som en enkelt PDF-fil (maks. 10MB).</p>
            </div>
            <div>
              <button type="submit" className="w-full bg-slate-800 text-white py-3 px-6 rounded-md hover:bg-slate-700 transition-colors text-lg font-semibold">
                Indsend ansøgning
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

ApplicationForm.displayName = 'ApplicationForm';
export default ApplicationForm;