// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, Input, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, ChevronRight, ChevronLeft, Clock, Trash, Edit, ArrowRight, AlertCircle, CheckCircle } = Icons;

const CATALOGUE_TOTAL = 486;

const PRODUCTS = [
  { id: 'PRD-0417', name: 'Walnut Cutting Board', price: 68, currency: 'USD', outbound_link: 'shop.northfield.co/walnut-board', updated_at: '12 Nov 2026', updated_time: '09:41', images: 4 },
  { id: 'PRD-0416', name: 'Linen Table Runner — Fog', price: 42, currency: 'USD', outbound_link: null, updated_at: '12 Nov 2026', updated_time: '08:02', images: 2 },
  { id: 'PRD-0411', name: 'Stoneware Mug Set of Four', price: 56, currency: 'USD', outbound_link: 'shop.northfield.co/stoneware-mugs', updated_at: '11 Nov 2026', updated_time: '17:26', images: 3 },
  { id: 'PRD-0408', name: 'Cast Iron Skillet, 10 inch', price: 94, currency: 'USD', outbound_link: 'shop.northfield.co/cast-iron-10', updated_at: '11 Nov 2026', updated_time: '11:09', images: 5, held: true },
  { id: 'PRD-0402', name: 'Hand-Blown Water Carafe', price: 78, currency: 'USD', outbound_link: null, updated_at: '10 Nov 2026', updated_time: '16:44', images: 1 },
  { id: 'PRD-0398', name: 'Beeswax Candle Trio', price: 34, currency: 'USD', outbound_link: 'maker.northfield.co/candles', updated_at: '10 Nov 2026', updated_time: '09:15', images: 2 },
  { id: 'PRD-0394', name: 'Olive Wood Spoon Set', price: 29.5, currency: 'USD', outbound_link: null, updated_at: '09 Nov 2026', updated_time: '14:38', images: 3 },
  { id: 'PRD-0389', name: 'Copper Pour-Over Kettle', price: 128, currency: 'USD', outbound_link: 'shop.northfield.co/copper-kettle', updated_at: '09 Nov 2026', updated_time: '10:02', images: 4 },
  { id: 'PRD-0381', name: 'Ribbed Glass Tumblers, Six', price: 64, currency: 'USD', outbound_link: 'shop.northfield.co/ribbed-tumblers', updated_at: '08 Nov 2026', updated_time: '18:21', images: 2 },
  { id: 'PRD-0376', name: 'Merino Throw — Ember', price: 185, currency: 'USD', outbound_link: null, updated_at: '08 Nov 2026', updated_time: '12:55', images: 6 },
  { id: 'PRD-0370', name: 'Ceramic Butter Crock', price: 38, currency: 'USD', outbound_link: 'shop.northfield.co/butter-crock', updated_at: '07 Nov 2026', updated_time: '15:30', images: 2 },
  { id: 'PRD-0366', name: 'Brass Pepper Mill', price: 72, currency: 'USD', outbound_link: 'shop.northfield.co/brass-mill', updated_at: '07 Nov 2026', updated_time: '08:47', images: 3 },
  { id: 'PRD-0359', name: 'Waxed Canvas Apron', price: 88, currency: 'USD', outbound_link: null, updated_at: '06 Nov 2026', updated_time: '13:12', images: 4 },
  { id: 'PRD-0352', name: 'Enamel Stockpot — Moss', price: 142, currency: 'USD', outbound_link: 'shop.northfield.co/enamel-stockpot', updated_at: '06 Nov 2026', updated_time: '09:58', images: 3 },
  { id: 'PRD-0347', name: 'Raw Edge Marble Board', price: 96, currency: 'USD', outbound_link: null, updated_at: '05 Nov 2026', updated_time: '16:03', images: 1 },
  { id: 'PRD-0341', name: 'Oak Salt Cellar', price: 26, currency: 'USD', outbound_link: 'maker.northfield.co/salt-cellar', updated_at: '05 Nov 2026', updated_time: '10:40', images: 2 },
  { id: 'PRD-0334', name: 'Flax Napkins, Set of Four', price: 48, currency: 'USD', outbound_link: null, updated_at: '04 Nov 2026', updated_time: '14:19', images: 2 },
  { id: 'PRD-0329', name: 'Smoked Glass Decanter', price: 115, currency: 'USD', outbound_link: 'shop.northfield.co/smoked-decanter', updated_at: '04 Nov 2026', updated_time: '09:26', images: 3 },
  { id: 'PRD-0322', name: 'Birch Cutting Set', price: 52, currency: 'USD', outbound_link: 'shop.northfield.co/birch-set', updated_at: '03 Nov 2026', updated_time: '17:51', images: 0 },
  { id: 'PRD-0318', name: 'Terracotta Planter — Large', price: 58, currency: 'USD', outbound_link: null, updated_at: '03 Nov 2026', updated_time: '11:34', images: 1 }
];

const PER_PAGE = 6;

const hexToRgba = (hex, a) => {
  const h = String(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
};

const initialsOf = (name) =>
  name
    .replace(/[^A-Za-z ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

const mmss = (s) => {
  const m = Math.floor(Math.max(0, s) / 60);
  const r = Math.max(0, s) % 60;
  return m + ':' + String(r).padStart(2, '0');
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const muted = brand.neutralColor;
  const accent = brand.accentColor;
  const canvas = brand.backgroundColor;
  const panel = 'rgba(255,255,255,0.030)';
  const panelHi = 'rgba(255,255,255,0.055)';
  const line = hexToRgba(ink, 0.11);
  const lineSoft = hexToRgba(ink, 0.07);
  const r = brand.radius;

  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState(PRODUCTS);
  const [total, setTotal] = React.useState(CATALOGUE_TOTAL);
  const [loading, setLoading] = React.useState(true);
  const [confirm, setConfirm] = React.useState(null);
  const [removing, setRemoving] = React.useState(false);
  const [dialogError, setDialogError] = React.useState('');
  const [notice, setNotice] = React.useState(null);
  const [seconds, setSeconds] = React.useState(29 * 60 + 14);

  const dialogRef = React.useRef(null);
  const cancelRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const removeTimer = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 620);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const i = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);

  React.useEffect(() => () => clearTimeout(removeTimer.current), []);

  React.useEffect(() => {
    if (confirm && cancelRef.current) cancelRef.current.focus();
  }, [confirm]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? rows.filter((p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q))
    : rows;
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, pageCount);
  const pageRows = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
  const firstIndex = filtered.length === 0 ? 0 : (safePage - 1) * PER_PAGE + 1;
  const lastIndex = (safePage - 1) * PER_PAGE + pageRows.length;

  const openConfirm = (product, ev) => {
    triggerRef.current = ev && ev.currentTarget;
    setDialogError('');
    setRemoving(false);
    setConfirm(product);
  };

  const closeConfirm = () => {
    clearTimeout(removeTimer.current);
    setConfirm(null);
    setRemoving(false);
    setDialogError('');
    if (triggerRef.current && triggerRef.current.focus) triggerRef.current.focus();
  };

  const doRemove = () => {
    if (!confirm) return;
    setRemoving(true);
    setDialogError('');
    removeTimer.current = setTimeout(() => {
      if (confirm.held) {
        setRemoving(false);
        setDialogError(
          'We could not remove “' + confirm.name + '”. The 14:00 catalogue import still has this record open. Try again once the import finishes.'
        );
        return;
      }
      setRows((prev) => prev.filter((p) => p.id !== confirm.id));
      setTotal((t) => t - 1);
      setNotice({ product: confirm });
      setRemoving(false);
      setConfirm(null);
      if (triggerRef.current && triggerRef.current.focus) triggerRef.current.focus();
    }, 700);
  };

  const onDialogKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeConfirm();
      return;
    }
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const nodes = dialogRef.current.querySelectorAll('button:not([disabled]), a[href]');
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const labelStyle = {
    fontFamily: brand.fontBody,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: muted
  };

  const ghostBtn = {
    backgroundColor: 'transparent',
    color: ink,
    border: '1px solid ' + line,
    borderRadius: r,
    fontFamily: brand.fontBody
  };

  const sessionLow = seconds < 5 * 60;

  const css = `
    .vlv { font-family: ${brand.fontBody}; }
    .vlv :focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; border-radius: 4px; }
    .vlv-row { transition: background-color 140ms ease; }
    .vlv-row:hover { background-color: ${hexToRgba(ink, 0.045)}; }
    .vlv-ghost { transition: background-color 140ms ease, border-color 140ms ease, color 140ms ease; }
    .vlv-ghost:hover { background-color: ${hexToRgba(ink, 0.06)}; border-color: ${hexToRgba(ink, 0.22)}; }
    .vlv-accent { transition: filter 140ms ease, transform 120ms ease; }
    .vlv-accent:hover { filter: brightness(1.12); }
    .vlv-accent:active { transform: translateY(1px); }
    .vlv-accent[disabled] { filter: grayscale(0.4) brightness(0.8); cursor: not-allowed; }
    .vlv-link { color: ${ink}; border-bottom: 1px solid ${hexToRgba(accent, 0.55)}; transition: color 140ms ease, border-color 140ms ease; }
    .vlv-link:hover { color: ${accent}; border-color: ${accent}; }
    @keyframes vlvRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes vlvVeil { from { opacity: 0; } to { opacity: 1; } }
    @keyframes vlvPulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.75; } }
    .vlv-rise { animation: vlvRise 240ms cubic-bezier(.2,.7,.3,1) both; }
    .vlv-veil { animation: vlvVeil 160ms ease-out both; }
    .vlv-skel { animation: vlvPulse 1.4s ease-in-out infinite; }
    @media (prefers-reduced-motion: reduce) {
      .vlv-rise, .vlv-veil, .vlv-skel { animation: none !important; }
      .vlv-row, .vlv-ghost, .vlv-accent, .vlv-link { transition: none !important; }
    }
  `;

  const Thumb = ({ p }) =>
    p.images > 0 ? (
      <span
        aria-hidden="true"
        className="inline-flex h-11 w-11 items-center justify-center"
        style={{
          borderRadius: r,
          border: '1px solid ' + line,
          backgroundColor: panelHi,
          fontFamily: brand.fontHeading,
          fontSize: 15,
          color: hexToRgba(ink, 0.82)
        }}
      >
        {initialsOf(p.name)}
      </span>
    ) : (
      <span
        aria-hidden="true"
        className="inline-flex h-11 w-11 items-center justify-center"
        style={{
          borderRadius: r,
          border: '1px dashed ' + hexToRgba(ink, 0.18),
          color: muted,
          fontSize: 16
        }}
      >
        —
      </span>
    );

  return (
    <div className="vlv min-h-full w-full" style={{ backgroundColor: canvas, color: ink }}>
      <style>{css}</style>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-12">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-end gap-4">
          <div data-wf="b-0-0" className="col-span-12 md:col-span-6">
            <p style={labelStyle}>Northfield Catalogue · Admin</p>
            <div className="mt-3 h-px w-12" style={{ backgroundColor: accent }} />
            <h1
              className="mt-4 text-[32px] leading-tight sm:text-[40px]"
              style={{ fontFamily: brand.fontHeading, color: ink, letterSpacing: '-0.01em' }}
            >
              Manage Products
            </h1>
          </div>

          <div className="col-span-7 md:col-span-3 md:justify-self-end">
            <Button
              data-wf="b-0-1"
              className="vlv-accent inline-flex h-11 w-full items-center justify-center gap-2 px-5 text-sm font-medium md:w-auto"
              style={{ backgroundColor: accent, color: ink, border: '1px solid ' + accent, borderRadius: r }}
              onClick={() => navigate('admin-product-edit')}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add product
            </Button>
          </div>

          <div className="col-span-5 md:col-span-3 md:justify-self-end">
            <Button
              data-wf="b-0-2"
              className="vlv-ghost inline-flex h-11 w-full items-center justify-center px-5 text-sm md:w-auto"
              style={ghostBtn}
              onClick={() => navigate('admin-login')}
            >
              Sign out
            </Button>
          </div>
        </div>

        {/* Row 2 */}
        <div
          data-wf="b-1-0"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: '1px solid ' + lineSoft,
            borderBottom: '1px solid ' + lineSoft,
            paddingTop: 16,
            paddingBottom: 16
          }}
        >
          <p className="max-w-[68ch] text-sm leading-relaxed" style={{ color: muted }}>
            Signed in as{' '}
            <span style={{ color: ink, fontVariantNumeric: 'tabular-nums' }}>catalogue_admin</span>. Your session ends
            automatically after 30 minutes of inactivity.
          </p>
          <span
            className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 text-xs"
            style={{
              borderRadius: r,
              border: '1px solid ' + (sessionLow ? hexToRgba(accent, 0.6) : line),
              backgroundColor: sessionLow ? hexToRgba(accent, 0.14) : panel,
              color: sessionLow ? ink : muted,
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {sessionLow ? 'Session ending soon · ' : 'Session idle timeout in '}
            {mmss(seconds)}
          </span>
        </div>

        {/* Row 3 */}
        <div data-wf="b-2-0" className="mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPage(1);
            }}
          >
            <Label htmlFor="product-search" className="block" style={labelStyle}>
              Search products by name
            </Label>
            <div className="relative mt-3">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
                style={{ color: muted }}
                aria-hidden="true"
              />
              <Input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Try “walnut”, “linen”, or a product ID such as PRD-0417"
                className="h-12 w-full pl-11 pr-28 text-sm"
                style={{
                  backgroundColor: panel,
                  border: '1px solid ' + line,
                  borderRadius: r,
                  color: ink,
                  fontFamily: brand.fontBody
                }}
              />
              {query ? (
                <Button
                  type="button"
                  className="vlv-ghost absolute right-2 top-1/2 inline-flex h-9 -translate-y-1/2 items-center gap-1.5 px-3 text-xs"
                  style={ghostBtn}
                  onClick={() => {
                    setQuery('');
                    setPage(1);
                  }}
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  Clear
                </Button>
              ) : null}
            </div>
          </form>
          <p className="sr-only" role="status" aria-live="polite">
            {loading
              ? 'Loading products'
              : q
              ? filtered.length + ' products match ' + query
              : filtered.length + ' products listed'}
          </p>
        </div>

        {/* Removal confirmation notice */}
        {notice ? (
          <div
            role="status"
            className="vlv-rise mt-6 flex items-start gap-3 px-4 py-3"
            style={{
              borderRadius: r,
              border: '1px solid ' + hexToRgba(accent, 0.45),
              borderLeft: '3px solid ' + accent,
              backgroundColor: hexToRgba(accent, 0.12)
            }}
          >
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ink }} aria-hidden="true" />
            <p className="flex-1 text-sm leading-relaxed" style={{ color: ink }}>
              “{notice.product.name}” was removed from the catalogue. Shoppers no longer see it in the grid, in search
              or on its detail page.
            </p>
          </div>
        ) : null}

        {/* Row 4 */}
        <Card
          data-wf="b-3-0"
          className="mt-6 overflow-hidden"
          style={{ backgroundColor: panel, border: '1px solid ' + line, borderRadius: r, boxShadow: 'none' }}
        >
          <div
            className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-6"
            style={{ borderBottom: '1px solid ' + line }}
          >
            <h2
              className="text-xl"
              style={{ fontFamily: brand.fontHeading, color: ink, fontVariantNumeric: 'tabular-nums' }}
            >
              Products ({total})
            </h2>
            <p className="text-xs" style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}>
              {q ? filtered.length + ' matching this search · ' : ''}Synced from the catalogue at 14:38
            </p>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <table className="w-full min-w-[860px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <caption className="sr-only">Loading the product list</caption>
                <tbody>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} style={{ borderBottom: '1px solid ' + lineSoft }}>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div
                            className="vlv-skel h-11 w-11"
                            style={{ backgroundColor: panelHi, borderRadius: r }}
                          />
                          <div className="flex-1 space-y-2">
                            <div
                              className="vlv-skel h-3"
                              style={{ width: 180 + ((i * 37) % 120), backgroundColor: panelHi, borderRadius: 3 }}
                            />
                            <div
                              className="vlv-skel h-2.5 w-20"
                              style={{ backgroundColor: panelHi, borderRadius: 3 }}
                            />
                          </div>
                          <div className="vlv-skel h-3 w-16" style={{ backgroundColor: panelHi, borderRadius: 3 }} />
                          <div className="vlv-skel h-3 w-24" style={{ backgroundColor: panelHi, borderRadius: 3 }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : pageRows.length === 0 ? (
              <div className="px-6 py-14">
                {q ? (
                  <Empty
                    title={'Nothing matches “' + query.trim() + '”'}
                    description="Keyword search looks at product names and IDs only. Check the spelling, or clear the search to see the whole catalogue again."
                    action={
                      <Button
                        className="vlv-ghost h-10 px-4 text-sm"
                        style={ghostBtn}
                        onClick={() => {
                          setQuery('');
                          setPage(1);
                        }}
                      >
                        Clear search
                      </Button>
                    }
                  />
                ) : (
                  <Empty
                    title="The catalogue has no products yet"
                    description="Once you add a product with a name, description and price, it appears here and in the public catalogue straight away."
                    action={
                      <Button
                        className="vlv-accent inline-flex h-10 items-center gap-2 px-4 text-sm"
                        style={{ backgroundColor: accent, color: ink, border: '1px solid ' + accent, borderRadius: r }}
                        onClick={() => navigate('admin-product-edit')}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                        Add the first product
                      </Button>
                    }
                  />
                )}
              </div>
            ) : (
              <Table className="w-full min-w-[920px] text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <caption className="sr-only">
                  Products in the catalogue. Select a product name to edit it.
                </caption>
                <THead>
                  <TR style={{ borderBottom: '1px solid ' + line }}>
                    <TH data-wf="i-3-0-0" scope="col" className="px-6 py-3 text-left" style={labelStyle}>
                      Image
                    </TH>
                    <TH data-wf="i-3-0-1" scope="col" className="px-4 py-3 text-left" style={labelStyle}>
                      Name
                    </TH>
                    <TH data-wf="i-3-0-2" scope="col" className="px-4 py-3 text-right" style={labelStyle}>
                      Price
                    </TH>
                    <TH data-wf="i-3-0-3" scope="col" className="px-4 py-3 text-left" style={labelStyle}>
                      Currency
                    </TH>
                    <TH data-wf="i-3-0-4" scope="col" className="px-4 py-3 text-left" style={labelStyle}>
                      Outbound link
                    </TH>
                    <TH data-wf="i-3-0-5" scope="col" className="px-4 py-3 text-left" style={labelStyle}>
                      Updated
                    </TH>
                    <TH data-wf="i-3-0-6" scope="col" className="px-6 py-3 text-right" style={labelStyle}>
                      Actions
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {pageRows.map((p) => (
                    <TR
                      key={p.id}
                      className="vlv-row cursor-pointer"
                      style={{ borderBottom: '1px solid ' + lineSoft }}
                      onClick={() => navigate('admin-product-edit')}
                    >
                      <TD className="px-6 py-4 align-middle">
                        <Thumb p={p} />
                        <span className="sr-only">
                          {p.images > 0 ? p.images + ' images uploaded' : 'No image uploaded'}
                        </span>
                      </TD>
                      <TD className="px-4 py-4 align-middle">
                        <button
                          type="button"
                          className="vlv-link text-left text-[15px] leading-snug"
                          style={{ background: 'none', padding: 0 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('admin-product-edit');
                          }}
                        >
                          {p.name}
                        </button>
                        <span className="mt-1 flex items-center gap-2 text-xs" style={{ color: muted }}>
                          <span style={{ color: accent, letterSpacing: '0.06em' }}>{p.id}</span>
                          <span aria-hidden="true">·</span>
                          <span>{p.images > 0 ? p.images + ' images' : 'No image'}</span>
                        </span>
                      </TD>
                      <TD className="px-4 py-4 text-right align-middle" style={{ color: ink }}>
                        {p.price.toFixed(2)}
                      </TD>
                      <TD className="px-4 py-4 align-middle" style={{ color: muted, letterSpacing: '0.06em' }}>
                        {p.currency}
                      </TD>
                      <TD className="px-4 py-4 align-middle">
                        {p.outbound_link ? (
                          <a
                            href={'https://' + p.outbound_link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="vlv-link inline-flex max-w-[220px] items-center gap-1.5 truncate text-[13px]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="truncate">{p.outbound_link}</span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          </a>
                        ) : (
                          <Badge
                            className="px-2 py-0.5 text-[11px]"
                            style={{
                              backgroundColor: 'transparent',
                              border: '1px solid ' + line,
                              borderRadius: r,
                              color: muted
                            }}
                          >
                            Not set
                          </Badge>
                        )}
                      </TD>
                      <TD className="px-4 py-4 align-middle">
                        <span style={{ color: ink }}>{p.updated_at}</span>
                        <span className="ml-2 text-xs" style={{ color: muted }}>
                          {p.updated_time}
                        </span>
                      </TD>
                      <TD className="px-6 py-4 text-right align-middle">
                        <span className="inline-flex items-center justify-end gap-2">
                          <Button
                            className="vlv-ghost inline-flex h-9 items-center gap-1.5 px-3 text-xs"
                            style={ghostBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate('admin-product-edit');
                            }}
                          >
                            <Edit className="h-3.5 w-3.5" aria-hidden="true" />
                            Edit
                            <span className="sr-only"> {p.name}</span>
                          </Button>
                          <Button
                            className="vlv-ghost inline-flex h-9 items-center gap-1.5 px-3 text-xs"
                            style={ghostBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              openConfirm(p, e);
                            }}
                          >
                            <Trash className="h-3.5 w-3.5" aria-hidden="true" />
                            Remove
                            <span className="sr-only"> {p.name}</span>
                          </Button>
                        </span>
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            )}
          </div>

          {!loading && pageRows.length > 0 ? (
            <div
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              style={{ borderTop: '1px solid ' + line }}
            >
              <p className="text-xs" style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}>
                {q
                  ? 'Showing ' + firstIndex + '–' + lastIndex + ' of ' + filtered.length + ' matches'
                  : 'Showing ' + firstIndex + '–' + lastIndex + ' of ' + total + ' products · page ' + safePage + ' of ' + Math.ceil(total / PER_PAGE)}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  className="vlv-ghost inline-flex h-9 items-center gap-1.5 px-3 text-xs"
                  style={{ ...ghostBtn, opacity: safePage === 1 ? 0.45 : 1 }}
                  disabled={safePage === 1}
                  onClick={() => setPage((n) => Math.max(1, n - 1))}
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Previous
                </Button>
                <Button
                  className="vlv-ghost inline-flex h-9 items-center gap-1.5 px-3 text-xs"
                  style={{ ...ghostBtn, opacity: safePage === pageCount ? 0.45 : 1 }}
                  disabled={safePage === pageCount}
                  onClick={() => setPage((n) => Math.min(pageCount, n + 1))}
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ) : null}
        </Card>
      </div>

      {/* Rows 5 & 6 — confirmation dialog */}
      {confirm ? (
        <div
          className="vlv-veil fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          style={{ backgroundColor: 'rgba(6,11,9,0.74)' }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeConfirm();
          }}
        >
          <div
            data-wf="b-4-0"
            ref={dialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="remove-title"
            aria-describedby="remove-desc"
            onKeyDown={onDialogKeyDown}
            className="vlv-rise w-full max-w-xl p-6 sm:p-8"
            style={{
              backgroundColor: '#1a2621',
              border: '1px solid ' + hexToRgba(ink, 0.14),
              borderRadius: r,
              boxShadow: '0 28px 70px rgba(0,0,0,0.6)'
            }}
          >
            <p style={labelStyle}>Confirm removal</p>
            <h2
              id="remove-title"
              className="mt-3 text-[24px] leading-snug"
              style={{ fontFamily: brand.fontHeading, color: ink }}
            >
              Remove “{confirm.name}”?
            </h2>
            <p id="remove-desc" className="mt-3 max-w-[62ch] text-sm leading-relaxed" style={{ color: muted }}>
              It will stop appearing in the catalogue, search results and its detail page.
            </p>

            <dl
              className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 py-4 text-sm sm:grid-cols-3"
              style={{
                borderTop: '1px solid ' + lineSoft,
                borderBottom: '1px solid ' + lineSoft,
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              <div>
                <dt style={labelStyle}>Product ID</dt>
                <dd className="mt-1" style={{ color: accent }}>
                  {confirm.id}
                </dd>
              </div>
              <div>
                <dt style={labelStyle}>Price</dt>
                <dd className="mt-1" style={{ color: ink }}>
                  {confirm.price.toFixed(2)} {confirm.currency}
                </dd>
              </div>
              <div>
                <dt style={labelStyle}>Images</dt>
                <dd className="mt-1" style={{ color: ink }}>
                  {confirm.images > 0 ? confirm.images + ' stored' : 'None uploaded'}
                </dd>
              </div>
            </dl>

            {dialogError ? (
              <div
                role="alert"
                className="vlv-rise mt-5 flex items-start gap-3 px-4 py-3"
                style={{
                  borderRadius: r,
                  border: '1px solid ' + hexToRgba(ink, 0.2),
                  borderLeft: '3px solid ' + accent,
                  backgroundColor: hexToRgba(ink, 0.05)
                }}
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                <p className="text-sm leading-relaxed" style={{ color: ink }}>
                  {dialogError}
                </p>
              </div>
            ) : null}

            <div className="mt-7 grid grid-cols-12 gap-3">
              <Button
                data-wf="b-5-0"
                className="vlv-accent col-span-12 inline-flex h-11 items-center justify-center gap-2 px-4 text-sm font-medium sm:col-span-4 sm:col-start-5"
                style={{ backgroundColor: accent, color: ink, border: '1px solid ' + accent, borderRadius: r }}
                disabled={removing}
                onClick={doRemove}
              >
                {removing ? (
                  <>
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Removing…
                  </>
                ) : (
                  <>
                    <Trash className="h-4 w-4" aria-hidden="true" />
                    {dialogError ? 'Try removing again' : 'Remove product'}
                  </>
                )}
              </Button>
              <Button
                data-wf="b-5-1"
                ref={cancelRef}
                className="vlv-ghost col-span-12 inline-flex h-11 items-center justify-center px-4 text-sm sm:col-span-4"
                style={ghostBtn}
                disabled={removing}
                onClick={closeConfirm}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
