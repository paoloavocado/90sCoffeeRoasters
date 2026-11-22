import { useState } from 'react';
import { LATTE_3D_FIGURES, ORIGINS, type Latte3DFigure } from '../data/menu';
import { BearPourOverIllustration, LatteArt3DIllustration } from './BrandArt';

export function ExperienceSection() {
  const [selectedFigure, setSelectedFigure] = useState<Latte3DFigure['id']>('osito');
  const [selectedOriginId, setSelectedOriginId] = useState<string>(ORIGINS[0].id);

  const activeFigure = LATTE_3D_FIGURES.find((f) => f.id === selectedFigure)!;
  const activeOrigin = ORIGINS.find((o) => o.id === selectedOriginId)!;

  return (
    <section id="experiencia" className="py-20 lg:py-28 border-t border-[#171513]/12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7D512C] mb-3">
            Experiencia 90&apos;s
          </p>
          <h2
            className="font-display font-bold tracking-tight text-[#171513] leading-[0.98]"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.35rem)', textWrap: 'balance' }}
          >
            Tres razones para quedarte en la barra
          </h2>
        </div>

        {/* 01. Latte Arte 3D Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="lg:col-span-7 bg-[#FAF8F4] border border-[#171513]/15 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#7D512C] mb-2">
                01. Los mejores en Latte Arte 3D
              </p>
              <h3 className="font-display text-3xl font-bold text-[#171513] mb-3">
                Espuma esculpida a mano sobre tu taza
              </h3>
              <p className="text-sm text-[#5C5349] leading-relaxed max-w-xl mb-6">
                Texturizamos microespuma densa para modelar figuras en volumen sobre tu Latte, Flat White, Mocca o Dirty Chai sin perder temperatura ni dulzor natural de la leche.
              </p>

              {/* Figure selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                {LATTE_3D_FIGURES.map((fig) => {
                  const active = fig.id === selectedFigure;
                  return (
                    <button
                      key={fig.id}
                      type="button"
                      onClick={() => setSelectedFigure(fig.id)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#171513] text-[#FAF8F4] border-[#171513]'
                          : 'bg-[#F4F1EA] text-[#171513] border-[#171513]/20 hover:border-[#171513]'
                      }`}
                    >
                      {fig.name}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[#171513]/12 pt-5 space-y-2 text-sm">
                <p className="font-semibold text-[#171513]">{activeFigure.name}</p>
                <p className="text-[#5C5349]">{activeFigure.caption}</p>
                <p className="text-xs font-mono text-[#7D512C] pt-1">
                  Bebidas sugeridas: {activeFigure.compatibleWith} · {activeFigure.prepTime}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#171513]/10">
              <span className="text-xs text-[#6B6257]">
                Pedilo en barra como extra “3D” sobre cualquier bebida con leche texturizada.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#EFE9DC] border border-[#171513]/15 rounded-xl p-8 flex flex-col items-center justify-center">
            <LatteArt3DIllustration figure={selectedFigure} />
            <p className="font-mono text-xs text-[#5C5349] mt-4 text-center">
              Vista previa de diseño · {activeFigure.name}
            </p>
          </div>
        </div>

        {/* 02. Orígenes y Filtrados + 03. Vinos y Salón Pet Friendly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div
            id="granos"
            className="lg:col-span-7 bg-[#FAF8F4] border border-[#171513]/15 rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#7D512C] mb-2">
                02. Barra de Filtrados y Orígenes
              </p>
              <h3 className="font-display text-3xl font-bold text-[#171513] mb-3">
                Colombia, Brasil, Bolivia y Blends
              </h3>
              <p className="text-sm text-[#5C5349] leading-relaxed mb-6">
                Preparamos cada origen en V60, Chemex, Syphon Japonés, Aeropress, Origami o Prensa Francesa, y podés llevar cuartos de 250 g recién molidos.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {ORIGINS.map((origin) => {
                  const active = origin.id === selectedOriginId;
                  return (
                    <button
                      key={origin.id}
                      type="button"
                      onClick={() => setSelectedOriginId(origin.id)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#171513] text-[#FAF8F4] border-[#171513]'
                          : 'bg-[#F4F1EA] text-[#171513] border-[#171513]/20 hover:border-[#171513]'
                      }`}
                    >
                      {origin.country}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[#171513]/12 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6257]">
                    Perfil de taza
                  </span>
                  <p className="font-semibold text-[#171513] mt-1">{activeOrigin.region}</p>
                  <p className="text-[#5C5349] mt-1">{activeOrigin.notes}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6257]">
                    Recomendación de barista
                  </span>
                  <p className="font-semibold text-[#171513] mt-1">{activeOrigin.recommendedMethod}</p>
                  <p className="text-[#7D512C] mt-1 font-medium">{activeOrigin.roast} · {activeOrigin.availability}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#171513]/15 rounded-xl p-8 flex flex-col justify-between">
            <div className="max-w-[230px] mx-auto mb-4">
              <BearPourOverIllustration />
            </div>
            <div className="border-t border-[#171513]/12 pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#7D512C] mb-2">
                03. Specialty Coffee & Wines
              </p>
              <h3 className="font-display text-2xl font-bold text-[#171513] mb-2">
                Tardes de vinos, Espresso Martini y ambiente Pet Friendly
              </h3>
              <p className="text-sm text-[#5C5349] leading-relaxed">
                Arrancá la mañana con un Flat White o V60 y quedate a la tarde con una copa de vino seleccionado o un Espresso Martini batido al momento. Tu perro siempre es bienvenido en la barra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
