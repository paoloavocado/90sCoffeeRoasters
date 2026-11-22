import type { Latte3DFigure } from '../data/menu';

export function CrestLogo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-label="Sello 90's Coffee Roasters"
      role="img"
    >
      <circle cx="60" cy="60" r="56" fill="#FAF8F4" stroke="#171513" strokeWidth="4" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="#171513" strokeWidth="1.25" />
      <text
        x="57"
        y="68"
        textAnchor="middle"
        fill="#171513"
        fontFamily="Antonio, sans-serif"
        fontWeight="700"
        fontSize="50"
        letterSpacing="-2"
      >
        90
      </text>
      <text
        x="83"
        y="40"
        textAnchor="middle"
        fill="#171513"
        fontFamily="Antonio, sans-serif"
        fontWeight="700"
        fontSize="16"
      >
        &apos;s
      </text>
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fill="#171513"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="1.6"
      >
        COFFEE
      </text>
      <text
        x="60"
        y="94"
        textAnchor="middle"
        fill="#171513"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="1.3"
      >
        ROASTERS
      </text>
    </svg>
  );
}

export function BearWalkmanIllustration({ className = 'w-full h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      className={className}
      aria-label="Ilustración del oso 90's Coffee con auriculares, walkman y taza"
      role="img"
    >
      {/* Subtle warm coffee ring stain */}
      <circle cx="248" cy="86" r="44" fill="none" stroke="#9C6B3F" strokeOpacity="0.22" strokeWidth="6" />
      <circle cx="248" cy="86" r="48" fill="none" stroke="#9C6B3F" strokeOpacity="0.1" strokeWidth="2" />

      {/* Steam lines */}
      <path
        d="M84 185 C79 172, 92 162, 86 148"
        fill="none"
        stroke="#9C6B3F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M98 183 C93 171, 105 162, 100 150"
        fill="none"
        stroke="#9C6B3F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bear Ears */}
      <circle cx="132" cy="76" r="18" fill="#FAF8F4" stroke="#171513" strokeWidth="3.2" />
      <circle cx="132" cy="76" r="8" fill="#E6DFD1" />
      <circle cx="216" cy="76" r="18" fill="#FAF8F4" stroke="#171513" strokeWidth="3.2" />
      <circle cx="216" cy="76" r="8" fill="#E6DFD1" />

      {/* Headphones Band */}
      <path
        d="M114 118 C114 54, 234 54, 234 118"
        fill="none"
        stroke="#171513"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Bear Head */}
      <ellipse cx="174" cy="118" rx="52" ry="44" fill="#FAF8F4" stroke="#171513" strokeWidth="3.2" />

      {/* Headphone Cups */}
      <rect x="106" y="96" width="18" height="40" rx="8" fill="#171513" />
      <rect x="110" y="102" width="6" height="28" rx="3" fill="#9C6B3F" />
      <rect x="224" y="96" width="18" height="40" rx="8" fill="#171513" />
      <rect x="232" y="102" width="6" height="28" rx="3" fill="#9C6B3F" />

      {/* Bear Face */}
      <circle cx="155" cy="110" r="4" fill="#171513" />
      <circle cx="193" cy="110" r="4" fill="#171513" />
      <ellipse cx="174" cy="126" rx="18" ry="13" fill="#EFEAE0" stroke="#171513" strokeWidth="2" />
      <ellipse cx="174" cy="121" rx="6.5" ry="4.5" fill="#171513" />
      <path d="M174 126 L174 132 M168 132 Q174 136 180 132" fill="none" stroke="#171513" strokeWidth="2.2" strokeLinecap="round" />

      {/* Hoodie Body */}
      <path
        d="M104 178 C108 156, 134 150, 174 150 C214 150, 240 156, 244 178 L254 294 L94 294 Z"
        fill="#FAF8F4"
        stroke="#171513"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Hoodie collar & strings */}
      <path
        d="M138 154 Q174 176 210 154"
        fill="none"
        stroke="#171513"
        strokeWidth="2.8"
      />
      <path d="M158 166 L156 206" fill="none" stroke="#171513" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M190 166 L192 202" fill="none" stroke="#171513" strokeWidth="2.4" strokeLinecap="round" />

      {/* Coffee splash stain on hoodie */}
      <path
        d="M188 228 C196 216, 214 218, 216 232 C218 244, 206 254, 194 252 C182 250, 180 238, 188 228 Z"
        fill="#9C6B3F"
        fillOpacity="0.24"
      />
      <circle cx="222" cy="244" r="4" fill="#9C6B3F" fillOpacity="0.28" />

      {/* Walkman & Wire */}
      <path
        d="M115 136 C100 175, 245 190, 255 224"
        fill="none"
        stroke="#171513"
        strokeWidth="2"
        strokeDasharray="1 0"
      />
      <rect x="242" y="218" width="28" height="42" rx="4" fill="#171513" />
      <rect x="247" y="224" width="18" height="16" rx="2" fill="#9C6B3F" />
      <circle cx="252" cy="232" r="2.5" fill="#171513" />
      <circle cx="260" cy="232" r="2.5" fill="#171513" />
      <rect x="247" y="245" width="18" height="4" rx="1" fill="#FAF8F4" fillOpacity="0.55" />

      {/* 90's Mug in Left Paw */}
      <rect x="64" y="196" width="54" height="58" rx="6" fill="#FAF8F4" stroke="#171513" strokeWidth="3.2" />
      <path d="M64 210 C48 210, 48 240, 64 240" fill="none" stroke="#171513" strokeWidth="3.2" />
      <text
        x="91"
        y="236"
        textAnchor="middle"
        fill="#171513"
        fontFamily="Antonio, sans-serif"
        fontWeight="700"
        fontSize="28"
      >
        90
      </text>
      {/* Paw holding mug */}
      <ellipse cx="116" cy="226" rx="14" ry="12" fill="#FAF8F4" stroke="#171513" strokeWidth="3" />

      {/* Caption stamp */}
      <text
        x="174"
        y="322"
        textAnchor="middle"
        fill="#5C5349"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        letterSpacing="1.5"
      >
        CAFETERÍA DE ESPECIALIDAD · BUENOS AIRES
      </text>
    </svg>
  );
}

export function BearPourOverIllustration({ className = 'w-full h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      aria-label="Oso barista sirviendo filtrado V60 con pava cuello de cisne"
      role="img"
    >
      {/* Bear head + sunglasses */}
      <circle cx="136" cy="54" r="15" fill="#FAF8F4" stroke="#171513" strokeWidth="3" />
      <circle cx="204" cy="54" r="15" fill="#FAF8F4" stroke="#171513" strokeWidth="3" />
      <path d="M118 86 C118 32, 222 32, 222 86" fill="none" stroke="#171513" strokeWidth="5" />
      <ellipse cx="170" cy="86" rx="44" ry="38" fill="#FAF8F4" stroke="#171513" strokeWidth="3" />
      <rect x="111" y="68" width="14" height="32" rx="6" fill="#171513" />
      <rect x="215" y="68" width="14" height="32" rx="6" fill="#171513" />

      {/* 90s Sunglasses */}
      <rect x="136" y="72" width="28" height="16" rx="3" fill="#171513" />
      <rect x="176" y="72" width="28" height="16" rx="3" fill="#171513" />
      <line x1="164" y1="78" x2="176" y2="78" stroke="#171513" strokeWidth="3" />
      <line x1="142" y1="76" x2="150" y2="84" stroke="#FAF8F4" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="182" y1="76" x2="190" y2="84" stroke="#FAF8F4" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Snout */}
      <ellipse cx="170" cy="98" rx="14" ry="10" fill="#EFEAE0" stroke="#171513" strokeWidth="2" />
      <ellipse cx="170" cy="95" rx="5" ry="3.5" fill="#171513" />

      {/* Torso */}
      <path
        d="M112 136 C116 122, 140 118, 170 118 C200 118, 224 122, 228 136 L236 226 L104 226 Z"
        fill="#FAF8F4"
        stroke="#171513"
        strokeWidth="3"
      />

      {/* Gooseneck Kettle */}
      <path d="M56 138 L94 138 L100 182 L50 182 Z" fill="#171513" />
      <path d="M54 146 C36 146, 36 174, 52 174" fill="none" stroke="#171513" strokeWidth="4" />
      <path d="M96 168 C118 168, 122 146, 144 146" fill="none" stroke="#171513" strokeWidth="4" strokeLinecap="round" />
      {/* Pour stream */}
      <path d="M146 149 C152 158, 152 170, 154 180" fill="none" stroke="#9C6B3F" strokeWidth="2.5" strokeLinecap="round" />

      {/* V60 Dripper & Glass Server */}
      <polygon points="126,180 182,180 162,212 146,212" fill="#FAF8F4" stroke="#171513" strokeWidth="2.8" />
      <line x1="138" y1="188" x2="170" y2="188" stroke="#9C6B3F" strokeWidth="2" />
      <path d="M132 212 L176 212 L184 252 L124 252 Z" fill="#FAF8F4" stroke="#171513" strokeWidth="2.8" />
      <path d="M130 232 L178 232 L182 250 L126 250 Z" fill="#9C6B3F" fillOpacity="0.45" />
    </svg>
  );
}

export function LatteArt3DIllustration({ figure }: { figure: Latte3DFigure['id'] }) {
  return (
    <svg
      viewBox="0 0 260 220"
      className="w-full max-w-[260px] h-auto mx-auto"
      aria-label={`Ilustración de Latte Arte 3D: ${figure}`}
      role="img"
    >
      {/* Saucer */}
      <ellipse cx="130" cy="186" rx="92" ry="18" fill="#E9E2D4" stroke="#171513" strokeWidth="2.5" />
      {/* Cup Body */}
      <path
        d="M64 114 L196 114 C192 162, 166 180, 130 180 C94 180, 68 162, 64 114 Z"
        fill="#FAF8F4"
        stroke="#171513"
        strokeWidth="2.8"
      />
      {/* Cup Handle */}
      <path
        d="M194 124 C216 124, 216 158, 186 158"
        fill="none"
        stroke="#171513"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Espresso Rim */}
      <ellipse cx="130" cy="114" rx="66" ry="22" fill="#9C6B3F" stroke="#171513" strokeWidth="2.5" />
      <ellipse cx="130" cy="114" rx="58" ry="17" fill="#7D512C" />

      {/* 3D Sculpted Foam Figures */}
      {figure === 'osito' && (
        <g>
          {/* Foam base */}
          <ellipse cx="130" cy="108" rx="44" ry="18" fill="#FAF8F4" stroke="#171513" strokeWidth="2" />
          {/* Ears */}
          <circle cx="102" cy="70" r="12" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" />
          <circle cx="158" cy="70" r="12" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" />
          {/* 3D Head */}
          <ellipse cx="130" cy="88" rx="34" ry="26" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" />
          {/* Paws resting on rim */}
          <ellipse cx="104" cy="114" rx="10" ry="7" fill="#FAF8F4" stroke="#171513" strokeWidth="2" />
          <ellipse cx="156" cy="114" rx="10" ry="7" fill="#FAF8F4" stroke="#171513" strokeWidth="2" />
          {/* Espresso art details */}
          <circle cx="118" cy="84" r="2.8" fill="#171513" />
          <circle cx="142" cy="84" r="2.8" fill="#171513" />
          <ellipse cx="130" cy="94" rx="10" ry="7" fill="#EFEAE0" />
          <ellipse cx="130" cy="91" rx="4" ry="2.8" fill="#171513" />
          <path d="M126 97 Q130 100 134 97" fill="none" stroke="#171513" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      )}

      {figure === 'gatito' && (
        <g>
          <ellipse cx="130" cy="108" rx="42" ry="16" fill="#FAF8F4" stroke="#171513" strokeWidth="2" />
          {/* Pointed Ears */}
          <polygon points="98,84 104,54 120,74" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" strokeLinejoin="round" />
          <polygon points="162,84 156,54 140,74" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" strokeLinejoin="round" />
          <ellipse cx="130" cy="90" rx="34" ry="24" fill="#FAF8F4" stroke="#171513" strokeWidth="2.2" />
          {/* Sleeping eyes */}
          <path d="M112 88 Q117 92 122 88" fill="none" stroke="#171513" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M138 88 Q143 92 148 88" fill="none" stroke="#171513" strokeWidth="2.2" strokeLinecap="round" />
          {/* Whiskers */}
          <path d="M100 92 L110 94 M100 97 L110 97" stroke="#171513" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M160 92 L150 94 M160 97 L150 97" stroke="#171513" strokeWidth="1.6" strokeLinecap="round" />
          <polygon points="127,94 133,94 130,97" fill="#9C6B3F" />
          {/* Curled Tail */}
          <path d="M158 106 C176 102, 174 86, 164 88" fill="none" stroke="#FAF8F4" strokeWidth="7" strokeLinecap="round" />
          <path d="M158 106 C176 102, 174 86, 164 88" fill="none" stroke="#171513" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {figure === 'shiba' && (
        <g>
          <ellipse cx="130" cy="108" rx="44" ry="17" fill="#E6C396" stroke="#171513" strokeWidth="2" />
          {/* Shiba Ears */}
          <polygon points="96,82 102,54 118,74" fill="#D49B5C" stroke="#171513" strokeWidth="2.2" strokeLinejoin="round" />
          <polygon points="164,82 158,54 142,74" fill="#D49B5C" stroke="#171513" strokeWidth="2.2" strokeLinejoin="round" />
          {/* Head */}
          <ellipse cx="130" cy="88" rx="35" ry="25" fill="#D49B5C" stroke="#171513" strokeWidth="2.2" />
          {/* Cream Cheeks */}
          <path
            d="M98 94 C106 84, 124 88, 130 96 C136 88, 154 84, 162 94 C160 108, 146 113, 130 113 C114 113, 100 108, 98 94 Z"
            fill="#FAF8F4"
          />
          {/* Eyebrows & Eyes */}
          <circle cx="117" cy="84" r="2.8" fill="#171513" />
          <circle cx="143" cy="84" r="2.8" fill="#171513" />
          <ellipse cx="116" cy="77" rx="4" ry="2.2" fill="#FAF8F4" />
          <ellipse cx="144" cy="77" rx="4" ry="2.2" fill="#FAF8F4" />
          <ellipse cx="130" cy="95" rx="4.5" ry="3" fill="#171513" />
          <path d="M125 101 Q130 105 135 101" fill="none" stroke="#171513" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
