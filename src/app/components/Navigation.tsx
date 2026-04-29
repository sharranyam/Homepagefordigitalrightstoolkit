import { Link, useLocation } from 'react-router';
import { Menu, X, Languages, Shield } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', labelEn: 'Home', labelEs: 'Inicio' },
    { path: '/your-rights', labelEn: 'Your Rights', labelEs: 'Tus Derechos' },
    { path: '/know-your-campus', labelEn: 'Know Your Campus', labelEs: 'Conoce Tu Campus' },
    { path: '/social-media', labelEn: 'Social Media Guide', labelEs: 'Guía de Redes Sociales' },
    { path: '/go-anonymous', labelEn: 'Go Anonymous', labelEs: 'Hacerte Anónimo' },
    { path: '/opt-out', labelEn: 'Opt-Out Toolkit', labelEs: 'Kit de Exclusión' },
    { path: '/quick-exit', labelEn: 'Quick Exit', labelEs: 'Salida Rápida' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline">
              {t('Digital Rights Resource', 'Recurso de Derechos Digitales')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm hover:text-blue-400 transition-colors ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelEs}
              </Link>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1 px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 hover:bg-slate-800 ${
                  location.pathname === item.path ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelEs}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-slate-800 flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {t('Switch to Spanish', 'Cambiar a Inglés')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
