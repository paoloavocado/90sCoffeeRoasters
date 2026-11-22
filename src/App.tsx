import { useState } from 'react';
import { BearWalkmanIllustration, CrestLogo } from './components/BrandArt';
import { ExperienceSection } from './components/ExperienceSection';
import { LocationSection } from './components/LocationSection';
import { MenuSection } from './components/MenuSection';

const HERO_SPOTLIGHTS = [
  {
    id: '3d',
    label: 'Latte Arte 3D',
    detail: 'Figuras esculpidas en microespuma sobre tu Latte, Flat White o Mocca.',
  },
  {
    id: 'cold',
    label: 'Cold Brew 24 hs',
    detail: 'Maceración lenta de 24 horas, versión clásica, Cold Drip o Cold Brew Limonada.',
  },
  {
    id: 'filtrados',
    label: 'Syphon & V60',
    detail: 'Extracciones manuales al momento con granos de Colombia, Brasil y Bolivia.',
  },
] as const;

export default function App() {
  const [activeSpotlight, setActiveSpotlight] = useState<(typeof HERO_SPOTLIGHTS)[number]['id']>('3d');

  const currentSpotlight = HERO_SPOTLIGHTS.find((s) => s.id === activeSpotlight)!;

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#171513]">
      {/* Top Navigation Bar: Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-sm border-b border-[#171513]/12">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#inicio"
            className="font-display text-2xl font-bold tracking-tight text-[#171513] whitespace-nowrap shrink-0"
          >
            90&apos;s Coffee Roasters
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A433B]"
          >
            <a
              href="#carta"
              className="hover:text-[#171513] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              La Carta
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#171513] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Latte Arte 3D
            </a>
            <a
              href="#granos"
              className="hover:text-[#171513] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Granos
            </a>
            <a
              href="#local"
              className="hover:text-[#171513] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              El Local
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="https://www.rappi.com.ar/restaurantes/delivery/91437-90s-coffe-roasters"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold bg-[#171513] hover:bg-[#2E2924] text-[#FAF8F4] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Pedir en Rappi
            </a>
          </div>
        </div>
      </header>

      <main id="inicio" className="flex-1">
        {/* Hero Split Section */}
        <section className="pt-12 pb-12 lg:pt-18 lg:pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7D512C] mb-5">
                    Maipú 714, Buenos Aires · Cafetería de especialidad de verdad
                  </p>
                  <h1
                    className="font-display font-bold tracking-tight text-[#171513] leading-[0.95] mb-6"
                    style={{ fontSize: 'clamp(2.65rem, 5vw, 4.35rem)', textWrap: 'balance' }}
                  >
                    Café de especialidad, latte arte 3D y vinos.
                  </h1>
                  <p className="text-base text-[#4A433B] leading-relaxed max-w-xl mb-8">
                    En 90&apos;s Coffee Roasters tostamos y servimos orígenes de Colombia, Brasil y Bolivia en espresso, métodos filtrados y barra fría. Los mejores en Latte Arte 3D, con tardes de vinos y puerta abierta para tu perro.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#carta"
                      className="px-6 py-3.5 text-sm font-semibold bg-[#171513] hover:bg-[#2E2924] text-[#FAF8F4] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      Explorar la carta
                    </a>
                    <a
                      href="#local"
                      className="px-5 py-3.5 text-sm font-semibold text-[#171513] border border-[#171513]/25 hover:border-[#171513] bg-[#FAF8F4] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      Horarios y Rappi
                    </a>
                  </div>
                </div>

                {/* Compact Anchor Line */}
                <div className="mt-10 pt-6 border-t border-[#171513]/12 flex items-center gap-4">
                  <CrestLogo className="w-14 h-14 shrink-0" />
                  <div className="text-xs text-[#5C5349] leading-relaxed">
                    <p className="font-semibold text-[#171513]">
                      Specialty Coffee & Wines · Pet Friendly
                    </p>
                    <p>
                      Cualquier café de la carta puede pedirse frío, caliente o frappé.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Mascot & Barra Preview */}
              <div className="lg:col-span-6 bg-[#FAF8F4] border border-[#171513]/15 rounded-xl p-6 lg:p-8 flex flex-col justify-between">
                <div className="max-w-[300px] mx-auto w-full py-2">
                  <BearWalkmanIllustration />
                </div>

                <div className="border-t border-[#171513]/12 pt-5 mt-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {HERO_SPOTLIGHTS.map((spot) => {
                      const active = spot.id === activeSpotlight;
                      return (
                        <button
                          key={spot.id}
                          type="button"
                          onClick={() => setActiveSpotlight(spot.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'bg-[#171513] text-[#FAF8F4]'
                              : 'bg-[#F4F1EA] text-[#4A433B] hover:text-[#171513]'
                          }`}
                        >
                          {spot.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-[#4A433B] leading-relaxed">
                    {currentSpotlight.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Information Strip Below Hero Split */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#171513]/15">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7D512C]">
                  Lunes a Sábado
                </p>
                <p className="font-display text-2xl font-bold text-[#171513] mt-1 tabular-nums">
                  08:00 a 20:00 hs
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7D512C]">
                  Domingos
                </p>
                <p className="font-display text-2xl font-bold text-[#171513] mt-1 tabular-nums">
                  13:00 a 18:00 hs
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7D512C]">
                  Especialidad
                </p>
                <p className="font-display text-2xl font-bold text-[#171513] mt-1">
                  Latte Arte 3D y Vinos
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7D512C]">
                  Salón y Delivery
                </p>
                <p className="font-display text-2xl font-bold text-[#171513] mt-1">
                  Pet Friendly · Rappi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Menu Section */}
        <MenuSection />

        {/* Experience Section: 3D Latte Art, Origins, Wines */}
        <ExperienceSection />

        {/* Location, Hours, Rappi & Consultation Section */}
        <LocationSection />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="bg-[#110F0E] text-[#C6BEB4] border-t border-[#FAF8F4]/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-[#FAF8F4]">
              90&apos;s Coffee Roasters
            </p>
            <p className="text-xs text-[#9D9489] mt-1">
              Maipú 714, C1006 Cdad. Autónoma de Buenos Aires · Tel. 011 2395-9868
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#carta" className="hover:text-[#FAF8F4] transition-colors">
              La Carta
            </a>
            <a href="#experiencia" className="hover:text-[#FAF8F4] transition-colors">
              Latte Arte 3D
            </a>
            <a
              href="https://www.instagram.com/90scoffeeroasters/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F4] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.rappi.com.ar/restaurantes/delivery/91437-90s-coffe-roasters"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F4] transition-colors"
            >
              Rappi
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
