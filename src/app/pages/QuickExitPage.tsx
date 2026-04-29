import { LogOut, Shield, Share2, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function QuickExitPage() {
  const { t } = useLanguage();

  const handleEmergencyExit = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.replace('https://www.weather.com');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Quick Exit and Site Safety', 'Salida Rápida y Seguridad del Sitio')}
          </h1>
          <p className="text-xl text-slate-700">
            {t('How this site protects you', 'Cómo este sitio te protege')}
          </p>
        </div>

        {/* Emergency Exit Button Explainer */}
        <section className="mb-16">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center">
                <LogOut className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-red-900">
                {t('Emergency Exit Button', 'Botón de Salida de Emergencia')}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-red-300 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-red-900">
                  {t('How it works:', 'Cómo funciona:')}
                </h3>
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      1
                    </div>
                    <p>
                      {t(
                        'Clears all session data - removes any trace that you visited this site from your current browsing session',
                        'Borra todos los datos de sesión - elimina cualquier rastro de que visitaste este sitio de tu sesión de navegación actual'
                      )}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      2
                    </div>
                    <p>
                      {t(
                        'Clears local storage - removes any saved preferences or checkboxes you checked',
                        'Borra el almacenamiento local - elimina cualquier preferencia guardada o casillas que marcaste'
                      )}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      3
                    </div>
                    <p>
                      {t(
                        'Immediately redirects to Weather.com - a neutral, commonly visited site that won\'t raise suspicion',
                        'Redirige inmediatamente a Weather.com - un sitio neutral comúnmente visitado que no levantará sospechas'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-red-300 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-red-900">
                  {t('When to use it:', 'Cuándo usarlo:')}
                </h3>
                <ul className="list-disc list-inside text-slate-800 space-y-2">
                  <li>{t('Someone enters the room unexpectedly', 'Alguien entra a la habitación inesperadamente')}</li>
                  <li>{t('You need to leave the site immediately for safety reasons', 'Necesitas salir del sitio inmediatamente por razones de seguridad')}</li>
                  <li>{t('You\'re on a shared or public computer', 'Estás en una computadora compartida o pública')}</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-amber-900">
                  <strong>{t('Note:', 'Nota:')}</strong> {t(
                    'The emergency exit button does NOT clear your browser history. For complete privacy, also clear your browser history manually or use private browsing mode.',
                    'El botón de salida de emergencia NO borra tu historial de navegación. Para privacidad completa, también borra tu historial de navegación manualmente o usa el modo de navegación privada.'
                  )}
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleEmergencyExit}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg flex items-center gap-3 mx-auto transition-all hover:scale-105 shadow-lg"
                >
                  <LogOut className="w-6 h-6" />
                  {t('Test Emergency Exit', 'Probar Salida de Emergencia')}
                </button>
                <p className="mt-3 text-sm text-slate-600">
                  {t('(Will redirect to Weather.com)', '(Redirigirá a Weather.com)')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Site Privacy Practices */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-slate-900">
                {t("This Site's Privacy Practices", 'Prácticas de Privacidad de Este Sitio')}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="text-lg mb-3 text-green-900 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {t('What we DO:', 'Lo que HACEMOS:')}
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{t('Use minimal localStorage only for checkbox tracking (opt-out progress)', 'Usamos almacenamiento local mínimo solo para rastreo de casillas (progreso de exclusión)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{t('Store your language preference (EN/ES) in browser memory only', 'Almacenamos tu preferencia de idioma (EN/ES) solo en la memoria del navegador')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{t('Provide all information without requiring account creation', 'Proporcionamos toda la información sin requerir creación de cuenta')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{t('Open source our code for community review', 'Hacemos de código abierto nuestro código para revisión comunitaria')}</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-lg mb-3 text-red-900 flex items-center gap-2">
                  <EyeOff className="w-5 h-5" />
                  {t('What we DO NOT do:', 'Lo que NO hacemos:')}
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Collect ANY personal information (no names, emails, or phone numbers)', 'Recopilar NINGUNA información personal (sin nombres, correos electrónicos o números de teléfono)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Use analytics or tracking cookies', 'Usar análisis o cookies de rastreo')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Share data with third parties', 'Compartir datos con terceros')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Track your IP address or device fingerprint', 'Rastrear tu dirección IP o huella digital del dispositivo')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Require account creation or login', 'Requerir creación de cuenta o inicio de sesión')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Use advertising or marketing trackers', 'Usar rastreadores de publicidad o marketing')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                <h3 className="text-lg mb-3 text-blue-900">
                  {t('Technical Details:', 'Detalles Técnicos:')}
                </h3>
                <div className="space-y-3 text-sm text-blue-800">
                  <div>
                    <strong>{t('Cookies:', 'Cookies:')}</strong> {t('None. We use sessionStorage and localStorage only.', 'Ninguna. Usamos solo sessionStorage y localStorage.')}
                  </div>
                  <div>
                    <strong>{t('External Scripts:', 'Scripts Externos:')}</strong> {t('None. All code runs locally in your browser.', 'Ninguno. Todo el código se ejecuta localmente en tu navegador.')}
                  </div>
                  <div>
                    <strong>{t('Server Logging:', 'Registro del Servidor:')}</strong> {t('Standard web server logs only (IP, time, page) - not analyzed or shared.', 'Solo registros estándar del servidor web (IP, hora, página) - no se analizan ni comparten.')}
                  </div>
                  <div>
                    <strong>{t('Data Retention:', 'Retención de Datos:')}</strong> {t('Nothing stored on our servers. Your browser data clears when you close the tab or use emergency exit.', 'Nada se almacena en nuestros servidores. Los datos de tu navegador se borran cuando cierras la pestaña o usas la salida de emergencia.')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safe Sharing */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-slate-900">
                {t('How to Safely Share This Site', 'Cómo Compartir Este Sitio de Forma Segura')}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg mb-3 text-slate-900">
                  {t('Ways to share without creating a traceable link:', 'Formas de compartir sin crear un enlace rastreable:')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-slate-900">
                        {t('In-person or phone call', 'En persona o llamada telefónica')}
                      </h4>
                      <p className="text-sm text-slate-700">
                        {t(
                          'The safest way. Verbally tell someone the website address. No digital trail.',
                          'La forma más segura. Dile verbalmente a alguien la dirección del sitio web. Sin rastro digital.'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-slate-900">
                        {t('Encrypted messaging apps', 'Aplicaciones de mensajería cifrada')}
                      </h4>
                      <p className="text-sm text-slate-700 mb-2">
                        {t(
                          'Signal, WhatsApp (with disappearing messages enabled), or Telegram secret chats provide end-to-end encryption.',
                          'Signal, WhatsApp (con mensajes que desaparecen habilitados) o chats secretos de Telegram proporcionan cifrado de extremo a extremo.'
                        )}
                      </p>
                      <div className="bg-amber-50 border border-amber-300 rounded p-3 text-sm text-amber-900">
                        ⚠️ {t('Enable "Disappearing Messages" so the link auto-deletes after being read', 'Habilita "Mensajes que Desaparecen" para que el enlace se elimine automáticamente después de ser leído')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-slate-900">
                        {t('QR code (printed)', 'Código QR (impreso)')}
                      </h4>
                      <p className="text-sm text-slate-700">
                        {t(
                          'Generate a QR code for the website, print it, and hand it to someone. No digital messaging history.',
                          'Genera un código QR para el sitio web, imprímelo y entregáselo a alguien. Sin historial de mensajería digital.'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-slate-900">
                        {t('Temporary note services', 'Servicios de notas temporales')}
                      </h4>
                      <p className="text-sm text-slate-700 mb-2">
                        {t(
                          'Use PrivateBin, Burn Note, or similar services that create self-destructing messages. Share the one-time link.',
                          'Usa PrivateBin, Burn Note o servicios similares que crean mensajes que se autodestruyen. Comparte el enlace de un solo uso.'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-lg mb-3 text-red-900">
                  {t('What NOT to do:', 'Lo que NO debes hacer:')}
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Post the link on public social media (Facebook, Twitter, Instagram, TikTok)', 'Publicar el enlace en redes sociales públicas (Facebook, Twitter, Instagram, TikTok)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Email it using school or work email accounts (these can be monitored)', 'Enviarlo por correo electrónico usando cuentas de correo de escuela o trabajo (estas pueden ser monitoreadas)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Send via regular SMS text message (not encrypted)', 'Enviar vía mensaje de texto SMS regular (no cifrado)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{t('Share in group chats with people you don\'t fully trust', 'Compartir en chats grupales con personas en las que no confías completamente')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg mb-3 text-blue-900">
                  {t('For organizers and advocates:', 'Para organizadores y defensores:')}
                </h3>
                <p className="text-blue-800 mb-3">
                  {t(
                    'If you\'re sharing this site as part of community education or organizing work:',
                    'Si estás compartiendo este sitio como parte de educación comunitaria o trabajo de organización:'
                  )}
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>{t('Print flyers with the URL (no QR code if flyers will be public)', 'Imprime volantes con la URL (sin código QR si los volantes serán públicos)')}</li>
                  <li>{t('Mention it verbally in community meetings or workshops', 'Menciónalo verbalmente en reuniones comunitarias o talleres')}</li>
                  <li>{t('Share through trusted community channels (Signal groups, WhatsApp lists)', 'Comparte a través de canales comunitarios de confianza (grupos de Signal, listas de WhatsApp)')}</li>
                  <li>{t('Do NOT include tracking parameters in the URL', 'NO incluyas parámetros de rastreo en la URL')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
