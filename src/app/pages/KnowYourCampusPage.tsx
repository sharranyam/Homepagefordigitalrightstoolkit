import { useState } from 'react';
import { Mail, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function KnowYourCampusPage() {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      questionEn: 'Can ICE request GMU camera footage?',
      questionEs: '¿Puede ICE solicitar grabaciones de cámaras de GMU?',
      answerEn: 'Yes, ICE can submit a request for camera footage, but GMU is not required to comply without a valid court order or subpoena. Any request must go through University Counsel for legal review. GMU follows FOIA (Freedom of Information Act) procedures for all records requests.',
      answerEs: 'Sí, ICE puede presentar una solicitud de grabaciones de cámaras, pero GMU no está obligado a cumplir sin una orden judicial o citación válida. Cualquier solicitud debe pasar por el Consejo Universitario para revisión legal. GMU sigue los procedimientos FOIA (Ley de Libertad de Información) para todas las solicitudes de registros.'
    },
    {
      questionEn: 'What process must be followed before footage is released?',
      questionEs: '¿Qué proceso debe seguirse antes de que se publiquen las grabaciones?',
      answerEn: '1) Request submitted to obstech@gmu.edu, 2) University Counsel reviews the legal validity, 3) If valid, Data Owner (typically VP of Administration) must approve, 4) Requestor is notified of decision, 5) If approved, footage is prepared with sensitive information redacted where appropriate.',
      answerEs: '1) Solicitud enviada a obstech@gmu.edu, 2) El Consejo Universitario revisa la validez legal, 3) Si es válida, el Propietario de Datos (típicamente el VP de Administración) debe aprobar, 4) Se notifica al solicitante de la decisión, 5) Si se aprueba, se prepara el metraje con información sensible redactada cuando sea apropiado.'
    },
    {
      questionEn: 'What does a FOIA request to GMU look like?',
      questionEs: '¿Cómo se ve una solicitud FOIA a GMU?',
      answerEn: 'FOIA requests must be submitted in writing, clearly describe the records sought, and include contact information. GMU has 5 working days to respond. The university can charge for the cost of producing records. Not all requests are granted - exemptions exist for records that would violate privacy, are part of ongoing investigations, or contain sensitive security information.',
      answerEs: 'Las solicitudes FOIA deben presentarse por escrito, describir claramente los registros solicitados e incluir información de contacto. GMU tiene 5 días hábiles para responder. La universidad puede cobrar por el costo de producir registros. No todas las solicitudes son otorgadas - existen exenciones para registros que violarían la privacidad, son parte de investigaciones en curso o contienen información de seguridad sensible.'
    }
  ];

  const resources = [
    {
      nameEn: 'UndocuMason',
      nameEs: 'UndocuMason',
      descriptionEn: 'Student organization supporting undocumented students at GMU. Provides community, resources, and advocacy.',
      descriptionEs: 'Organización estudiantil que apoya a estudiantes indocumentados en GMU. Proporciona comunidad, recursos y defensa.',
      contactEn: 'Contact via Mason360 or email undocumason@gmu.edu',
      contactEs: 'Contacto vía Mason360 o correo electrónico undocumason@gmu.edu',
      link: 'https://studentcenters.gmu.edu'
    },
    {
      nameEn: 'Student Legal Services',
      nameEs: 'Servicios Legales Estudiantiles',
      descriptionEn: 'Free legal consultation for GMU students on various matters. Can help with understanding your rights under FERPA and other privacy laws.',
      descriptionEs: 'Consulta legal gratuita para estudiantes de GMU en varios asuntos. Puede ayudar a entender tus derechos bajo FERPA y otras leyes de privacidad.',
      contactEn: 'Student Union Building I, Room 3200 | (703) 993-8855',
      contactEs: 'Edificio Student Union I, Sala 3200 | (703) 993-8855',
      link: 'https://studentcenters.gmu.edu/student-support/student-legal-services/'
    },
    {
      nameEn: 'FERPA Office',
      nameEs: 'Oficina FERPA',
      descriptionEn: 'Official GMU office for questions about your educational privacy rights and how to opt out of directory information sharing.',
      descriptionEs: 'Oficina oficial de GMU para preguntas sobre tus derechos de privacidad educativa y cómo optar por no compartir información de directorio.',
      contactEn: 'Email: ferpa@gmu.edu',
      contactEs: 'Correo electrónico: ferpa@gmu.edu',
      link: 'mailto:ferpa@gmu.edu'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {t('Know Your Campus', 'Conoce Tu Campus')}
          </h1>
          <p className="text-xl text-slate-700">
            {t("GMU's data and you", 'Los datos de GMU y tú')}
          </p>
        </div>

        {/* GMU Data Stewardship Explainer */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl mb-6 text-slate-900">
              {t('GMU Data Stewardship Policy 1114', 'Política de Administración de Datos 1114 de GMU')}
            </h2>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              {t(
                'George Mason University Policy 1114 establishes how your personal data is classified, stored, and protected. Understanding this policy helps you know what information the university collects about you and who can access it.',
                'La Política 1114 de George Mason University establece cómo se clasifica, almacena y protege tu información personal. Entender esta política te ayuda a saber qué información recopila la universidad sobre ti y quién puede acceder a ella.'
              )}
            </p>

            {/* Three Data Tiers */}
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-slate-900">
                {t('Three Data Tiers at GMU', 'Tres Niveles de Datos en GMU')}
              </h3>
              
              <div className="space-y-6">
                {/* Tier 1: Protected Highly Sensitive */}
                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2 text-red-900">
                        {t('Protected Highly Sensitive', 'Altamente Sensible Protegido')}
                      </h4>
                      <p className="text-red-800 mb-3">
                        {t(
                          'This is your most sensitive personal information. Unauthorized access could result in identity theft, discrimination, or serious harm.',
                          'Esta es tu información personal más sensible. El acceso no autorizado podría resultar en robo de identidad, discriminación o daño grave.'
                        )}
                      </p>
                      <div className="bg-white p-4 rounded">
                        <div className="mb-2 text-red-900">
                          {t('Examples:', 'Ejemplos:')}
                        </div>
                        <ul className="list-disc list-inside text-red-800 space-y-1">
                          <li>{t('Social Security numbers', 'Números de seguro social')}</li>
                          <li>{t('Immigration status', 'Estatus migratorio')}</li>
                          <li>{t('Health and medical records', 'Registros de salud y médicos')}</li>
                          <li>{t('Financial account numbers', 'Números de cuentas financieras')}</li>
                          <li>{t("Driver's license numbers", 'Números de licencia de conducir')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tier 2: Protected Restricted */}
                <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2 text-amber-900">
                        {t('Protected Restricted', 'Restringido Protegido')}
                      </h4>
                      <p className="text-amber-800 mb-3">
                        {t(
                          'Information that is protected by law (like FERPA) but is less sensitive than Tier 1. Still requires authorization to access.',
                          'Información protegida por ley (como FERPA) pero menos sensible que el Nivel 1. Aún requiere autorización para acceder.'
                        )}
                      </p>
                      <div className="bg-white p-4 rounded">
                        <div className="mb-2 text-amber-900">
                          {t('Examples:', 'Ejemplos:')}
                        </div>
                        <ul className="list-disc list-inside text-amber-800 space-y-1">
                          <li>{t('Student ID numbers (G numbers)', 'Números de identificación de estudiante (números G)')}</li>
                          <li>{t('Grades and academic transcripts', 'Calificaciones y transcripciones académicas')}</li>
                          <li>{t('Financial aid information', 'Información de ayuda financiera')}</li>
                          <li>{t('Disciplinary records', 'Registros disciplinarios')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tier 3: Public Use */}
                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2 text-green-900">
                        {t('Public Use', 'Uso Público')}
                      </h4>
                      <p className="text-green-800 mb-3">
                        {t(
                          'Directory information that GMU can share publicly unless you opt out. You have the right to restrict this information.',
                          'Información de directorio que GMU puede compartir públicamente a menos que optes por no participar. Tienes derecho a restringir esta información.'
                        )}
                      </p>
                      <div className="bg-white p-4 rounded">
                        <div className="mb-2 text-green-900">
                          {t('Examples:', 'Ejemplos:')}
                        </div>
                        <ul className="list-disc list-inside text-green-800 space-y-1">
                          <li>{t('Name', 'Nombre')}</li>
                          <li>{t('Major/program of study', 'Especialidad/programa de estudio')}</li>
                          <li>{t('Enrollment status (full-time/part-time)', 'Estado de inscripción (tiempo completo/parcial)')}</li>
                          <li>{t('Dates of attendance', 'Fechas de asistencia')}</li>
                          <li>{t('Degrees and awards received', 'Títulos y premios recibidos')}</li>
                        </ul>
                        <div className="mt-3 p-3 bg-green-100 rounded text-sm text-green-900">
                          ✓ {t('You can opt out of directory information sharing at any time through the Registrar.', 'Puedes optar por no compartir información de directorio en cualquier momento a través del Registro.')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Can Access Your Data */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl mb-4 text-slate-900">
                {t('Who Can Access Your Data?', '¿Quién Puede Acceder a Tus Datos?')}
              </h3>
              <p className="text-slate-700 mb-4">
                {t(
                  'GMU employees can only access your protected data if they have a "genuine need" for their job responsibilities. The approval chain is:',
                  'Los empleados de GMU solo pueden acceder a tus datos protegidos si tienen una "necesidad genuina" para sus responsabilidades laborales. La cadena de aprobación es:'
                )}
              </p>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-slate-900">{t('President', 'Presidente')}</div>
                      <div className="text-sm text-slate-600">{t('Ultimate authority over all university data', 'Autoridad máxima sobre todos los datos universitarios')}</div>
                    </div>
                  </div>
                  <div className="ml-6 border-l-2 border-slate-300 pl-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-slate-900">{t('Provost', 'Provost')}</div>
                        <div className="text-sm text-slate-600">{t('Authority over academic and student records', 'Autoridad sobre registros académicos y estudiantiles')}</div>
                      </div>
                    </div>
                    <div className="ml-6 border-l-2 border-slate-300 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-slate-900">{t('Data Owner', 'Propietario de Datos')}</div>
                          <div className="text-sm text-slate-600">{t('Department heads who manage specific data sets (e.g., Registrar, Financial Aid, IT)', 'Jefes de departamento que gestionan conjuntos de datos específicos (por ejemplo, Registro, Ayuda Financiera, TI)')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
                <p className="text-sm text-blue-900">
                  <strong>{t('What "centrally managed server" means:', 'Lo que significa "servidor gestionado centralmente":')}</strong> {t("Your data is stored on GMU's official servers managed by IT. This provides security protections, backup systems, and ensures that access is logged and auditable.", 'Tus datos se almacenan en los servidores oficiales de GMU gestionados por TI. Esto proporciona protecciones de seguridad, sistemas de respaldo y garantiza que el acceso se registre y sea auditable.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Camera Access and Surveillance */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl mb-6 text-slate-900">
              {t('Camera Access and Surveillance on Campus', 'Acceso a Cámaras y Vigilancia en el Campus')}
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg text-slate-900">
                      {t(faq.questionEn, faq.questionEs)}
                    </h3>
                    {expandedFaq === index ? <ChevronUp className="text-slate-600" /> : <ChevronDown className="text-slate-600" />}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 text-slate-700 leading-relaxed bg-slate-50">
                      {t(faq.answerEn, faq.answerEs)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-lg mb-3 text-blue-900">
                {t('How to Submit a Question', 'Cómo Enviar una Pregunta')}
              </h3>
              <p className="text-blue-800 mb-4">
                {t(
                  'If you have questions about camera footage or surveillance on campus, contact the Office of Building Security and Technology:',
                  'Si tienes preguntas sobre grabaciones de cámaras o vigilancia en el campus, contacta a la Oficina de Seguridad de Edificios y Tecnología:'
                )}
              </p>
              <a
                href="mailto:obstech@gmu.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                obstech@gmu.edu
              </a>
            </div>
          </div>
        </section>

        {/* Student Organizations and Resources */}
        <section>
          <h2 className="text-3xl mb-8 text-slate-900">
            {t('Student Organizations and Resources', 'Organizaciones Estudiantiles y Recursos')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl mb-3 text-slate-900">
                  {t(resource.nameEn, resource.nameEs)}
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  {t(resource.descriptionEn, resource.descriptionEs)}
                </p>
                <div className="text-sm text-slate-600 mb-4">
                  {t(resource.contactEn, resource.contactEs)}
                </div>
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {t('Learn more', 'Más información')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-100 border border-slate-300 rounded-lg p-6">
            <h3 className="text-lg mb-3 text-slate-900">
              {t('Campus Privacy Contact Directory', 'Directorio de Contactos de Privacidad del Campus')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-slate-900">{t('FERPA Questions:', 'Preguntas sobre FERPA:')}</strong>
                <div className="text-slate-700">ferpa@gmu.edu</div>
              </div>
              <div>
                <strong className="text-slate-900">{t('Camera Footage:', 'Grabaciones de Cámaras:')}</strong>
                <div className="text-slate-700">obstech@gmu.edu</div>
              </div>
              <div>
                <strong className="text-slate-900">{t('Data Privacy Officer:', 'Oficial de Privacidad de Datos:')}</strong>
                <div className="text-slate-700">privacy@gmu.edu</div>
              </div>
              <div>
                <strong className="text-slate-900">{t('University Counsel:', 'Consejo Universitario:')}</strong>
                <div className="text-slate-700">(703) 993-8200</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}