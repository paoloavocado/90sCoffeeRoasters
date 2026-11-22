export type MenuCategory = 'clasicos' | 'endulzados' | 'casa' | 'filtrados';

export type TemperatureOption = 'Caliente' | 'Frío' | 'Frappé';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  vessel: string;
  temperatures: TemperatureOption[];
  supports3D?: boolean;
  note?: string;
}

export interface OriginProfile {
  id: string;
  country: string;
  region: string;
  notes: string;
  roast: string;
  recommendedMethod: string;
  availability: string;
}

export interface Latte3DFigure {
  id: 'osito' | 'gatito' | 'shiba';
  name: string;
  caption: string;
  compatibleWith: string;
  prepTime: string;
}

export const EXTRAS_OPTIONS = [
  { id: 'avena', label: 'Leche de avena' },
  { id: 'almendra', label: 'Leche de almendra' },
  { id: 'shot', label: 'Shot extra espresso' },
  { id: 'endulzante', label: 'Endulzante' },
  { id: 'hielo', label: 'Agregado hielo' },
  { id: '3d', label: 'Latte arte 3D' },
] as const;

export const GRIND_OPTIONS = [
  'En grano entero',
  'Molienda V60 / Origami',
  'Molienda Chemex',
  'Molienda Aeropress',
  'Molienda Prensa Francesa',
  'Molienda Espresso',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE (CLÁSICOS)
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'clasicos',
    description: 'Clásico espresso corto e intenso.',
    vessel: 'Taza chica · 30 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'doppio',
    name: 'Doppio',
    category: 'clasicos',
    description: 'Espresso doble, doble de intenso.',
    vessel: 'Taza chica · 60 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    category: 'clasicos',
    description: 'Café con espuma de leche cremosa.',
    vessel: 'Taza chica · 60 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'cortado',
    name: 'Cortado',
    category: 'clasicos',
    description: 'Espresso con leche vaporizada, en taza chica.',
    vessel: 'Taza chica · 120 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'clasicos',
    description: 'Espresso doble con agua en taza mediana.',
    vessel: 'Taza mediana · 180 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'clasicos',
    description: 'Espresso simple, con leche espumosa en taza mediana.',
    vessel: 'Taza mediana · 180 ml',
    temperatures: ['Caliente', 'Frío'],
    supports3D: true,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'clasicos',
    description: 'Espresso doble y leche texturizada en taza mediana.',
    vessel: 'Taza mediana · 180 ml',
    temperatures: ['Caliente', 'Frío'],
    supports3D: true,
  },
  {
    id: 'magic',
    name: 'Magic',
    category: 'clasicos',
    description: 'Ristretto doble (corto) con leche en taza chica.',
    vessel: 'Taza chica · 140 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'clasicos',
    description: 'Espresso simple, con leche en taza grande.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío'],
    supports3D: true,
  },
  {
    id: 'latte-doble',
    name: 'Latte Doble',
    category: 'clasicos',
    description: 'Espresso doble con leche en taza grande.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío'],
    supports3D: true,
  },

  // CAFÉS ENDULZADOS (fríos, calientes o frappé)
  {
    id: 'mocca',
    name: 'Mocca',
    category: 'endulzados',
    description: 'Café con leche y chocolate.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'vainilla-latte',
    name: 'Vainilla Latte',
    category: 'endulzados',
    description: 'Espresso con leche y agregado de vainilla.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    category: 'endulzados',
    description: 'Salsa de caramelo, café y leche en taza grande.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'pistacho-latte',
    name: 'Pistacho Latte',
    category: 'endulzados',
    description: 'Café y leche en taza grande con salsa de pistacho.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    category: 'endulzados',
    description: 'Leche condensada, café y leche en taza grande.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'nutella-latte',
    name: 'Nutella Latte',
    category: 'endulzados',
    description: 'Café con leche en taza grande con agregado de Nutella.',
    vessel: 'Taza grande · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },

  // CAFÉS DE LA CASA (fríos, calientes o frappé)
  {
    id: 'dirty-chai',
    name: 'Dirty Chai',
    category: 'casa',
    description: 'Suave, floral y equilibrado.',
    vessel: 'Barra de autor · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'matcha-fruti',
    name: 'Matcha Fruti',
    category: 'casa',
    description: 'Especiado, aromático y perfecto con leche.',
    vessel: 'Barra de autor · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },
  {
    id: 'monochromatico',
    name: 'Monochromatico',
    category: 'casa',
    description: 'Infusión dulce y ligeramente ácida, con café.',
    vessel: 'Vaso de autor · 240 ml',
    temperatures: ['Frío', 'Caliente'],
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic',
    category: 'casa',
    description: 'Ligera y reconfortante. Un clásico calmante.',
    vessel: 'Vaso alto · 280 ml',
    temperatures: ['Frío'],
  },
  {
    id: 'affogatto',
    name: 'Affogatto',
    category: 'casa',
    description: 'Cremoso, rico y con helado de crema americana.',
    vessel: 'Copa · Postre con espresso',
    temperatures: ['Frío'],
  },
  {
    id: 'cold-brew-limonada',
    name: 'Cold Brew Limonada',
    category: 'casa',
    description: 'Intenso, ácido y refrescante con café de extracción lenta.',
    vessel: 'Vaso alto · 280 ml',
    temperatures: ['Frío'],
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'casa',
    description: 'Macerado durante 24 hs, un clásico limpio y sedoso.',
    vessel: 'Vaso alto · 250 ml',
    temperatures: ['Frío'],
  },
  {
    id: 'cold-drip',
    name: 'Cold Drip',
    category: 'casa',
    description: 'Infusión por choque térmico al momento.',
    vessel: 'Vaso corto · 200 ml',
    temperatures: ['Frío'],
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    category: 'casa',
    description: 'Intenso, cremoso y con un toque de alcohol.',
    vessel: 'Copa martini · 150 ml',
    temperatures: ['Frío'],
    note: 'Solo en barra / mayores de 18',
  },
  {
    id: 'dirty-mocca',
    name: 'Dirty Mocca',
    category: 'casa',
    description: 'Dulce tipo postre, el favorito de la barra.',
    vessel: 'Vaso de autor · 240 ml',
    temperatures: ['Caliente', 'Frío', 'Frappé'],
    supports3D: true,
  },

  // FILTRADO
  {
    id: 'v60',
    name: 'V60',
    category: 'filtrados',
    description: 'Extracción cónica en papel que resalta acidez brillante y notas florales.',
    vessel: 'Jarra individual · 250 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'french-press',
    name: 'French Press',
    category: 'filtrados',
    description: 'Inmersión total de cuerpo pleno, textura densa y dulzor prolongado.',
    vessel: 'Prensa · 300 ml',
    temperatures: ['Caliente'],
  },
  {
    id: 'chemex',
    name: 'Chemex',
    category: 'filtrados',
    description: 'Filtro grueso para una taza cristalina, limpia y aromática.',
    vessel: 'Decanter · 320 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'syphon-japones',
    name: 'Syphon Japonés',
    category: 'filtrados',
    description: 'Infusión al vacío en cristal con perfil limpio y temperatura precisa.',
    vessel: 'Servicio en barra · 280 ml',
    temperatures: ['Caliente'],
  },
  {
    id: 'aeropress',
    name: 'Aeropress',
    category: 'filtrados',
    description: 'Presión manual versátil con dulzor concentrado y bajo amargor.',
    vessel: 'Taza · 220 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'origami',
    name: 'Origami',
    category: 'filtrados',
    description: 'Dripper de 20 pliegues con flujo constante y equilibrio aromático.',
    vessel: 'Jarra individual · 250 ml',
    temperatures: ['Caliente', 'Frío'],
  },
  {
    id: 'para-compartir',
    name: 'Filtrado Para Compartir',
    category: 'filtrados',
    description: 'Jarra de método manual preparada para dos o tres tazas en mesa.',
    vessel: 'Jarra · 550 ml',
    temperatures: ['Caliente', 'Frío'],
  },
];

export const ORIGINS: OriginProfile[] = [
  {
    id: 'colombia',
    country: 'Colombia',
    region: 'Huila & Tolima · Lavado',
    notes: 'Caramelo suave, fruta de carozo y acidez cítrica limpia.',
    roast: 'Tueste medio ligero',
    recommendedMethod: 'V60 o Origami',
    availability: 'Disponible en barra y cuartos de 250 g',
  },
  {
    id: 'brasil',
    country: 'Brasil',
    region: 'Cerrado Mineiro · Natural',
    notes: 'Cacao tostado, avellana y cuerpo cremoso dulce.',
    roast: 'Tueste medio',
    recommendedMethod: 'Espresso, Flat White o French Press',
    availability: 'Base de barra y cuartos de 250 g',
  },
  {
    id: 'bolivia',
    country: 'Bolivia',
    region: 'Caranavi · Altura',
    notes: 'Floral delicado, caña de azúcar y mandarina dulce.',
    roast: 'Tueste claro',
    recommendedMethod: 'Chemex o Syphon Japonés',
    availability: 'Lote rotativo · consultar al barista',
  },
  {
    id: 'blends',
    country: 'Blends de la Casa',
    region: 'Selección 90’s Roasters',
    notes: 'Balance diseñado para leche vaporizada, crema estable y final chocolatoso.',
    roast: 'Tueste medio',
    recommendedMethod: 'Latte Arte 3D, Cortado o Aeropress',
    availability: 'Disponible todos los días',
  },
];

export const LATTE_3D_FIGURES: Latte3DFigure[] = [
  {
    id: 'osito',
    name: 'Osito 90’s',
    caption: 'El clásico de la casa con espuma firme de microburbujas y cacao en trazo fino.',
    compatibleWith: 'Latte, Cappuccino, Vainilla Latte, Mocca',
    prepTime: '3–4 min en barra',
  },
  {
    id: 'gatito',
    name: 'Gatito Dormido',
    caption: 'Escultura 3D sobre crema densa con orejas en relieve y detalle en espresso.',
    compatibleWith: 'Latte, Flat White, Spanish Latte, Dirty Chai',
    prepTime: '3–4 min en barra',
  },
  {
    id: 'shiba',
    name: 'Shiba Inu',
    caption: 'Modelado artesanal bicoloreado con crema vaporizada y salsa de caramelo o chocolate.',
    compatibleWith: 'Latte Doble, Pistacho Latte, Caramel Latte',
    prepTime: '4–5 min en barra',
  },
];
