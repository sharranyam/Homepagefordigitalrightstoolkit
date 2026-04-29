import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4">
              {t('About This Site', 'Acerca de Este Sitio')}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t(
                'Created by student organizers and community advocates at George Mason University to provide accessible information about digital privacy rights.',
                'Creado por organizadores estudiantiles y defensores comunitarios en George Mason University para proporcionar información accesible sobre derechos de privacidad digital.'
              )}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">
              {t('Important Contacts', 'Contactos Importantes')}
            </h3>
            <div className="text-sm text-slate-300 space-y-2">
              <div>UndocuMason: undocumason@gmu.edu</div>
              <div>{t('FERPA Questions:', 'Preguntas sobre FERPA:')} ferpa@gmu.edu</div>
              <div>{t('Student Legal Services:', 'Servicios Legales Estudiantiles:')} (703) 993-8855</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">
              {t('Privacy & Safety', 'Privacidad y Seguridad')}
            </h3>
            <p className="text-sm text-slate-300 mb-3">
              {t(
                'This site collects no personal data and uses no tracking cookies.',
                'Este sitio no recopila datos personales y no usa cookies de rastreo.'
              )}
            </p>
            <div className="text-xs text-slate-400">
              {t('Press ESC key anytime for emergency exit', 'Presiona la tecla ESC en cualquier momento para salida de emergencia')}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            {t('Last updated: April 6, 2026', 'Última actualización: 6 de abril de 2026')}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-900 text-amber-200 rounded text-xs">
              ⚠️ {t('Not Legal Advice', 'No es Asesoramiento Legal')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
