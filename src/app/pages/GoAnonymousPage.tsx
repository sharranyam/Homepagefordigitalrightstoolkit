import { useState } from 'react';
import { Check, Shield, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function GoAnonymousPage() {
  const { t } = useLanguage();
  const [deviceType, setDeviceType] = useState<'ios' | 'android'>('ios');

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Go Anonymous', 'Hacerte Anónimo')}
          </h1>
          <p className="text-xl text-slate-700">
            {t('How to disappear online', 'Cómo desaparecer en línea')}
          </p>
        </div>

        {/* Create Anonymous Accounts */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-slate-900">
                {t('Create Accounts That Aren\'t Linked to You', 'Crea Cuentas que No Estén Vinculadas a Ti')}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-blue-900">
                    {t('Use a VoIP number instead of your real phone', 'Usa un número VoIP en lugar de tu teléfono real')}
                  </h3>
                  <p className="text-blue-800 mb-3">
                    {t(
                      'Most social media platforms require a phone number for verification. Use a virtual number that isn\'t connected to your identity.',
                      'La mayoría de las plataformas de redes sociales requieren un número de teléfono para verificación. Usa un número virtual que no esté conectado a tu identidad.'
                    )}
                  </p>
                  <div className="bg-white p-3 rounded">
                    <div className="mb-2 text-blue-900">
                      {t('Recommended services:', 'Servicios recomendados:')}
                    </div>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li>Google Voice (free, US only)</li>
                      <li>TextNow (free, ad-supported)</li>
                      <li>Burner (paid, more private)</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-300 rounded text-sm text-amber-900">
                    ⚠️ {t('Warning: Don\'t use the same VoIP number across multiple sensitive accounts', 'Advertencia: No uses el mismo número VoIP en múltiples cuentas sensibles')}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-green-900">
                    {t('Create a separate email not linked to your name', 'Crea un correo electrónico separado que no esté vinculado a tu nombre')}
                  </h3>
                  <p className="text-green-800 mb-3">
                    {t(
                      'Use an encrypted email service that doesn\'t require personal information to sign up.',
                      'Usa un servicio de correo electrónico cifrado que no requiera información personal para registrarse.'
                    )}
                  </p>
                  <div className="bg-white p-3 rounded">
                    <div className="mb-2 text-green-900">
                      {t('Recommended:', 'Recomendado:')}
                    </div>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                      <li>ProtonMail (free tier available, Swiss privacy laws)</li>
                      <li>Tutanota (free, German privacy laws)</li>
                      <li>Guerrilla Mail (temporary, for one-time verification only)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-purple-900">
                    {t('Use a different device or browser profile', 'Usa un dispositivo o perfil de navegador diferente')}
                  </h3>
                  <p className="text-purple-800 mb-3">
                    {t(
                      'Your device fingerprint can link your anonymous and real accounts. Create separation.',
                      'La huella digital de tu dispositivo puede vincular tus cuentas anónimas y reales. Crea separación.'
                    )}
                  </p>
                  <div className="bg-white p-3 rounded text-purple-800">
                    <ul className="list-disc list-inside space-y-1">
                      <li>{t('Use a separate browser (Firefox for anonymous, Chrome for personal)', 'Usa un navegador separado (Firefox para anónimo, Chrome para personal)')}</li>
                      <li>{t('Create a separate browser profile/container', 'Crea un perfil/contenedor de navegador separado')}</li>
                      <li>{t('If possible, use an old phone or tablet only for anonymous accounts', 'Si es posible, usa un teléfono o tableta antiguo solo para cuentas anónimas')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-orange-900">
                    {t('Do not cross-post between real and anonymous accounts', 'No publiques de forma cruzada entre cuentas reales y anónimas')}
                  </h3>
                  <p className="text-orange-800">
                    {t(
                      'Sharing the same photo, using similar language patterns, or posting at the same times can link your accounts. Keep them completely separate.',
                      'Compartir la misma foto, usar patrones de lenguaje similares o publicar a las mismas horas puede vincular tus cuentas. Mantenlas completamente separadas.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-red-900">
                    {t('Avoid profile photos, location tags, or identifying details', 'Evita fotos de perfil, etiquetas de ubicación o detalles identificables')}
                  </h3>
                  <p className="text-red-800 mb-3">
                    {t(
                      'Anything that makes you identifiable defeats the purpose of an anonymous account.',
                      'Cualquier cosa que te haga identificable derrota el propósito de una cuenta anónima.'
                    )}
                  </p>
                  <div className="bg-white p-3 rounded text-red-800">
                    <ul className="list-disc list-inside space-y-1">
                      <li>{t('Use a generic avatar or illustration, not your photo', 'Usa un avatar genérico o ilustración, no tu foto')}</li>
                      <li>{t('Turn off location services for the app', 'Desactiva los servicios de ubicación para la aplicación')}</li>
                      <li>{t('Don\'t mention your city, school, workplace, or other identifying details', 'No menciones tu ciudad, escuela, lugar de trabajo u otros detalles identificables')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Browsers and VPNs */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-slate-900">
                {t('Private Browsers and VPNs', 'Navegadores Privados y VPNs')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Incognito Mode */}
              <div className="border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-slate-900">
                  {t('Incognito/Private Mode', 'Modo Incógnito/Privado')}
                </h3>
                <div className="mb-4">
                  <div className="text-sm mb-2 text-green-700">
                    ✓ {t('What it DOES hide:', 'Lo que SÍ oculta:')}
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
                    <li>{t('Your browsing history on this device', 'Tu historial de navegación en este dispositivo')}</li>
                    <li>{t('Cookies after you close the window', 'Cookies después de cerrar la ventana')}</li>
                  </ul>
                  <div className="text-sm mb-2 text-red-700">
                    ✗ {t('What it DOESN\'T hide:', 'Lo que NO oculta:')}
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>{t('Your IP address from websites', 'Tu dirección IP de los sitios web')}</li>
                    <li>{t('Your activity from your internet provider (ISP)', 'Tu actividad de tu proveedor de internet (ISP)')}</li>
                    <li>{t('Your activity from your employer or school network', 'Tu actividad de la red de tu empleador o escuela')}</li>
                  </ul>
                </div>
              </div>

              {/* VPNs */}
              <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-blue-900">
                  {t('VPNs (Virtual Private Networks)', 'VPNs (Redes Privadas Virtuales)')}
                </h3>
                <div className="mb-4">
                  <div className="text-sm mb-2 text-green-700">
                    ✓ {t('What they DO:', 'Lo que HACEN:')}
                  </div>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1 mb-4">
                    <li>{t('Hide your IP address from websites you visit', 'Ocultan tu dirección IP de los sitios web que visitas')}</li>
                    <li>{t('Encrypt your traffic from your ISP/network', 'Cifran tu tráfico de tu ISP/red')}</li>
                    <li>{t('Make it look like you\'re in a different location', 'Hacen que parezca que estás en una ubicación diferente')}</li>
                  </ul>
                  <div className="text-sm mb-2 text-red-700">
                    ✗ {t('What they DON\'T do:', 'Lo que NO hacen:')}
                  </div>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>{t('Your VPN provider can still see everything', 'Tu proveedor de VPN aún puede ver todo')}</li>
                    <li>{t('They don\'t hide you if you log into accounts', 'No te ocultan si inicias sesión en cuentas')}</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="mb-2 text-blue-900">
                    {t('Recommended free VPNs:', 'VPNs gratuitas recomendadas:')}
                  </div>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Proton VPN (free tier, no logs policy)</li>
                    <li>Mullvad (paid but privacy-focused, accepts cash)</li>
                  </ul>
                </div>
              </div>

              {/* Tor Browser */}
              <div className="border-2 border-purple-300 bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-purple-900">
                  Tor Browser
                </h3>
                <p className="text-sm text-purple-800 mb-3">
                  {t(
                    'Strongest protection available. Routes your traffic through multiple encrypted servers. Slower but much more private.',
                    'La protección más fuerte disponible. Enruta tu tráfico a través de múltiples servidores cifrados. Más lento pero mucho más privado.'
                  )}
                </p>
                <div className="text-sm mb-2 text-purple-900">
                  {t('When to use it:', 'Cuándo usarlo:')}
                </div>
                <ul className="list-disc list-inside text-sm text-purple-800 space-y-1 mb-3">
                  <li>{t('Maximum anonymity needed', 'Se necesita anonimato máximo')}</li>
                  <li>{t('Accessing blocked or censored content', 'Acceder a contenido bloqueado o censurado')}</li>
                  <li>{t('Researching sensitive topics', 'Investigar temas sensibles')}</li>
                </ul>
                <a
                  href="https://www.torproject.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-sm"
                >
                  {t('Download Tor Browser', 'Descargar Tor Browser')}
                </a>
              </div>

              {/* Brave Browser */}
              <div className="border-2 border-orange-300 bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-orange-900">
                  Brave Browser
                </h3>
                <p className="text-sm text-orange-800 mb-3">
                  {t(
                    'Private by default. Blocks trackers and ads automatically. Good middle ground between convenience and privacy.',
                    'Privado por defecto. Bloquea rastreadores y anuncios automáticamente. Buen punto medio entre conveniencia y privacidad.'
                  )}
                </p>
                <div className="text-sm mb-2 text-orange-900">
                  {t('Built-in features:', 'Características integradas:')}
                </div>
                <ul className="list-disc list-inside text-sm text-orange-800 space-y-1 mb-3">
                  <li>{t('Ad and tracker blocking', 'Bloqueo de anuncios y rastreadores')}</li>
                  <li>{t('Fingerprinting protection', 'Protección de huellas digitales')}</li>
                  <li>{t('Private Tor tabs available', 'Pestañas privadas de Tor disponibles')}</li>
                </ul>
                <a
                  href="https://brave.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                >
                  {t('Download Brave', 'Descargar Brave')}
                </a>
              </div>
            </div>

            <div className="mt-6 bg-slate-100 border-l-4 border-slate-500 p-4 rounded-r-lg">
              <h3 className="text-lg mb-2 text-slate-900">
                {t('DNS-over-HTTPS', 'DNS sobre HTTPS')}
              </h3>
              <p className="text-slate-700 text-sm mb-3">
                {t(
                  'One setting that hides what websites you visit from your ISP. Most browsers support this now.',
                  'Una configuración que oculta qué sitios web visitas de tu ISP. La mayoría de los navegadores lo soportan ahora.'
                )}
              </p>
              <div className="text-sm text-slate-800">
                <strong>{t('How to enable:', 'Cómo habilitar:')}</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t('Firefox: Settings > Privacy & Security > Enable DNS over HTTPS', 'Firefox: Configuración > Privacidad y Seguridad > Habilitar DNS sobre HTTPS')}</li>
                  <li>{t('Chrome: Settings > Privacy and security > Security > Use secure DNS', 'Chrome: Configuración > Privacidad y seguridad > Seguridad > Usar DNS seguro')}</li>
                  <li>{t('Brave: Enabled by default', 'Brave: Habilitado por defecto')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Settings by Device */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-3xl text-slate-900">
                {t('Privacy Settings by Device', 'Configuración de Privacidad por Dispositivo')}
              </h2>
            </div>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setDeviceType('ios')}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  deviceType === 'ios'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                iPhone (iOS)
              </button>
              <button
                onClick={() => setDeviceType('android')}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  deviceType === 'android'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Android
              </button>
            </div>

            {deviceType === 'ios' && (
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-blue-900">
                      {t('Turn off App Tracking', 'Desactivar Rastreo de Aplicaciones')}
                    </h3>
                    <p className="text-sm text-blue-800">
                      {t('Settings > Privacy & Security > Tracking > toggle OFF "Allow Apps to Request to Track"', 'Configuración > Privacidad y Seguridad > Rastreo > desactiva "Permitir que las aplicaciones soliciten rastreo"')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-blue-900">
                      {t('Set Location to "While Using" or "Never"', 'Configurar Ubicación en "Mientras se usa" o "Nunca"')}
                    </h3>
                    <p className="text-sm text-blue-800">
                      {t('Settings > Privacy & Security > Location Services > go through each app and set to "While Using App" or "Never"', 'Configuración > Privacidad y Seguridad > Servicios de Ubicación > revisa cada aplicación y configura en "Mientras se usa la aplicación" o "Nunca"')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-blue-900">
                      {t('Disable Siri Microphone Access', 'Desactivar Acceso al Micrófono de Siri')}
                    </h3>
                    <p className="text-sm text-blue-800">
                      {t('Settings > Siri & Search > toggle OFF "Listen for \'Hey Siri\'" and "Press Side Button for Siri"', 'Configuración > Siri y Búsqueda > desactiva "Escuchar \'Oye Siri\'" y "Presionar botón lateral para Siri"')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-blue-900">
                      {t('Turn off Bluetooth and WiFi when not in use', 'Desactivar Bluetooth y WiFi cuando no se usen')}
                    </h3>
                    <p className="text-sm text-blue-800">
                      {t('Prevents location tracking via signal triangulation. Swipe down from top-right and tap to disable.', 'Previene el rastreo de ubicación mediante triangulación de señal. Desliza hacia abajo desde la esquina superior derecha y toca para desactivar.')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {deviceType === 'android' && (
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-green-900">
                      {t('Turn off Advertising ID', 'Desactivar ID de Publicidad')}
                    </h3>
                    <p className="text-sm text-green-800">
                      {t('Settings > Privacy > Ads > Delete advertising ID', 'Configuración > Privacidad > Anuncios > Eliminar ID de publicidad')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-green-900">
                      {t('Set Location to "Only while in use"', 'Configurar Ubicación en "Solo mientras se usa"')}
                    </h3>
                    <p className="text-sm text-green-800">
                      {t('Settings > Location > App permissions > go through each app and set to "Allow only while using the app" or "Don\'t allow"', 'Configuración > Ubicación > Permisos de aplicaciones > revisa cada aplicación y configura en "Permitir solo mientras se usa la aplicación" o "No permitir"')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-green-900">
                      {t('Disable Usage & Diagnostics', 'Desactivar Uso y Diagnósticos')}
                    </h3>
                    <p className="text-sm text-green-800">
                      {t('Settings > Privacy > Advanced > Usage & diagnostics > toggle OFF', 'Configuración > Privacidad > Avanzado > Uso y diagnósticos > desactivar')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-green-900">
                      {t('Disable Google Assistant microphone', 'Desactivar micrófono del Asistente de Google')}
                    </h3>
                    <p className="text-sm text-green-800">
                      {t('Settings > Google > Search, Assistant & Voice > Google Assistant > toggle OFF "Hey Google"', 'Configuración > Google > Búsqueda, Asistente y Voz > Asistente de Google > desactivar "Hey Google"')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-green-900">
                      {t('Turn off Bluetooth and WiFi when not in use', 'Desactivar Bluetooth y WiFi cuando no se usen')}
                    </h3>
                    <p className="text-sm text-green-800">
                      {t('Swipe down from top of screen and tap icons to disable. Prevents location tracking.', 'Desliza hacia abajo desde la parte superior de la pantalla y toca los íconos para desactivar. Previene el rastreo de ubicación.')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
