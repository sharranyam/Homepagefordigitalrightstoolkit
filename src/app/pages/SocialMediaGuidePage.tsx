import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function SocialMediaGuidePage() {
  const { t } = useLanguage();
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const platforms = [
    {
      name: 'TikTok',
      color: 'from-pink-500 to-cyan-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-900',
      dangerLevel: 'high',
      collectsEn: 'GPS location, biometric face data, keystroke patterns, immigration/citizenship status (new policy), in-app browser tracking',
      collectsEs: 'Ubicación GPS, datos biométricos faciales, patrones de pulsación de teclas, estatus migratorio/ciudadanía (nueva política), rastreo del navegador en la aplicación',
      threatEn: 'In-app browser injects tracking code into external websites you visit from TikTok',
      threatEs: 'El navegador en la aplicación inyecta código de rastreo en sitios web externos que visitas desde TikTok',
      contextEn: 'Oracle/Larry Ellison connection - major Trump donor now hosts TikTok US data',
      contextEs: 'Conexión Oracle/Larry Ellison - importante donante de Trump ahora aloja datos de TikTok en EE.UU.',
      optOutSteps: [
        { en: 'Open phone Settings > Privacy & Security > Location Services', es: 'Abre Configuración del teléfono > Privacidad y Seguridad > Servicios de Ubicación' },
        { en: 'Find TikTok in the list and set to "Never"', es: 'Encuentra TikTok en la lista y configura en "Nunca"' },
        { en: 'In TikTok app: Profile > Menu > Settings and privacy', es: 'En la aplicación TikTok: Perfil > Menú > Configuración y privacidad' },
        { en: 'Privacy > Personalization and data > toggle OFF "Personalized ads"', es: 'Privacidad > Personalización y datos > desactiva "Anuncios personalizados"' },
        { en: 'Privacy > toggle OFF "Allow camera access" if you don\'t post videos', es: 'Privacidad > desactiva "Permitir acceso a la cámara" si no publicas videos' }
      ]
    },
    {
      name: 'X (Twitter)',
      color: 'from-slate-700 to-slate-900',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-300',
      textColor: 'text-slate-900',
      dangerLevel: 'high',
      collectsEn: 'Post history, direct messages, biometric data (verified users), voice recordings, every interaction used to train Grok AI',
      collectsEs: 'Historial de publicaciones, mensajes directos, datos biométricos (usuarios verificados), grabaciones de voz, cada interacción se usa para entrenar Grok AI',
      threatEn: 'Every post, like, and search you make trains Grok AI perpetually - cannot be deleted from training data',
      threatEs: 'Cada publicación, me gusta y búsqueda que haces entrena Grok AI perpetuamente - no se puede eliminar de los datos de entrenamiento',
      contextEn: 'Elon Musk political use - platform actively used for political influence and data collection',
      contextEs: 'Uso político de Elon Musk - plataforma utilizada activamente para influencia política y recopilación de datos',
      optOutSteps: [
        { en: 'Settings and Support > Settings and privacy > Privacy and safety', es: 'Configuración y Soporte > Configuración y privacidad > Privacidad y seguridad' },
        { en: 'Data sharing and personalization > toggle OFF all options', es: 'Compartir datos y personalización > desactiva todas las opciones' },
        { en: 'Grok > toggle OFF "Allow posts and interactions for training"', es: 'Grok > desactiva "Permitir publicaciones e interacciones para entrenamiento"' },
        { en: 'Location information > toggle OFF "Precise location"', es: 'Información de ubicación > desactiva "Ubicación precisa"' },
        { en: 'OR set account to Private to limit who sees your posts', es: 'O configura la cuenta como Privada para limitar quién ve tus publicaciones' }
      ]
    },
    {
      name: 'Instagram',
      color: 'from-purple-500 via-pink-500 to-orange-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      textColor: 'text-purple-900',
      dangerLevel: 'medium',
      collectsEn: 'Shadow profiles (tracks non-users too), physical movement patterns, inferred religion/race/sexuality, facial recognition data',
      collectsEs: 'Perfiles sombra (rastrea también a no usuarios), patrones de movimiento físico, religión/raza/sexualidad inferida, datos de reconocimiento facial',
      threatEn: 'Builds shadow profiles on people without Instagram accounts using contacts and tag data',
      threatEs: 'Construye perfiles sombra de personas sin cuentas de Instagram usando contactos y datos de etiquetas',
      contextEn: 'Meta pay-for-privacy EU model - showing how surveillance is the business model',
      contextEs: 'Modelo Meta de pago por privacidad en la UE - mostrando cómo la vigilancia es el modelo de negocio',
      optOutSteps: [
        { en: 'Settings > Accounts Center > Your information and permissions', es: 'Configuración > Centro de cuentas > Tu información y permisos' },
        { en: 'Ad preferences > toggle OFF "Data from partners"', es: 'Preferencias de anuncios > desactiva "Datos de socios"' },
        { en: 'Go to facebook.com/help/contact/540977946934669 to opt out of AI training', es: 'Ve a facebook.com/help/contact/540977946934669 para optar por no participar en entrenamiento de IA' },
        { en: 'Privacy > toggle OFF "Use precise location"', es: 'Privacidad > desactiva "Usar ubicación precisa"' },
        { en: 'Set account to Private to control who sees your content', es: 'Configura la cuenta como Privada para controlar quién ve tu contenido' }
      ]
    },
    {
      name: 'YouTube',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      textColor: 'text-red-900',
      dangerLevel: 'medium',
      collectsEn: 'Watch history, voice recordings (searches), search intent across Google services, geo-warrant location data',
      collectsEs: 'Historial de visualización, grabaciones de voz (búsquedas), intención de búsqueda en servicios de Google, datos de ubicación de orden geográfica',
      threatEn: 'Cross-references video watch history with Maps, Search, and Gmail to build 360° profile',
      threatEs: 'Hace referencia cruzada del historial de visualización de videos con Maps, Búsqueda y Gmail para construir un perfil de 360°',
      contextEn: 'Google data broker pipeline - all data feeds into advertising and law enforcement access',
      contextEs: 'Pipeline de intermediario de datos de Google - todos los datos alimentan publicidad y acceso de las fuerzas del orden',
      optOutSteps: [
        { en: 'Go to myactivity.google.com and sign in', es: 'Ve a myactivity.google.com e inicia sesión' },
        { en: 'Click "Auto-delete" and set to "Delete activity older than 3 months"', es: 'Haz clic en "Eliminar automáticamente" y configura en "Eliminar actividad mayor a 3 meses"' },
        { en: 'YouTube Settings > History & privacy > toggle OFF "Pause watch history"', es: 'Configuración de YouTube > Historial y privacidad > desactiva "Pausar historial de visualización"' },
        { en: 'Google Ads Settings > toggle OFF "Personalized ads"', es: 'Configuración de anuncios de Google > desactiva "Anuncios personalizados"' },
        { en: 'Phone Settings > Google > Manage your Google Account > Data & privacy > Location History OFF', es: 'Configuración del teléfono > Google > Administra tu cuenta de Google > Datos y privacidad > Historial de ubicación DESACTIVADO' }
      ]
    },
    {
      name: 'Snapchat',
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-900',
      dangerLevel: 'high',
      collectsEn: '3D face map via TrueDepth camera, Snap Map location (background tracking), My AI conversation history, biometric voice data',
      collectsEs: 'Mapa facial 3D vía cámara TrueDepth, ubicación de Snap Map (rastreo en segundo plano), historial de conversaciones de My AI, datos biométricos de voz',
      threatEn: 'TrueDepth camera creates precise 3D facial scan - most detailed biometric data of any social app',
      threatEs: 'La cámara TrueDepth crea un escaneo facial 3D preciso - datos biométricos más detallados de cualquier aplicación social',
      contextEn: 'Government heat map partnerships - Snap Map data used for crowd analysis and location tracking',
      contextEs: 'Asociaciones de mapas de calor del gobierno - datos de Snap Map usados para análisis de multitudes y rastreo de ubicación',
      optOutSteps: [
        { en: 'Settings > Privacy Controls > See My Location > set to "Ghost Mode"', es: 'Configuración > Controles de privacidad > Ver mi ubicación > configura en "Modo fantasma"' },
        { en: 'Scroll to "California Privacy Choices" > Request opt-out from data sales', es: 'Desplázate a "Opciones de privacidad de California" > Solicita optar por no participar en ventas de datos' },
        { en: 'Manage Preferences > Clear My AI chat history regularly', es: 'Administrar preferencias > Borra el historial de chat de My AI regularmente' },
        { en: 'Phone Settings > Snapchat > Location > set to "Never" or "While Using"', es: 'Configuración del teléfono > Snapchat > Ubicación > configura en "Nunca" o "Mientras se usa"' },
        { en: 'Permissions > toggle OFF microphone access if you don\'t send voice messages', es: 'Permisos > desactiva el acceso al micrófono si no envías mensajes de voz' }
      ]
    }
  ];

  const nextPlatform = () => {
    setCurrentPlatform((prev) => (prev + 1) % platforms.length);
  };

  const prevPlatform = () => {
    setCurrentPlatform((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  const toggleStep = (platformName: string, stepIndex: number) => {
    const key = `${platformName}-${stepIndex}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
    // Save to localStorage
    const updated = { ...completedSteps, [key]: !completedSteps[key] };
    localStorage.setItem('privacy-steps', JSON.stringify(updated));
  };

  // Load completed steps from localStorage on mount
  useState(() => {
    const saved = localStorage.getItem('privacy-steps');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  });

  const currentPlatformData = platforms[currentPlatform];

  const getDangerBadge = (level: string) => {
    if (level === 'high') {
      return (
        <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full">
          {t('High Risk', 'Riesgo Alto')}
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-amber-500 text-white text-sm rounded-full">
        {t('Medium Risk', 'Riesgo Medio')}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Social Media Privacy Guide', 'Guía de Privacidad en Redes Sociales')}
          </h1>
          <p className="text-xl text-slate-700">
            {t("What they're collecting", 'Lo que están recopilando')}
          </p>
        </div>

        {/* Platform Carousel */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${currentPlatformData.color} p-8 text-white`}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-4xl">{currentPlatformData.name}</h2>
                {getDangerBadge(currentPlatformData.dangerLevel)}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl mb-3 text-slate-900">
                  {t('What they collect:', 'Lo que recopilan:')}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t(currentPlatformData.collectsEn, currentPlatformData.collectsEs)}
                </p>
              </div>

              <div className={`${currentPlatformData.bgColor} border-2 ${currentPlatformData.borderColor} rounded-lg p-4 mb-6`}>
                <h3 className={`text-lg mb-2 ${currentPlatformData.textColor}`}>
                  ⚠️ {t('Unique Threat:', 'Amenaza Única:')}
                </h3>
                <p className={currentPlatformData.textColor}>
                  {t(currentPlatformData.threatEn, currentPlatformData.threatEs)}
                </p>
              </div>

              <div className="bg-slate-100 rounded-lg p-4 mb-6">
                <h3 className="text-lg mb-2 text-slate-900">
                  {t('Political Context:', 'Contexto Político:')}
                </h3>
                <p className="text-slate-700">
                  {t(currentPlatformData.contextEn, currentPlatformData.contextEs)}
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4 text-slate-900">
                  {t('How to Opt Out:', 'Cómo Optar por No Participar:')}
                </h3>
                <div className="space-y-3">
                  {currentPlatformData.optOutSteps.map((step, index) => {
                    const key = `${currentPlatformData.name}-${index}`;
                    const isCompleted = completedSteps[key];
                    
                    return (
                      <div
                        key={index}
                        className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
                          isCompleted
                            ? 'bg-green-50 border-green-300'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <button
                          onClick={() => toggleStep(currentPlatformData.name, index)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isCompleted
                              ? 'bg-green-500 border-green-500'
                              : 'bg-white border-slate-300 hover:border-green-500'
                          }`}
                        >
                          {isCompleted && <Check className="w-4 h-4 text-white" />}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center text-sm">
                              {index + 1}
                            </span>
                            <span className={isCompleted ? 'line-through text-slate-600' : 'text-slate-900'}>
                              {t(step.en, step.es)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200">
              <button
                onClick={prevPlatform}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                {t('Previous', 'Anterior')}
              </button>
              
              <div className="flex gap-2">
                {platforms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPlatform(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPlatform
                        ? 'bg-slate-900 w-8'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`${t('Go to platform', 'Ir a plataforma')} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPlatform}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t('Next', 'Siguiente')}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Unique Threat Table */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-3xl text-slate-900">
                {t('Unique Data Threats Comparison', 'Comparación de Amenazas de Datos Únicas')}
              </h2>
              <button
                onClick={() => alert(t('Saving as image...', 'Guardando como imagen...'))}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                {t('Save as Image', 'Guardar como Imagen')}
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-6">
              {t(
                'Each platform has one thing it does that others don\'t. Share this table to help others understand the risks.',
                'Cada plataforma tiene algo que hace que otras no. Comparte esta tabla para ayudar a otros a entender los riesgos.'
              )}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left p-4 text-slate-900">{t('Platform', 'Plataforma')}</th>
                    <th className="text-left p-4 text-slate-900">{t('Unique Threat', 'Amenaza Única')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">X (Twitter)</td>
                    <td className="p-4 text-slate-700">
                      {t(
                        'AI training inputs — every post trains Grok perpetually',
                        'Entradas de entrenamiento de IA — cada publicación entrena a Grok perpetuamente'
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">TikTok</td>
                    <td className="p-4 text-slate-700">
                      {t(
                        'In-app browser scripts injecting tracking code into external sites',
                        'Scripts del navegador en la aplicación inyectando código de rastreo en sitios externos'
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Instagram</td>
                    <td className="p-4 text-slate-700">
                      {t(
                        'Shadow profiles built on people without accounts',
                        'Perfiles sombra construidos sobre personas sin cuentas'
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Snapchat</td>
                    <td className="p-4 text-slate-700">
                      {t(
                        'TrueDepth camera — precise 3D face mapping',
                        'Cámara TrueDepth — mapeo facial 3D preciso'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">YouTube</td>
                    <td className="p-4 text-slate-700">
                      {t(
                        'Search intent — cross-references video/search/maps for 360° profile',
                        'Intención de búsqueda — hace referencia cruzada de video/búsqueda/mapas para perfil de 360°'
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
