import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-slate-900">404</h1>
        <p className="text-2xl mb-8 text-slate-700">
          {t('Page not found', 'Página no encontrada')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          {t('Go back home', 'Volver al inicio')}
        </Link>
      </div>
    </div>
  );
}
