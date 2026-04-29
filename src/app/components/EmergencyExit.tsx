import { LogOut } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

export function EmergencyExit() {
  const { t } = useLanguage();

  const handleEmergencyExit = () => {
    // Clear session storage
    sessionStorage.clear();
    
    // Clear local storage
    localStorage.clear();
    
    // Clear any form data
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
    
    // Redirect to a neutral site
    window.location.replace('https://www.weather.com');
  };

  // Add keyboard listener for ESC key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleEmergencyExit();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <button
      onClick={handleEmergencyExit}
      className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 transition-all hover:scale-105"
      aria-label={t('Emergency exit - leaves site immediately', 'Salida de emergencia - sale del sitio inmediatamente')}
      title={t('Press ESC or click to exit immediately', 'Presiona ESC o haz clic para salir inmediatamente')}
    >
      <LogOut className="w-4 h-4" />
      <span className="hidden sm:inline">{t('Quick Exit', 'Salida Rápida')}</span>
      <span className="sm:hidden">ESC</span>
    </button>
  );
}