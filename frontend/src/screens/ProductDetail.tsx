// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Home, ArrowLeft, ArrowRight } = Icons;

const rgba = (hex, a) => {
  const h = String(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const PRODUCT = {
  id: 'PRD-2184',
  name: 'Walnut Cutting Board',
  description:
    'Hand-finished end-grain walnut board, 40 × 28 cm, with a routed juice groove. Oiled with food-safe finish and ready to use.',
  price: 48.0,
  currency: 'GBP',
  outbound_link: 'https://fenwickandvale.co.uk/shop/walnut-end-grain-board',
  created_at: '2026-11-02',
  updated_at: '2026-11-11',
};

const IMAGES = [
  {
    id: 'img-01',
    kind: 'plan',
    filename: 'walnut-board-plan.jpg',
    content_type: 'image/jpeg',
    sort_order: 1,
    caption: 'Plan view, end-grain chequer',
  },
  {
    id: 'img-02',
    kind: 'edge',
    filename: 'walnut-board-edge.jpg',
    content_type: 'image/jpeg',
    sort_order: 2,
    caption: 'Edge profile, 38 mm stock',
  },
  {
    id: 'img-03',
    kind: 'groove',
    filename: 'walnut-board-groove.jpg',
    content_type: 'image/jpeg',
    sort_order: 3,
    caption: 'Juice groove, corner radius',
  },
  {
    id: 'img-04',
    kind: 'stamp',
    filename: 'walnut-board-stamp-reshoot.jpg',
    content_type: 'image/jpeg',
    sort_order: 4,
    caption: "Maker's stamp, reverse face",
  },
];

const THUMB_WF = ['b-2-0', 'b-2-1', 'b-2-2', 'b-2-3'];

const SPEC = [
  ['Material', 'American black walnut, end grain' ],
  ['Dimensions', '40 × 28 × 3.8 cm'],
  ['Finish', 'Food-safe mineral oil & beeswax'],
];

const PlateArt = ({ kind, ink, accent, muted, body }) => {
  const cells = [];
  for (let r = 0; r < 6; r += 1) {
    for (let c = 0; c < 8; c += 1) {
      const i = r * 8 + c;
      cells.push({
        x: 172 + c * 57.5,
        y: 92 + r * 56.3,
        o: 0.03 + (((i * 37) % 7) / 90),
        k: i,
      });
    }
  }

  let content = null;

  if (kind === 'plan') {
    content = (
      <g>
        <rect x="150" y="70" width="500" height="380" rx="10" fill={rgba(ink, 0.04)} stroke={rgba(ink, 0.45)} strokeWidth="1.5" />
        {cells.map((c) => (
          <rect key={c.k} x={c.x} y={c.y} width="53" height="52" rx="2" fill={rgba(ink, c.o)} stroke={rgba(ink, 0.1)} strokeWidth="1" />
        ))}
        <rect x="190" y="110" width="420" height="300" rx="6" fill="none" stroke={rgba(accent, 0.95)} strokeWidth="2" />
        <g stroke={rgba(ink, 0.28)} strokeWidth="1">
          <line x1="150" y1="478" x2="650" y2="478" />
          <line x1="150" y1="470" x2="150" y2="486" />
          <line x1="650" y1="470" x2="650" y2="486" />
          <line x1="112" y1="70" x2="112" y2="450" />
          <line x1="104" y1="70" x2="120" y2="70" />
          <line x1="104" y1="450" x2="120" y2="450" />
        </g>
        <text x="400" y="503" textAnchor="middle" fill={rgba(muted, 0.95)} fontSize="17" letterSpacing="3" fontFamily={body}>40 CM</text>
        <text x="100" y="260" textAnchor="middle" transform="rotate(-90 100 260)" fill={rgba(muted, 0.95)} fontSize="17" letterSpacing="3" fontFamily={body}>28 CM</text>
      </g>
    );
  } else if (kind === 'edge') {
    content = (
      <g>
        <rect x="100" y="228" width="600" height="62" rx="8" fill={rgba(ink, 0.05)} stroke={rgba(ink, 0.45)} strokeWidth="1.5" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={132 + i * 40} y1="228" x2={132 + i * 40} y2="290" stroke={rgba(ink, 0.14)} strokeWidth="1" />
        ))}
        <line x1="150" y1="240" x2="650" y2="240" stroke={rgba(accent, 0.95)} strokeWidth="2" />
        <g stroke={rgba(ink, 0.28)} strokeWidth="1">
          <line x1="730" y1="228" x2="730" y2="290" />
          <line x1="722" y1="228" x2="738" y2="228" />
          <line x1="722" y1="290" x2="738" y2="290" />
          <line x1="700" y1="228" x2="738" y2="228" strokeDasharray="3 4" />
          <line x1="700" y1="290" x2="738" y2="290" strokeDasharray="3 4" />
        </g>
        <text x="730" y="206" textAnchor="middle" fill={rgba(muted, 0.95)} fontSize="16" letterSpacing="2" fontFamily={body}>38 MM</text>
        <text x="400" y="340" textAnchor="middle" fill={rgba(muted, 0.75)} fontSize="15" letterSpacing="3" fontFamily={body}>GROOVE DEPTH 5 MM</text>
      </g>
    );
  } else if (kind === 'groove') {
    content = (
      <g>
        <defs>
          <clipPath id="velvet-plate-lens">
            <circle cx="400" cy="250" r="178" />
          </clipPath>
        </defs>
        <circle cx="400" cy="250" r="178" fill={rgba(ink, 0.04)} stroke={rgba(ink, 0.32)} strokeWidth="1.5" />
        <g clipPath="url(#velvet-plate-lens)">
          <path d="M248 60 V330 Q248 362 280 362 H620" fill="none" stroke={rgba(ink, 0.5)} strokeWidth="2" />
          <path d="M300 60 V318 Q300 332 314 332 H620" fill="none" stroke={rgba(accent, 0.95)} strokeWidth="2" />
          <path d="M316 60 V308 Q316 316 324 316 H620" fill="none" stroke={rgba(ink, 0.22)} strokeWidth="1" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1={340 + i * 34} y1="60" x2={340 + i * 34} y2="300" stroke={rgba(ink, 0.1)} strokeWidth="1" />
          ))}
        </g>
        <line x1="316" y1="330" x2="404" y2="414" stroke={rgba(ink, 0.3)} strokeWidth="1" />
        <text x="412" y="424" fill={rgba(muted, 0.95)} fontSize="16" letterSpacing="2" fontFamily={body}>R 6 MM</text>
      </g>
    );
  } else {
    content = (
      <g>
        <rect x="120" y="110" width="560" height="310" rx="10" fill={rgba(ink, 0.04)} stroke={rgba(ink, 0.28)} strokeWidth="1.5" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1="120" y1={148 + i * 38} x2="680" y2={148 + i * 38} stroke={rgba(ink, 0.07)} strokeWidth="1" />
        ))}
        <circle cx="400" cy="262" r="98" fill={rgba(ink, 0.05)} stroke={rgba(accent, 0.95)} strokeWidth="2" />
        <circle cx="400" cy="262" r="84" fill="none" stroke={rgba(ink, 0.28)} strokeWidth="1" />
        <text x="400" y="262" textAnchor="middle" fill={rgba(ink, 0.88)} fontSize="42" fontFamily={brand.fontHeading}>F &amp; V</text>
        <text x="400" y="296" textAnchor="middle" fill={rgba(muted, 0.9)} fontSize="13" letterSpacing="5" fontFamily={body}>EST. 2014</text>
      </g>
    );
  }

  return (
    <svg viewBox="0 0 800 520" role="img" aria-hidden="true" focusable="false" className="h-full w-full">
      {content}
    </svg>
  );
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;
  const bg = brand.backgroundColor;
  const body = brand.fontBody;
  const heading = brand.fontHeading;
  const hair = rgba(ink, 0.12);
  const panel = rgba(ink, 0.035);
  const radius = brand.radius;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [failed, setFailed] = React.useState(['img-04']);
  const [loadingId, setLoadingId] = React.useState(null);
  const [opened, setOpened] = React.useState(false);
  const thumbRefs = React.useRef([]);
  const timer = React.useRef(null);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const active = IMAGES[activeIndex];
  const isFailed = failed.indexOf(active.id) !== -1;
  const isLoading = loadingId === active.id;

  const price = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: PRODUCT.currency,
  }).format(PRODUCT.price);

  const retry = (id) => {
    setLoadingId(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setFailed((f) => f.filter((x) => x !== id));
      setLoadingId(null);
    }, 900);
  };

  const onThumbKey = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % IMAGES.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + IMAGES.length) % IMAGES.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = IMAGES.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActiveIndex(next);
    const el = thumbRefs.current[next];
    if (el) el.focus();
  };

  const labelCls = 'text-[11px] uppercase tracking-[0.18em]';

  return (
    <div style={{ backgroundColor: bg, fontFamily: body, color: ink }} className="min-h-full w-full">
      <style>{`
        .vfocus:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; }
        @keyframes velvet-plate-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @keyframes velvet-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(320%); } }
        @keyframes velvet-note-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .velvet-plate { animation: velvet-plate-in 420ms cubic-bezier(.2,.7,.3,1) both; }
        .velvet-sweep { animation: velvet-sweep 1400ms linear infinite; }
        .velvet-note { animation: velvet-note-in 260ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .velvet-plate, .velvet-sweep, .velvet-note { animation: none !important; }
          .velvet-tr { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">

        {/* Row 1 — back link */}
        <div data-wf="b-0-0" className="mb-8">
          <button
            type="button"
            onClick={() => navigate('catalog')}
            className={`vfocus velvet-tr inline-flex min-h-[44px] items-center gap-2 rounded-[6px] px-3 py-2 ${labelCls} transition-colors`}
            style={{ color: muted, marginLeft: '-12px', borderRadius: radius }}
            onMouseEnter={(e) => { e.currentTarget.style.color = ink; e.currentTarget.style.backgroundColor = panel; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = muted; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <Icons.ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to catalogue
          </button>
        </div>

        {/* Row 2 — hero plate */}
        <figure data-wf="b-1-0" className="mb-4">
          <div
            className="relative overflow-hidden"
            style={{ backgroundColor: panel, border: `1px solid ${hair}`, borderRadius: radius }}
          >
            <div
              className={`absolute left-4 top-4 z-10 ${labelCls}`}
              style={{ color: muted }}
            >
              Plate {String(active.sort_order).padStart(2, '0')} / {String(IMAGES.length).padStart(2, '0')}
            </div>

            <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
              {isLoading ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <div className="h-px w-40 overflow-hidden" style={{ backgroundColor: rgba(ink, 0.1) }}>
                    <div className="velvet-sweep h-px w-1/3" style={{ backgroundColor: accent }} />
                  </div>
                  <p className={labelCls} style={{ color: muted }}>Fetching plate 04</p>
                </div>
              ) : isFailed ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <Icons.AlertCircle className="h-6 w-6" style={{ color: muted }} aria-hidden="true" />
                  <div className="max-w-sm">
                    <p className="text-base" style={{ color: ink, fontFamily: heading }}>
                      Plate 04 didn’t come through
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: muted }}>
                      The maker’s-stamp re-shoot ({active.filename}) is still finishing its upload. The other three plates are all here.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => retry(active.id)}
                    className={`vfocus velvet-tr inline-flex min-h-[44px] items-center gap-2 px-4 py-2 text-sm transition-colors`}
                    style={{ border: `1px solid ${rgba(ink, 0.24)}`, borderRadius: radius, color: ink }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = rgba(ink, 0.06); }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    Try this plate again
                  </button>
                </div>
              ) : (
                <div key={active.id} className="velvet-plate h-full w-full p-4 sm:p-8">
                  <PlateArt kind={active.kind} ink={ink} accent={accent} muted={muted} body={body} />
                </div>
              )}
            </div>
          </div>

          <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="h-px w-6 shrink-0" style={{ backgroundColor: accent }} aria-hidden="true" />
            <span className="text-sm" style={{ color: ink }}>{active.caption}</span>
            <span
              className="text-sm"
              style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}
            >
              {activeIndex + 1} of {IMAGES.length}
            </span>
          </figcaption>
        </figure>

        {/* Row 3 — thumbnails */}
        <h2 className="sr-only">Product images</h2>
        <ul className="mb-10 grid grid-cols-4 gap-2 sm:gap-4" aria-label="Walnut Cutting Board, 4 images">
          {IMAGES.map((img, i) => {
            const selected = i === activeIndex;
            const broken = failed.indexOf(img.id) !== -1;
            return (
              <li key={img.id} className="col-span-1">
                <button
                  data-wf={THUMB_WF[i]}
                  type="button"
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  aria-pressed={selected}
                  aria-label={`Show plate ${String(img.sort_order).padStart(2, '0')}: ${img.caption}${broken ? ' (not loaded)' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(e) => onThumbKey(e, i)}
                  className="vfocus velvet-tr block w-full overflow-hidden transition-colors"
                  style={{
                    backgroundColor: selected ? rgba(ink, 0.06) : panel,
                    border: `1px solid ${selected ? accent : hair}`,
                    borderRadius: radius,
                  }}
                  onMouseEnter={(e) => { if (!selected) e.currentTarget.style.borderColor = rgba(ink, 0.28); }}
                  onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = hair; }}
                >
                  <span className="flex aspect-[4/3] w-full items-center justify-center p-1 sm:p-2">
                    {broken ? (
                      <span className="flex flex-col items-center gap-1" style={{ color: muted }}>
                        <Icons.AlertCircle className="h-4 w-4" aria-hidden="true" />
                        <span className="hidden text-[10px] uppercase tracking-[0.14em] sm:inline">Not loaded</span>
                      </span>
                    ) : (
                      <PlateArt kind={img.kind} ink={ink} accent={accent} muted={muted} body={body} />
                    )}
                  </span>
                  <span
                    className="block border-t px-2 py-2 text-left text-[10px] uppercase tracking-[0.14em] sm:text-[11px]"
                    style={{
                      borderColor: hair,
                      color: selected ? ink : muted,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    Pl. {String(img.sort_order).padStart(2, '0')}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="h-px w-full" style={{ backgroundColor: hair }} />

        {/* Row 4 — title + price */}
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-4 pt-8">
          <div data-wf="b-3-0" className="col-span-12 md:col-span-8">
            <p className={labelCls} style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}>
              Ref. {PRODUCT.id} · Fenwick &amp; Vale
            </p>
            <h1
              className="mt-3 text-[32px] leading-tight sm:text-[40px]"
              style={{ fontFamily: heading, color: ink }}
            >
              {PRODUCT.name}
            </h1>
          </div>

          <div data-wf="b-3-1" className="col-span-12 md:col-span-4 md:text-right">
            <p className={labelCls} style={{ color: muted }}>Price</p>
            <p
              className="mt-3 text-[28px] leading-none"
              style={{ fontFamily: heading, color: ink, fontVariantNumeric: 'tabular-nums' }}
            >
              {price} <span className="text-base align-middle" style={{ color: muted }}>{PRODUCT.currency}</span>
            </p>
            <p className="mt-2 text-xs" style={{ color: muted }}>
              Shown in pounds sterling · updated 11 Nov 2026
            </p>
          </div>
        </div>

        {/* Row 5 — description */}
        <div data-wf="b-4-0" className="mt-8 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <p className="max-w-[68ch] text-[16px] leading-[1.65]" style={{ color: rgba(ink, 0.88) }}>
              {PRODUCT.description}
            </p>

            <dl className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-3">
              {SPEC.map(([term, value]) => (
                <div key={term}>
                  <dt className={labelCls} style={{ color: muted }}>{term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed" style={{ color: ink }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Row 6 — outbound link */}
        <div className="mt-10 grid grid-cols-12">
          {PRODUCT.outbound_link ? (
            <div className="col-span-12 md:col-span-5">
              <a
                data-wf="b-5-0"
                href={PRODUCT.outbound_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpened(true)}
                className="vfocus velvet-tr flex min-h-[48px] w-full items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-opacity"
                style={{ backgroundColor: accent, color: ink, borderRadius: radius }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Buy / Learn more
                <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <p className="mt-3 text-xs leading-relaxed" style={{ color: muted }}>
                Opens fenwickandvale.co.uk in a new tab. Nothing is bought or paid for here — browsing this catalogue needs no account.
              </p>

              {opened ? (
                <p
                  className="velvet-note mt-3 inline-flex items-center gap-2 px-3 py-2 text-xs"
                  style={{ border: `1px solid ${hair}`, borderRadius: radius, color: ink, backgroundColor: panel }}
                  role="status"
                >
                  <Icons.CheckCircle className="h-4 w-4" aria-hidden="true" />
                  Sent you to fenwickandvale.co.uk in a new tab.
                </p>
              ) : null}
            </div>
          ) : (
            <p className="col-span-12 text-xs md:col-span-5" style={{ color: muted }}>
              This maker hasn’t listed an external shop page for this piece.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
