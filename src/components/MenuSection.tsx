import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import {
  EXTRAS_OPTIONS,
  GRIND_OPTIONS,
  MENU_ITEMS,
  ORIGINS,
  type MenuCategory,
} from '../data/menu';

const CATEGORY_TABS: { id: MenuCategory; label: string; subtitle: string }[] = [
  {
    id: 'clasicos',
    label: 'Clásicos',
    subtitle: 'Espresso de especialidad y leche texturizada. Cualquier café que elijas puede ser frío.',
  },
  {
    id: 'endulzados',
    label: 'Cafés Endulzados',
    subtitle: 'Fríos, calientes o frappé. Preparados en taza grande con salsas de la barra.',
  },
  {
    id: 'casa',
    label: 'De la Casa',
    subtitle: 'Pídelas frías, calientes o frappé. Cold brew 24 hs, tónicos y cócteles de espresso.',
  },
  {
    id: 'filtrados',
    label: 'Filtrados y Granos',
    subtitle: 'Métodos manuales al momento y cuartos de café de Colombia, Brasil, Bolivia y Blends.',
  },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('clasicos');
  const [searchQuery, setSearchQuery] = useState('');
  const [only3D, setOnly3D] = useState(false);
  const [onlyCold, setOnlyCold] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCat = q ? true : item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matches3D = !only3D || Boolean(item.supports3D);
      const matchesCold = !onlyCold || item.temperatures.includes('Frío');
      return matchesCat && matchesQuery && matches3D && matchesCold;
    });
  }, [activeCategory, searchQuery, only3D, onlyCold]);

  const activeTabInfo = CATEGORY_TABS.find((t) => t.id === activeCategory)!;

  return (
    <section id="carta" className="py-20 lg:py-28 border-t border-[#171513]/12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7D512C] mb-3">
              La Carta Completa
            </p>
            <h2
              className="font-display font-bold tracking-tight text-[#171513] leading-[0.98]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.35rem)', textWrap: 'balance' }}
            >
              Bebidas de barra, filtrados y cuartos para llevar
            </h2>
          </div>
          <p className="text-sm text-[#5C5349] max-w-sm leading-relaxed">
            Explorá todas las preparaciones de nuestra barra en Buenos Aires, filtrando por categoría, versión fría o bebidas aptas para Latte Arte 3D.
          </p>
        </div>

        {/* Category Tabs + Search & Toggles */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#171513]/15">
          <div
            className="flex flex-wrap items-center gap-1 p-1 bg-[#EAE4D7] rounded-lg w-fit"
            role="tablist"
            aria-label="Categorías de la carta"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id && !searchQuery.trim();
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171513] ${
                    isActive
                      ? 'bg-[#171513] text-[#FAF8F4]'
                      : 'text-[#4A433B] hover:text-[#171513]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="relative flex items-center">
              <Search className="w-4 h-4 text-[#6B6257] absolute left-3 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar bebida o método..."
                aria-label="Buscar en la carta"
                className="pl-9 pr-3 py-2 text-sm bg-[#FAF8F4] border border-[#171513]/20 rounded-lg text-[#171513] placeholder:text-[#786E63] w-56 focus:outline-none focus:border-[#171513]"
              />
            </label>

            <button
              type="button"
              onClick={() => setOnlyCold((v) => !v)}
              aria-pressed={onlyCold}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                onlyCold
                  ? 'bg-[#171513] text-[#FAF8F4] border-[#171513]'
                  : 'bg-[#FAF8F4] text-[#4A433B] border-[#171513]/20 hover:border-[#171513]'
              }`}
            >
              Versión fría
            </button>

            <button
              type="button"
              onClick={() => setOnly3D((v) => !v)}
              aria-pressed={only3D}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                only3D
                  ? 'bg-[#9C6B3F] text-[#FAF8F4] border-[#9C6B3F]'
                  : 'bg-[#FAF8F4] text-[#4A433B] border-[#171513]/20 hover:border-[#171513]'
              }`}
            >
              Apto Arte 3D
            </button>
          </div>
        </div>

        {/* Category Subtitle */}
        <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-[#5C5349]">
          <p>
            {searchQuery.trim()
              ? `Resultados para "${searchQuery.trim()}" en toda la carta`
              : activeTabInfo.subtitle}
          </p>
          <span className="font-mono text-xs tabular-nums text-[#6B6257] whitespace-nowrap">
            {filteredItems.length} opciones
          </span>
        </div>

        {/* Menu Broadsheet Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-14 px-6 text-center bg-[#FAF8F4] border border-[#171513]/12 rounded-xl">
            <p className="text-base font-semibold text-[#171513] mb-2">
              No encontramos bebidas con esos filtros
            </p>
            <p className="text-sm text-[#5C5349] mb-5">
              Probá limpiando la búsqueda o activando todas las temperaturas.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setOnly3D(false);
                setOnlyCold(false);
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#171513] text-[#FAF8F4] rounded-lg cursor-pointer hover:bg-[#2C2824]"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="py-5 border-b border-[#171513]/12 flex items-start justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 className="text-base font-bold tracking-tight text-[#171513]">
                      {item.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#6B6257] tabular-nums">
                      {item.vessel}
                    </span>
                  </div>
                  <p className="text-sm text-[#5C5349] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#7D512C] mt-2 font-medium">
                    {item.temperatures.join(' · ')}
                    {item.supports3D ? ' · Apto Latte Arte 3D' : ''}
                    {item.note ? ` · ${item.note}` : ''}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Extras + Cuartos de Café (250g) Info Strip */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#171513]/15 rounded-xl p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#7D512C] mb-2">
                Extras de Barra
              </p>
              <h3 className="font-display text-2xl font-bold text-[#171513] mb-3">
                Personalizá tu bebida en el local
              </h3>
              <p className="text-sm text-[#5C5349] mb-5 leading-relaxed">
                Cualquier café de nuestra carta puede prepararse frío y adaptarse con leches vegetales o figura 3D.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#171513] border-t border-[#171513]/10 pt-5">
              {EXTRAS_OPTIONS.map((extra) => (
                <li key={extra.id} className="flex items-center justify-between">
                  <span>{extra.label}</span>
                  <span className="font-mono text-xs text-[#7D512C]">·</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 bg-[#171513] text-[#FAF8F4] rounded-xl p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D7A97E] mb-2">
                Cuartos de Café · 250 g
              </p>
              <h3 className="font-display text-2xl font-bold text-[#FAF8F4] mb-2">
                Cafés para elegir en barra y para tu casa
              </h3>
              <p className="text-sm text-[#D6CFC5] mb-6 leading-relaxed">
                Orígenes rotativos de especialidad. Preguntar al barista por disponibilidad diaria en tolva o en bolsa de cuarto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#FAF8F4]/12 pt-5 text-sm">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D7A97E] mb-2">
                  Orígenes disponibles
                </p>
                <p className="text-[#FAF8F4] leading-relaxed">
                  {ORIGINS.map((o) => o.country).join(' · ')}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#D7A97E] mb-2">
                  Molienda al momento
                </p>
                <p className="text-[#D6CFC5] leading-relaxed">
                  {GRIND_OPTIONS.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
