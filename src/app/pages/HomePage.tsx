import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Shield, Smartphone, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      headlineEn: 'Protect your digital privacy and know your rights.',
      headlineEs: 'Protege tu privacidad digital y conoce tus derechos.',
      ctaEn: 'Start protecting yourself →',
      ctaEs: 'Empieza a protegerte →'
    },
    {
      headlineEn: 'Your phone knows more about you than you think.',
      headlineEs: 'Tu teléfono sabe más de ti de lo que piensas.',
      ctaEn: 'Start protecting yourself →',
      ctaEs: 'Empieza a protegerte →'
    },
    {
      headlineEn: 'You have rights. This site explains them in plain language.',
      headlineEs: 'Tienes derechos. Este sitio los explica en lenguaje claro.',
      ctaEn: 'Start protecting yourself →',
      ctaEs: 'Empieza a protegerte →'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Carousel Section */}
      <section 
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="text-center space-y-8">
                  <h1 className="text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
                    {t(slide.headlineEn, slide.headlineEs)}
                  </h1>
                  <Link
                    to="/your-rights"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
                  >
                    {t(slide.ctaEn, slide.ctaEs)}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={t('Previous slide', 'Diapositiva anterior')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                  aria-label={`${t('Go to slide', 'Ir a la diapositiva')} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={t('Next slide', 'Siguiente diapositiva')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Start Tiles */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12 text-slate-900">
          {t('What do you need right now?', '¿Qué necesitas ahora mismo?')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Tile 1: I'm scared right now */}
          <Link
            to="/your-rights"
            className="group bg-red-50 border-2 border-red-300 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white p-3 rounded-lg">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-red-900">
                  {t("I'm scared right now", 'Tengo miedo ahora mismo')}
                </h3>
                <p className="text-red-800">
                  {t(
                    'Know your rights when facing law enforcement or immigration officials',
                    'Conoce tus derechos al enfrentarte a las fuerzas del orden o funcionarios de inmigración'
                  )}
                </p>
                <span className="inline-block mt-4 text-red-600 group-hover:translate-x-2 transition-transform">
                  {t('Learn your rights →', 'Aprende tus derechos →')}
                </span>
              </div>
            </div>
          </Link>

          {/* Tile 2: I want to lock down my phone */}
          <Link
            to="/social-media"
            className="group bg-amber-50 border-2 border-amber-300 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 text-white p-3 rounded-lg">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-amber-900">
                  {t('I want to lock down my phone', 'Quiero proteger mi teléfono')}
                </h3>
                <p className="text-amber-800">
                  {t(
                    'Stop social media apps from collecting and sharing your data',
                    'Evita que las aplicaciones de redes sociales recopilen y compartan tus datos'
                  )}
                </p>
                <span className="inline-block mt-4 text-amber-600 group-hover:translate-x-2 transition-transform">
                  {t('Secure your phone →', 'Protege tu teléfono →')}
                </span>
              </div>
            </div>
          </Link>

          {/* Tile 3: I'm a student at GMU */}
          <Link
            to="/know-your-campus"
            className="group bg-blue-50 border-2 border-blue-300 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-blue-900">
                  {t("I'm a student at GMU", 'Soy estudiante en GMU')}
                </h3>
                <p className="text-blue-800">
                  {t(
                    'Understand what data GMU collects and how FERPA protects you',
                    'Entiende qué datos recopila GMU y cómo FERPA te protege'
                  )}
                </p>
                <span className="inline-block mt-4 text-blue-600 group-hover:translate-x-2 transition-transform">
                  {t('Know your campus →', 'Conoce tu campus →')}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-white border-y border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg mb-4 text-slate-900">
                {t('Who made this?', '¿Quién hizo esto?')}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t(
                  'This site was created by student organizers and community advocates at George Mason University in collaboration with UndocuMason and student legal aid services. Our goal is to provide accurate, accessible information about digital privacy rights.',
                  'Este sitio fue creado por organizadores estudiantiles y defensores comunitarios en George Mason University en colaboración con UndocuMason y servicios de asistencia legal estudiantil. Nuestro objetivo es proporcionar información precisa y accesible sobre derechos de privacidad digital.'
                )}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg mb-4 text-slate-900">
                {t('Partner Organizations', 'Organizaciones Asociadas')}
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-100 rounded border border-slate-300">
                  UndocuMason
                </div>
                <div className="px-4 py-2 bg-slate-100 rounded border border-slate-300">
                  {t('GMU Student Legal Services', 'Servicios Legales Estudiantiles GMU')}
                </div>
                <div className="px-4 py-2 bg-slate-100 rounded border border-slate-300">
                  {t('Student Privacy Coalition', 'Coalición de Privacidad Estudiantil')}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-200">
            <div className="text-sm text-slate-600">
              {t('Last updated: April 6, 2026', 'Última actualización: 6 de abril de 2026')}
            </div>
            <div className="px-4 py-2 bg-amber-50 border border-amber-300 rounded text-sm text-amber-900">
              {t('This is not legal advice', 'Esto no es asesoramiento legal')}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}