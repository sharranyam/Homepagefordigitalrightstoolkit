import { useState } from 'react';
import { Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function OptOutToolkitPage() {
  const { t } = useLanguage();
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 'ferpa',
      titleEn: 'School/University Data Opt-Out (FERPA)',
      titleEs: 'Exclusión de Datos de Escuela/Universidad (FERPA)',
      toEn: 'GMU Registrar Office (registrar@gmu.edu)',
      toEs: 'Oficina de Registro de GMU (registrar@gmu.edu)',
      subjectEn: 'FERPA Directory Information Opt-Out Request',
      subjectEs: 'Solicitud de Exclusión de Información de Directorio FERPA',
      bodyEn: `To Whom It May Concern:

I am writing to formally request that George Mason University withhold all of my directory information from public disclosure under the Family Educational Rights and Privacy Act (FERPA), 20 U.S.C. § 1232g.

Student Information:
- Name: [YOUR FULL NAME]
- Student ID (G Number): [YOUR G NUMBER]
- Date of Birth: [YOUR DOB]

I am requesting that the following directory information be withheld from all public disclosure:
- Name
- Address
- Telephone number
- Email address
- Photograph
- Date and place of birth
- Major field of study
- Dates of attendance
- Grade level
- Enrollment status
- Participation in officially recognized activities and sports
- Weight and height of athletic team members
- Degrees, honors, and awards received
- Most recent educational institution attended

Please confirm receipt of this request and implement this restriction on my records immediately.

Sincerely,
[YOUR NAME]
[YOUR CONTACT EMAIL]`,
      bodyEs: `A quien corresponda:

Escribo para solicitar formalmente que George Mason University retenga toda mi información de directorio de divulgación pública bajo la Ley de Derechos Educativos y Privacidad Familiar (FERPA), 20 U.S.C. § 1232g.

Información del estudiante:
- Nombre: [TU NOMBRE COMPLETO]
- ID de estudiante (Número G): [TU NÚMERO G]
- Fecha de nacimiento: [TU FECHA DE NACIMIENTO]

Solicito que la siguiente información de directorio sea retenida de toda divulgación pública:
- Nombre
- Dirección
- Número de teléfono
- Dirección de correo electrónico
- Fotografía
- Fecha y lugar de nacimiento
- Campo principal de estudio
- Fechas de asistencia
- Nivel de grado
- Estado de inscripción
- Participación en actividades y deportes oficialmente reconocidos
- Peso y altura de miembros de equipos atléticos
- Títulos, honores y premios recibidos
- Institución educativa más reciente a la que asistió

Por favor confirme la recepción de esta solicitud e implemente esta restricción en mis registros inmediatamente.

Atentamente,
[TU NOMBRE]
[TU CORREO ELECTRÓNICO DE CONTACTO]`,
      deadlineEn: 'School must respond within 45 days under FERPA',
      deadlineEs: 'La escuela debe responder dentro de 45 días bajo FERPA'
    },
    {
      id: 'ccpa',
      titleEn: 'App Company Data Deletion (CCPA/GDPR)',
      titleEs: 'Eliminación de Datos de Empresa de Aplicaciones (CCPA/GDPR)',
      toEn: 'App company privacy/legal contact (check their privacy policy)',
      toEs: 'Contacto de privacidad/legal de la empresa de aplicaciones (verifica su política de privacidad)',
      subjectEn: 'Data Deletion Request Under CCPA',
      subjectEs: 'Solicitud de Eliminación de Datos Bajo CCPA',
      bodyEn: `To Whom It May Concern:

I am writing to request the deletion of all personal data you have collected about me, as is my right under the California Consumer Privacy Act (CCPA) and/or the General Data Protection Regulation (GDPR).

Account Information:
- Email: [YOUR EMAIL ASSOCIATED WITH ACCOUNT]
- Username: [YOUR USERNAME IF APPLICABLE]
- Phone: [YOUR PHONE NUMBER IF PROVIDED]

I request that you:
1. Delete all personal data you have collected about me
2. Cease any further collection or sale of my data
3. Notify any third parties with whom you have shared my data to also delete it

Please confirm receipt of this request and complete the deletion within 45 days as required by law.

If you need to verify my identity, please contact me at this email address.

Sincerely,
[YOUR NAME]`,
      bodyEs: `A quien corresponda:

Escribo para solicitar la eliminación de todos los datos personales que han recopilado sobre mí, como es mi derecho bajo la Ley de Privacidad del Consumidor de California (CCPA) y/o el Reglamento General de Protección de Datos (GDPR).

Información de cuenta:
- Correo electrónico: [TU CORREO ELECTRÓNICO ASOCIADO CON LA CUENTA]
- Nombre de usuario: [TU NOMBRE DE USUARIO SI APLICA]
- Teléfono: [TU NÚMERO DE TELÉFONO SI LO PROPORCIONASTE]

Solicito que:
1. Eliminen todos los datos personales que han recopilado sobre mí
2. Cesen cualquier recopilación o venta adicional de mis datos
3. Notifiquen a cualquier tercero con quien hayan compartido mis datos para que también los eliminen

Por favor confirme la recepción de esta solicitud y complete la eliminación dentro de 45 días como lo requiere la ley.

Si necesita verificar mi identidad, contácteme en esta dirección de correo electrónico.

Atentamente,
[TU NOMBRE]`,
      deadlineEn: 'Company must respond within 45 days under CCPA',
      deadlineEs: 'La empresa debe responder dentro de 45 días bajo CCPA'
    },
    {
      id: 'databroker',
      titleEn: 'Data Broker Removal (People Search Sites)',
      titleEs: 'Eliminación de Intermediario de Datos (Sitios de Búsqueda de Personas)',
      toEn: 'privacy@[databrokersite].com (see directory below)',
      toEs: 'privacy@[sitiodeintermediario].com (ver directorio abajo)',
      subjectEn: 'Opt-Out Request for Data Removal',
      subjectEs: 'Solicitud de Exclusión para Eliminación de Datos',
      bodyEn: `To Whom It May Concern:

I am writing to request the immediate removal of my personal information from your website and database.

Information to Remove:
- Name: [YOUR FULL NAME]
- Address: [ADDRESS SHOWN ON THEIR SITE]
- Phone: [PHONE NUMBER IF LISTED]
- Age/DOB: [IF LISTED]
- Profile URL: [COPY THE URL OF YOUR PROFILE FROM THEIR SITE]

I am requesting removal under your opt-out policy and applicable privacy laws. Please confirm that my information has been removed and will not be re-added to your database.

Please respond within 10 business days confirming removal.

Sincerely,
[YOUR NAME]
[YOUR CONTACT EMAIL]`,
      bodyEs: `A quien corresponda:

Escribo para solicitar la eliminación inmediata de mi información personal de su sitio web y base de datos.

Información a eliminar:
- Nombre: [TU NOMBRE COMPLETO]
- Dirección: [DIRECCIÓN MOSTRADA EN SU SITIO]
- Teléfono: [NÚMERO DE TELÉFONO SI APARECE]
- Edad/Fecha de nacimiento: [SI APARECE]
- URL del perfil: [COPIA LA URL DE TU PERFIL DE SU SITIO]

Solicito la eliminación bajo su política de exclusión y las leyes de privacidad aplicables. Por favor confirme que mi información ha sido eliminada y no se volverá a agregar a su base de datos.

Por favor responda dentro de 10 días hábiles confirmando la eliminación.

Atentamente,
[TU NOMBRE]
[TU CORREO ELECTRÓNICO DE CONTACTO]`,
      deadlineEn: 'Most data brokers remove within 7-14 days',
      deadlineEs: 'La mayoría de los intermediarios eliminan dentro de 7-14 días'
    },
    {
      id: 'advertising',
      titleEn: 'Opt Out of Targeted Advertising',
      titleEs: 'Optar por No Participar en Publicidad Dirigida',
      toEn: 'privacy@[company].com',
      toEs: 'privacy@[empresa].com',
      subjectEn: 'Opt-Out of Data Sharing for Targeted Advertising',
      subjectEs: 'Exclusión del Intercambio de Datos para Publicidad Dirigida',
      bodyEn: `To Whom It May Concern:

I am writing to opt out of the sale or sharing of my personal information for targeted advertising purposes, as is my right under the California Consumer Privacy Act (CCPA) and other applicable privacy laws.

Account Information:
- Email: [YOUR EMAIL]
- Account ID: [IF APPLICABLE]

I request that you:
1. Stop selling or sharing my personal information with third parties for advertising
2. Stop using my data to build advertising profiles
3. Remove me from any existing advertising audiences or segments
4. Confirm this opt-out in writing

Please process this request within 15 business days as required by law.

Sincerely,
[YOUR NAME]`,
      bodyEs: `A quien corresponda:

Escribo para optar por no participar en la venta o el intercambio de mi información personal con fines de publicidad dirigida, como es mi derecho bajo la Ley de Privacidad del Consumidor de California (CCPA) y otras leyes de privacidad aplicables.

Información de cuenta:
- Correo electrónico: [TU CORREO ELECTRÓNICO]
- ID de cuenta: [SI APLICA]

Solicito que:
1. Dejen de vender o compartir mi información personal con terceros para publicidad
2. Dejen de usar mis datos para construir perfiles publicitarios
3. Me eliminen de cualquier audiencia o segmento publicitario existente
4. Confirmen esta exclusión por escrito

Por favor procese esta solicitud dentro de 15 días hábiles como lo requiere la ley.

Atentamente,
[TU NOMBRE]`,
      deadlineEn: 'Company must respond within 15 business days under CCPA',
      deadlineEs: 'La empresa debe responder dentro de 15 días hábiles bajo CCPA'
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(id);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const dataBrokers = [
    { name: 'Spokeo', url: 'https://www.spokeo.com/optout', type: 'web' },
    { name: 'Whitepages', url: 'https://www.whitepages.com/suppression-requests', type: 'web' },
    { name: 'BeenVerified', url: 'https://www.beenverified.com/app/optout/search', type: 'web' },
    { name: 'PeopleFinders', url: 'https://www.peoplefinders.com/opt-out', type: 'web' },
    { name: 'Intelius', url: 'https://www.intelius.com/opt-out/', type: 'web' },
    { name: 'MyLife', url: 'https://www.mylife.com/privacy-policy', type: 'web' },
    { name: 'TruthFinder', url: 'https://www.truthfinder.com/opt-out/', type: 'web' },
    { name: 'Instant Checkmate', url: 'https://www.instantcheckmate.com/opt-out/', type: 'web' },
    { name: 'US Search', url: 'https://www.ussearch.com/opt-out/submit/', type: 'web' },
    { name: 'Radaris', url: 'https://radaris.com/page/how-to-remove', type: 'web' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Opt-Out Toolkit', 'Kit de Exclusión')}
          </h1>
          <p className="text-xl text-slate-700">
            {t("Beat the 'I agree' button", "Vence el botón 'Acepto'")}
          </p>
        </div>

        {/* Email Templates */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-slate-900">
            {t('Email Opt-Out Templates', 'Plantillas de Correo Electrónico para Optar por No Participar')}
          </h2>

          <div className="space-y-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <h3 className="text-2xl mb-2">
                    {t(template.titleEn, template.titleEs)}
                  </h3>
                  <div className="text-sm opacity-90">
                    <div className="mb-1">
                      <strong>{t('To:', 'Para:')}</strong> {t(template.toEn, template.toEs)}
                    </div>
                    <div>
                      <strong>{t('Subject:', 'Asunto:')}</strong> {t(template.subjectEn, template.subjectEs)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">
                    <div className="text-sm text-yellow-900">
                      <strong>{t('Fill in the highlighted fields before sending:', 'Rellena los campos resaltados antes de enviar:')}</strong>
                      <div className="mt-2 text-yellow-800">
                        {t('Replace all text in [BRACKETS] with your information', 'Reemplaza todo el texto en [CORCHETES] con tu información')}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                    <pre className="text-sm whitespace-pre-wrap text-slate-800 font-mono">
                      {t(template.bodyEn, template.bodyEs)}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => copyToClipboard(t(template.bodyEn, template.bodyEs), template.id)}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      {copiedTemplate === template.id ? (
                        <>
                          <Check className="w-5 h-5" />
                          {t('Copied!', '¡Copiado!')}
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          {t('Copy Template', 'Copiar Plantilla')}
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail className="w-4 h-4" />
                      {t('Tip: Send via ProtonMail for extra privacy', 'Consejo: Envía vía ProtonMail para mayor privacidad')}
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm text-blue-900">
                    <strong>{t('Legal deadline:', 'Plazo legal:')}</strong> {t(template.deadlineEn, template.deadlineEs)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Pop-up Guide */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl mb-6 text-slate-900">
              {t("The 'I Agree' Pop-up Survival Guide", "Guía de Supervivencia de Ventanas Emergentes 'Acepto'")}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {t("What 'Accept All' vs 'Manage Preferences' means", "Qué significa 'Aceptar todo' vs 'Administrar preferencias'")}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-red-300 bg-red-50 p-4 rounded-lg">
                    <div className="mb-2 text-red-900">
                      ❌ {t("'Accept All' / 'OK' / 'I Agree'", "'Aceptar todo' / 'OK' / 'Acepto'")}
                    </div>
                    <p className="text-sm text-red-800">
                      {t(
                        'Gives the company permission to track everything you do, share your data with hundreds of partners, and build an advertising profile.',
                        'Da permiso a la empresa para rastrear todo lo que haces, compartir tus datos con cientos de socios y construir un perfil publicitario.'
                      )}
                    </p>
                  </div>
                  <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
                    <div className="mb-2 text-green-900">
                      ✓ {t("'Manage Preferences' / 'Reject All'", "'Administrar preferencias' / 'Rechazar todo'")}
                    </div>
                    <p className="text-sm text-green-800">
                      {t(
                        'Lets you opt out of non-essential tracking. Look for "Reject All" or manually uncheck advertising and analytics cookies.',
                        'Te permite optar por no participar en el rastreo no esencial. Busca "Rechazar todo" o desmarca manualmente las cookies de publicidad y análisis.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {t('How to reject non-essential cookies in 3 clicks', 'Cómo rechazar cookies no esenciales en 3 clics')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800">
                        {t(
                          'Click "Manage Preferences" or "Cookie Settings" (NOT "Accept All")',
                          'Haz clic en "Administrar preferencias" o "Configuración de cookies" (NO "Aceptar todo")'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800">
                        {t(
                          'Look for "Reject All" button, OR uncheck boxes for "Advertising", "Analytics", "Marketing", "Performance"',
                          'Busca el botón "Rechazar todo", O desmarca casillas de "Publicidad", "Análisis", "Marketing", "Rendimiento"'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800">
                        {t(
                          'Keep only "Necessary" or "Essential" cookies checked - these are required for the site to work',
                          'Mantén solo las cookies "Necesarias" o "Esenciales" marcadas - estas son requeridas para que el sitio funcione'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {t('What companies can do if you click "Reject"', 'Qué pueden hacer las empresas si haces clic en "Rechazar"')}
                </h3>
                <p className="text-slate-700 mb-3">
                  {t(
                    'By law (in most places), companies cannot prevent you from using their website if you reject non-essential cookies. If they do, that\'s a violation of privacy laws like GDPR.',
                    'Por ley (en la mayoría de lugares), las empresas no pueden impedirte usar su sitio web si rechazas cookies no esenciales. Si lo hacen, eso es una violación de leyes de privacidad como GDPR.'
                  )}
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h3 className="text-lg mb-3 text-purple-900">
                  {t('Block trackers before the pop-up appears', 'Bloquea rastreadores antes de que aparezca la ventana emergente')}
                </h3>
                <p className="text-purple-800 mb-3">
                  {t(
                    'Browser extensions can block tracking cookies automatically so you don\'t have to deal with pop-ups:',
                    'Las extensiones de navegador pueden bloquear cookies de rastreo automáticamente para que no tengas que lidiar con ventanas emergentes:'
                  )}
                </p>
                <ul className="list-disc list-inside text-purple-800 space-y-1">
                  <li>uBlock Origin (free, open source)</li>
                  <li>Privacy Badger (free, by EFF)</li>
                  <li>Ghostery (free)</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <h3 className="text-lg mb-2 text-amber-900">
                  {t('EU vs US difference', 'Diferencia UE vs EE.UU.')}
                </h3>
                <p className="text-sm text-amber-800">
                  {t(
                    'European users get real choices because of GDPR - websites must offer "Reject All" option. US users often only see "Accept" or hard-to-find opt-outs. Use privacy tools to level the playing field.',
                    'Los usuarios europeos obtienen opciones reales debido a GDPR - los sitios web deben ofrecer la opción "Rechazar todo". Los usuarios de EE.UU. a menudo solo ven "Aceptar" u opciones de exclusión difíciles de encontrar. Usa herramientas de privacidad para nivelar el campo de juego.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Broker Directory */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl mb-6 text-slate-900">
              {t('Who Has Your Data Right Now', 'Quién Tiene Tus Datos Ahora Mismo')}
            </h2>

            <p className="text-slate-700 mb-6">
              {t(
                'These "people search" sites collect and sell your personal information - name, address, phone, relatives, past addresses, and more. Here are direct opt-out links:',
                'Estos sitios de "búsqueda de personas" recopilan y venden tu información personal - nombre, dirección, teléfono, familiares, direcciones pasadas y más. Aquí hay enlaces directos de exclusión:'
              )}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {dataBrokers.map((broker) => (
                <div key={broker.name} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <span className="text-slate-900">{broker.name}</span>
                  <a
                    href={broker.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                  >
                    {t('Opt Out', 'Optar por No Participar')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <h3 className="mb-2 text-amber-900">
                  {t('How often to check', 'Con qué frecuencia revisar')}
                </h3>
                <p className="text-amber-800 text-sm">
                  {t(
                    'Data brokers continuously re-collect information. Check and opt out at least once per year, or every 6 months if you have heightened privacy concerns.',
                    'Los intermediarios de datos continuamente vuelven a recopilar información. Revisa y opta por no participar al menos una vez al año, o cada 6 meses si tienes preocupaciones de privacidad elevadas.'
                  )}
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="mb-2 text-blue-900">
                  {t('Automated removal services', 'Servicios de eliminación automatizados')}
                </h3>
                <div className="text-sm text-blue-800 space-y-2">
                  <div>
                    <strong>{t('Free option:', 'Opción gratuita:')}</strong> {t('Use the template above and manually opt out from each site', 'Usa la plantilla de arriba y opta manualmente por no participar de cada sitio')}
                  </div>
                  <div>
                    <strong>{t('Paid option:', 'Opción de pago:')}</strong> DeleteMe, Privacy Bee {t('(automatically remove you from 100+ sites, ~$100-200/year)', '(te eliminan automáticamente de más de 100 sitios, ~$100-200/año)')}
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h3 className="mb-2 text-red-900">
                  ⚠️ {t('Important:', 'Importante:')}
                </h3>
                <p className="text-red-800 text-sm">
                  {t(
                    'Removal is not permanent. Data re-accumulates as brokers pull from new sources (court records, voter registration, social media, etc). Regular monitoring is necessary.',
                    'La eliminación no es permanente. Los datos se reacumulan a medida que los intermediarios extraen de nuevas fuentes (registros judiciales, registro de votantes, redes sociales, etc.). Es necesario un monitoreo regular.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
