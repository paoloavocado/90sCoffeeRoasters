import { useMemo, useState, type FormEvent } from 'react';
import { Clock, ExternalLink, Instagram, MapPin, Phone } from 'lucide-react';

function getBuenosAiresStatus(): { openNow: boolean; label: string } {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekdayStr = parts.find((p) => p.type === 'weekday')?.value.toLowerCase() ?? '';
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
    const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
    const totalMinutes = hour * 60 + minute;

    const isSunday = weekdayStr.startsWith('dom');
    if (isSunday) {
      const isOpen = totalMinutes >= 13 * 60 && totalMinutes < 18 * 60;
      return {
        openNow: isOpen,
        label: isOpen
          ? 'Abierto ahora en Buenos Aires (hoy hasta las 18:00 hs)'
          : 'Cerrado ahora · Domingos abrimos de 13:00 a 18:00 hs',
      };
    }

    const isOpen = totalMinutes >= 8 * 60 && totalMinutes < 20 * 60;
    return {
      openNow: isOpen,
      label: isOpen
        ? 'Abierto ahora en Buenos Aires (hoy hasta las 20:00 hs)'
        : 'Cerrado ahora · Lunes a sábado abrimos de 08:00 a 20:00 hs',
    };
  } catch {
    return {
      openNow: true,
      label: 'Lunes a Sábado 08:00 a 20:00 hs · Domingos 13:00 a 18:00 hs',
    };
  }
}

export function LocationSection() {
  const status = useMemo(() => getBuenosAiresStatus(), []);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [inquiryType, setInquiryType] = useState('Disponibilidad de granos (250 g)');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError('Completá tu nombre y tu Instagram o teléfono para responderte.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="local" className="py-20 lg:py-28 bg-[#171513] text-[#FAF8F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hours, Location, Links */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#D7A97E] mb-3">
              El Local · Maipú 714, Buenos Aires
            </p>
            <h2
              className="font-display font-bold tracking-tight text-[#FAF8F4] leading-[0.98] mb-5"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.35rem)', textWrap: 'balance' }}
            >
              Pasá por la barra o pedí por Rappi
            </h2>
            <p className="text-sm text-[#D6CFC5] leading-relaxed mb-8 max-w-lg">
              {status.label}. Espacio pet friendly para venir con tu perro, elegir tu grano del día con nuestros baristas o disfrutar una copa de vino al caer la tarde.
            </p>

            {/* Location, Phone & Hours Grid */}
            <div className="border-t border-[#FAF8F4]/15 divide-y divide-[#FAF8F4]/15">
              <div className="py-4 flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-[#D6CFC5] shrink-0">
                  <MapPin className="w-4 h-4 text-[#D7A97E] shrink-0" />
                  <span>Dirección</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maipu+714+C1006+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FAF8F4] hover:text-[#D7A97E] underline underline-offset-4 text-right transition-colors"
                >
                  Maipú 714, C1006 Cdad. Autónoma de Buenos Aires
                </a>
              </div>
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-[#D6CFC5]">
                  <Phone className="w-4 h-4 text-[#D7A97E] shrink-0" />
                  <span>Teléfono</span>
                </div>
                <a
                  href="tel:+541123959868"
                  className="font-mono text-sm tabular-nums text-[#FAF8F4] hover:text-[#D7A97E] underline underline-offset-4 transition-colors"
                >
                  011 2395-9868
                </a>
              </div>
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-[#D6CFC5]">
                  <Clock className="w-4 h-4 text-[#D7A97E] shrink-0" />
                  <span>Lunes a Sábado</span>
                </div>
                <span className="font-mono text-sm tabular-nums text-[#FAF8F4]">
                  08:00 — 20:00 hs
                </span>
              </div>
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-[#D6CFC5]">
                  <Clock className="w-4 h-4 text-[#D7A97E] shrink-0" />
                  <span>Domingos</span>
                </div>
                <span className="font-mono text-sm tabular-nums text-[#FAF8F4]">
                  13:00 — 18:00 hs
                </span>
              </div>
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-[#D6CFC5]">
                  <MapPin className="w-4 h-4 text-[#D7A97E] shrink-0" />
                  <span>Modalidad</span>
                </div>
                <span className="text-sm text-[#FAF8F4] text-right">
                  Salón Pet Friendly · Take Away · Delivery
                </span>
              </div>
            </div>

            {/* External Channels */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.rappi.com.ar/restaurantes/delivery/91437-90s-coffe-roasters"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-semibold bg-[#9C6B3F] hover:bg-[#B27B4A] text-[#FAF8F4] rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Pedir por Rappi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/90scoffeeroasters/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-semibold border border-[#FAF8F4]/25 hover:border-[#FAF8F4] text-[#FAF8F4] rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@90scoffeeroasters</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Barista / Reservation Inquiry Form */}
          <div className="lg:col-span-6 bg-[#211E1B] border border-[#FAF8F4]/12 rounded-xl p-6 lg:p-8">
            <h3 className="font-display text-2xl font-bold text-[#FAF8F4] mb-2">
              Consultar lotes o reservar cuartos
            </h3>
            <p className="text-sm text-[#D6CFC5] mb-6 leading-relaxed">
              ¿Querés saber qué lote de Colombia, Brasil o Bolivia está abierto en tolva hoy, o separar un cuarto molido para retirar? Escribinos.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#171513] border border-[#9C6B3F] rounded-lg space-y-3">
                <p className="font-semibold text-[#FAF8F4]">
                  Consulta registrada para {name}
                </p>
                <p className="text-sm text-[#D6CFC5] leading-relaxed">
                  Motivo: <span className="text-[#FAF8F4]">{inquiryType}</span>. Para respuesta inmediata sobre lotes del día también podés escribirnos por DM a @90scoffeeroasters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setContact('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-[#FAF8F4] text-[#171513] rounded-lg cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#D6CFC5] mb-1.5"
                    >
                      Tu nombre
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Sofía"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#171513] border border-[#FAF8F4]/20 rounded-lg text-[#FAF8F4] placeholder:text-[#8E8479] focus:outline-none focus:border-[#D7A97E]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-handle"
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#D6CFC5] mb-1.5"
                    >
                      Instagram o WhatsApp
                    </label>
                    <input
                      id="contact-handle"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="@usuario o 11..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#171513] border border-[#FAF8F4]/20 rounded-lg text-[#FAF8F4] placeholder:text-[#8E8479] focus:outline-none focus:border-[#D7A97E]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#D6CFC5] mb-1.5"
                  >
                    Consulta
                  </label>
                  <select
                    id="contact-topic"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#171513] border border-[#FAF8F4]/20 rounded-lg text-[#FAF8F4] focus:outline-none focus:border-[#D7A97E]"
                  >
                    <option value="Disponibilidad de granos (250 g)">
                      Disponibilidad de granos (cuartos de 250 g)
                    </option>
                    <option value="Reserva para Latte Arte 3D">
                      Reserva para Latte Arte 3D en salón
                    </option>
                    <option value="Tarde de vinos y mesa pet friendly">
                      Tarde de vinos y mesa pet friendly
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-msg"
                    className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#D6CFC5] mb-1.5"
                  >
                    Detalle opcional
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Origen preferido, tipo de molienda u horario en que pasás..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#171513] border border-[#FAF8F4]/20 rounded-lg text-[#FAF8F4] placeholder:text-[#8E8479] focus:outline-none focus:border-[#D7A97E] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-[#F3B099]" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-xs font-semibold bg-[#FAF8F4] text-[#171513] hover:bg-[#EAE4D7] rounded-lg transition-colors cursor-pointer"
                >
                  Enviar consulta a la barra
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
