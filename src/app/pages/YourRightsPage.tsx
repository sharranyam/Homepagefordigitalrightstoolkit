import { useState } from 'react';
import { Download, Share2, ChevronDown, ChevronUp, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function YourRightsPage() {
  const { t } = useLanguage();
  const [expandedRight, setExpandedRight] = useState<number | null>(null);

  const legalChart = [
    {
      scenarioEn: 'ICE at your door',
      scenarioEs: 'ICE en tu puerta',
      unlockPhone: 'no',
      givePassword: 'no',
      answerQuestions: 'depends',
      socialMedia: 'no'
    },
    {
      scenarioEn: 'Police with warrant',
      scenarioEs: 'Policía con orden judicial',
      unlockPhone: 'yes',
      givePassword: 'depends',
      answerQuestions: 'no',
      socialMedia: 'yes'
    },
    {
      scenarioEn: 'Employer request',
      scenarioEs: 'Solicitud del empleador',
      unlockPhone: 'no',
      givePassword: 'no',
      answerQuestions: 'no',
      socialMedia: 'depends'
    },
    {
      scenarioEn: 'School request',
      scenarioEs: 'Solicitud de la escuela',
      unlockPhone: 'no',
      givePassword: 'no',
      answerQuestions: 'depends',
      socialMedia: 'no'
    },
    {
      scenarioEn: 'Court order',
      scenarioEs: 'Orden judicial',
      unlockPhone: 'yes',
      givePassword: 'yes',
      answerQuestions: 'depends',
      socialMedia: 'yes'
    },
    {
      scenarioEn: 'FOIA request',
      scenarioEs: 'Solicitud FOIA',
      unlockPhone: 'no',
      givePassword: 'no',
      answerQuestions: 'no',
      socialMedia: 'depends'
    }
  ];

  const coreRights = [
    {
      titleEn: 'Right to remain silent',
      titleEs: 'Derecho a permanecer en silencio',
      descriptionEn: 'You do not have to answer questions about your immigration status, where you were born, or how you entered the United States.',
      descriptionEs: 'No tienes que responder preguntas sobre tu estatus migratorio, dónde naciste o cómo entraste a los Estados Unidos.',
      scriptEn: 'Say: "I am exercising my right to remain silent. I do not wish to answer any questions."',
      scriptEs: 'Di: "Estoy ejerciendo mi derecho a permanecer en silencio. No deseo responder ninguna pregunta."'
    },
    {
      titleEn: 'Right to refuse entry without a warrant',
      titleEs: 'Derecho a rechazar la entrada sin una orden judicial',
      descriptionEn: 'Immigration officers and police cannot enter your home without a warrant signed by a judge. You can ask to see the warrant through a closed door or window.',
      descriptionEs: 'Los oficiales de inmigración y la policía no pueden entrar a tu casa sin una orden judicial firmada por un juez. Puedes pedir ver la orden a través de una puerta o ventana cerrada.',
      scriptEn: 'Say: "Do you have a warrant signed by a judge? Please slide it under the door so I can see it."',
      scriptEs: 'Di: "¿Tienen una orden judicial firmada por un juez? Por favor deslícela debajo de la puerta para que pueda verla."'
    },
    {
      titleEn: 'Right to record police interactions in public',
      titleEs: 'Derecho a grabar interacciones policiales en público',
      descriptionEn: 'You have the right to record police and immigration officers in public spaces, as long as you do not interfere with their work.',
      descriptionEs: 'Tienes derecho a grabar a la policía y a los oficiales de inmigración en espacios públicos, siempre que no interfieras con su trabajo.',
      scriptEn: 'Say: "I am recording this interaction for my safety and legal protection."',
      scriptEs: 'Di: "Estoy grabando esta interacción por mi seguridad y protección legal."'
    },
    {
      titleEn: 'Right to an attorney before answering questions',
      titleEs: 'Derecho a un abogado antes de responder preguntas',
      descriptionEn: 'You have the right to speak with a lawyer before answering any questions. You can refuse to answer until you have legal representation.',
      descriptionEs: 'Tienes derecho a hablar con un abogado antes de responder cualquier pregunta. Puedes negarte a responder hasta que tengas representación legal.',
      scriptEn: 'Say: "I want to speak with my attorney. I will not answer questions until my lawyer is present."',
      scriptEs: 'Di: "Quiero hablar con mi abogado. No responderé preguntas hasta que mi abogado esté presente."'
    },
    {
      titleEn: 'FERPA rights: schools cannot share your records without consent',
      titleEs: 'Derechos FERPA: las escuelas no pueden compartir tus registros sin consentimiento',
      descriptionEn: 'Under the Family Educational Rights and Privacy Act (FERPA), schools cannot share your education records with immigration enforcement without your written consent or a court order.',
      descriptionEs: 'Bajo la Ley de Derechos Educativos y Privacidad Familiar (FERPA), las escuelas no pueden compartir tus registros educativos con las autoridades de inmigración sin tu consentimiento por escrito o una orden judicial.',
      scriptEn: 'Say: "I do not consent to sharing my educational records. FERPA protects this information."',
      scriptEs: 'Di: "No doy mi consentimiento para compartir mis registros educativos. FERPA protege esta información."'
    }
  ];

  const getCellColor = (value: string) => {
    if (value === 'yes') return 'bg-red-100 text-red-900';
    if (value === 'no') return 'bg-green-100 text-green-900';
    return 'bg-amber-100 text-amber-900';
  };

  const getCellText = (value: string) => {
    if (value === 'yes') return t('Yes, they can', 'Sí, pueden');
    if (value === 'no') return t('No, they cannot', 'No, no pueden');
    return t('It depends', 'Depende');
  };

  const handleShareChart = () => {
    alert(t(
      'Chart sharing functionality - In a real app, this would generate a shareable image for social media.',
      'Funcionalidad para compartir gráfico - En una aplicación real, esto generaría una imagen compartible para redes sociales.'
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Your Rights', 'Tus Derechos')}
          </h1>
          <p className="text-xl text-slate-700">
            {t('What they can and cannot do', 'Lo que pueden y no pueden hacer')}
          </p>
        </div>

        {/* Digital Privacy Law Chart */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl text-slate-900">
                {t('Digital Privacy Law Chart', 'Tabla de Leyes de Privacidad Digital')}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleShareChart}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  {t('Share', 'Compartir')}
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  {t('Print', 'Imprimir')}
                </button>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6">
              {t(
                'Screenshot this table for quick reference. Color coded: Green = No they cannot / Red = Yes they can / Amber = It depends',
                'Toma una captura de pantalla de esta tabla para referencia rápida. Código de colores: Verde = No pueden / Rojo = Sí pueden / Ámbar = Depende'
              )}
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 text-left">{t('Scenario', 'Escenario')}</th>
                    <th className="p-4 text-center">{t('Must unlock phone?', '¿Debe desbloquear teléfono?')}</th>
                    <th className="p-4 text-center">{t('Must give password?', '¿Debe dar contraseña?')}</th>
                    <th className="p-4 text-center">{t('Must answer questions?', '¿Debe responder preguntas?')}</th>
                    <th className="p-4 text-center">{t('Can access social media?', '¿Puede acceder a redes sociales?')}</th>
                  </tr>
                </thead>
                <tbody>
                  {legalChart.map((row, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="p-4 bg-slate-50">
                        {t(row.scenarioEn, row.scenarioEs)}
                      </td>
                      <td className={`p-4 text-center ${getCellColor(row.unlockPhone)}`}>
                        {getCellText(row.unlockPhone)}
                      </td>
                      <td className={`p-4 text-center ${getCellColor(row.givePassword)}`}>
                        {getCellText(row.givePassword)}
                      </td>
                      <td className={`p-4 text-center ${getCellColor(row.answerQuestions)}`}>
                        {getCellText(row.answerQuestions)}
                      </td>
                      <td className={`p-4 text-center ${getCellColor(row.socialMedia)}`}>
                        {getCellText(row.socialMedia)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {legalChart.map((row, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="mb-3 text-slate-900">
                    {t(row.scenarioEn, row.scenarioEs)}
                  </h3>
                  <div className="space-y-2">
                    <div className={`p-3 rounded ${getCellColor(row.unlockPhone)}`}>
                      <div className="text-xs opacity-75 mb-1">{t('Must unlock phone?', '¿Debe desbloquear teléfono?')}</div>
                      <div>{getCellText(row.unlockPhone)}</div>
                    </div>
                    <div className={`p-3 rounded ${getCellColor(row.givePassword)}`}>
                      <div className="text-xs opacity-75 mb-1">{t('Must give password?', '¿Debe dar contraseña?')}</div>
                      <div>{getCellText(row.givePassword)}</div>
                    </div>
                    <div className={`p-3 rounded ${getCellColor(row.answerQuestions)}`}>
                      <div className="text-xs opacity-75 mb-1">{t('Must answer questions?', '¿Debe responder preguntas?')}</div>
                      <div>{getCellText(row.answerQuestions)}</div>
                    </div>
                    <div className={`p-3 rounded ${getCellColor(row.socialMedia)}`}>
                      <div className="text-xs opacity-75 mb-1">{t('Can access social media?', '¿Puede acceder a redes sociales?')}</div>
                      <div>{getCellText(row.socialMedia)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your 5 Core Rights */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-slate-900">
            {t('Your 5 Core Rights', 'Tus 5 Derechos Fundamentales')}
          </h2>
          <div className="space-y-4">
            {coreRights.map((right, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedRight(expandedRight === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-xl text-slate-900">
                      {t(right.titleEn, right.titleEs)}
                    </h3>
                  </div>
                  {expandedRight === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {expandedRight === index && (
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed pl-14">
                      {t(right.descriptionEn, right.descriptionEs)}
                    </p>
                    <div className="ml-14 bg-blue-50 border-l-4 border-blue-500 p-4">
                      <div className="text-sm mb-2 text-blue-900">
                        {t('What to say:', 'Qué decir:')}
                      </div>
                      <div className="italic text-blue-800">
                        "{t(right.scriptEn, right.scriptEs)}"
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GMU-Specific Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl mb-6 text-slate-900">
            {t('GMU-Specific: What the University Can and Cannot Share', 'Específico de GMU: Lo que la Universidad Puede y No Puede Compartir')}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-3 text-slate-900">
                {t('Can GMU share my immigration status?', '¿Puede GMU compartir mi estatus migratorio?')}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t(
                  'No. Under FERPA (Family Educational Rights and Privacy Act), your immigration status is part of your protected education records. GMU cannot share this information with ICE or other agencies without your written consent or a court order signed by a judge.',
                  'No. Bajo FERPA (Ley de Derechos Educativos y Privacidad Familiar), tu estatus migratorio es parte de tus registros educativos protegidos. GMU no puede compartir esta información con ICE u otras agencias sin tu consentimiento por escrito o una orden judicial firmada por un juez.'
                )}
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-slate-900">
                {t('Who at GMU has access to your records?', '¿Quién en GMU tiene acceso a tus registros?')}
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                {t(
                  'Under GMU Data Stewardship Policy 1114, access to your protected data follows a strict chain of authority:',
                  'Bajo la Política de Administración de Datos 1114 de GMU, el acceso a tus datos protegidos sigue una cadena de autoridad estricta:'
                )}
              </p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">{t('President (ultimate authority)', 'Presidente (autoridad máxima)')}</span>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">{t('Provost (academic records)', 'Provost (registros académicos)')}</span>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-slate-700">{t('Data Owner (must have "genuine need")', 'Propietario de Datos (debe tener "necesidad genuina")')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-slate-900">
                {t('What is "protected data" at GMU?', '¿Qué son los "datos protegidos" en GMU?')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border-2 border-red-300 bg-red-50 p-4 rounded-lg">
                  <div className="mb-2 text-red-900">
                    {t('Protected Highly Sensitive', 'Altamente Sensible Protegido')}
                  </div>
                  <div className="text-sm text-red-800">
                    {t('Social Security numbers, immigration status, health records', 'Números de seguro social, estatus migratorio, registros de salud')}
                  </div>
                </div>
                <div className="border-2 border-amber-300 bg-amber-50 p-4 rounded-lg">
                  <div className="mb-2 text-amber-900">
                    {t('Protected Restricted', 'Restringido Protegido')}
                  </div>
                  <div className="text-sm text-amber-800">
                    {t('Student ID, grades, financial aid information', 'ID de estudiante, calificaciones, información de ayuda financiera')}
                  </div>
                </div>
                <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
                  <div className="mb-2 text-green-900">
                    {t('Public Use', 'Uso Público')}
                  </div>
                  <div className="text-sm text-green-800">
                    {t('Directory information (name, major) - you can opt out', 'Información de directorio (nombre, especialidad) - puedes optar por no participar')}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-lg mb-3 text-blue-900">
                {t('Important Contacts', 'Contactos Importantes')}
              </h3>
              <div className="space-y-2 text-blue-800">
                <div>
                  <strong>{t('FERPA questions:', 'Preguntas sobre FERPA:')}</strong>{' '}
                  <a href="mailto:ferpa@gmu.edu" className="underline hover:text-blue-600">
                    ferpa@gmu.edu
                  </a>
                </div>
                <div>
                  <strong>{t('Camera footage requests:', 'Solicitudes de grabaciones de cámaras:')}</strong>{' '}
                  <a href="mailto:obstech@gmu.edu" className="underline hover:text-blue-600">
                    obstech@gmu.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
