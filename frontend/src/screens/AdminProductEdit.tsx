// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Badge, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Clock, Trash, Edit, Upload, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const INITIAL_PRODUCT = {
  id: "prd_8841",
  name: "Walnut Cutting Board",
  description:
    "End-grain American black walnut, hand-planed and finished with food-safe beeswax and linseed oil. 420 × 300 × 38 mm, with chamfered lifting grooves on both ends. Each board is made in the Peckham workshop and carries the maker's stamp on the underside.",
  price: "68.00",
  currency: "GBP",
  outbound_link: "https://alderandgrain.co.uk/shop/walnut-end-grain-board",
};

const INITIAL_IMAGES = [
  { id: "img_01", filename: "board-front.jpg", content_type: "image/jpeg", size: "1.4 MB", created_at: "11 Nov 2026" },
  { id: "img_02", filename: "board-grain.jpg", content_type: "image/jpeg", size: "980 KB", created_at: "11 Nov 2026" },
  { id: "img_03", filename: "board-in-use.png", content_type: "image/png", size: "2.1 MB", created_at: "12 Nov 2026" },
];

const UPLOAD_QUEUE = [
  { filename: "board-edge-detail.jpg", content_type: "image/jpeg", size: "1.1 MB" },
  { filename: "board-oiled.webp", content_type: "image/webp", size: "640 KB" },
  { filename: "board-spec-sheet.pdf", content_type: "application/pdf", size: "310 KB" },
  { filename: "board-packaging.png", content_type: "image/png", size: "1.8 MB" },
];

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const TYPE_LABEL = {
  "image/jpeg": "JPG",
  "image/png": "PNG",
  "image/webp": "WEBP",
  "application/pdf": "PDF",
};

export default function Screen() {
  const navigate = useNavigate();
  const [saved, setSaved] = React.useState(INITIAL_PRODUCT);
  const [form, setForm] = React.useState(INITIAL_PRODUCT);
  const [errors, setErrors] = React.useState({});
  const [saveState, setSaveState] = React.useState("idle"); // idle | saving | saved
  const [savedAt, setSavedAt] = React.useState("12 Nov 2026 · 16:04");

  const [images, setImages] = React.useState(INITIAL_IMAGES);
  const [uploading, setUploading] = React.useState(null);
  const [uploadIndex, setUploadIndex] = React.useState(0);
  const [uploadError, setUploadError] = React.useState(null);
  const [notice, setNotice] = React.useState(null);
  const [lastRemoved, setLastRemoved] = React.useState(null);

  const nameRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const linkRef = React.useRef(null);
  const timers = React.useRef([]);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const after = (ms, fn) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const dirty =
    form.name !== saved.name ||
    form.description !== saved.description ||
    form.price !== saved.price ||
    form.outbound_link !== saved.outbound_link;

  const set = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (saveState === "saved") setSaveState("idle");
  };

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    const price = form.price.trim();
    if (!price) next.price = "Price is required.";
    else if (!/^\d+(\.\d{1,2})?$/.test(price))
      next.price = "Price must be a number with up to two decimals, like 68.00.";
    const link = form.outbound_link.trim();
    if (link && !/^https?:\/\/\S+$/i.test(link))
      next.outbound_link = "The buy / learn more link must be a full address starting https://";
    return next;
  }

  function handleSave(e) {
    e.preventDefault();
    if (saveState === "saving") return;
    const next = validate();
    setErrors(next);
    setNotice(null);
    if (Object.keys(next).length) {
      const target = next.name ? nameRef : next.price ? priceRef : linkRef;
      if (target.current && target.current.focus) target.current.focus();
      return;
    }
    setSaveState("saving");
    after(850, () => {
      setSaved({ ...form, name: form.name.trim(), price: form.price.trim() });
      setSavedAt("13 Nov 2026 · 09:41");
      setSaveState("saved");
      after(950, () => navigate("admin-products"));
    });
  }

  function handleCancel() {
    setForm(saved);
    setErrors({});
    setNotice("Changes discarded — the fields are back to the last saved values.");
    setSaveState("idle");
  }

  function removeImage(img) {
    const index = images.findIndex((i) => i.id === img.id);
    setImages((prev) => prev.filter((i) => i.id !== img.id));
    setLastRemoved({ img, index });
    setUploadError(null);
    setNotice(null);
  }

  function undoRemove() {
    if (!lastRemoved) return;
    setImages((prev) => {
      const next = prev.slice();
      next.splice(lastRemoved.index, 0, lastRemoved.img);
      return next;
    });
    setNotice(lastRemoved.img.filename + " restored to the product.");
    setLastRemoved(null);
  }

  function handleUpload() {
    if (uploading) return;
    const file = UPLOAD_QUEUE[uploadIndex % UPLOAD_QUEUE.length];
    setUploadIndex((i) => i + 1);
    setUploadError(null);
    setNotice(null);
    setLastRemoved(null);
    setUploading(file);
    after(1150, () => {
      setUploading(null);
      if (!ACCEPTED_TYPES.includes(file.content_type)) {
        setUploadError(
          file.filename + " was rejected. Accepted formats are JPG, PNG and WebP."
        );
        return;
      }
      setImages((prev) => {
        const next = [
          ...prev,
          {
            id: "img_" + Math.random().toString(36).slice(2, 7),
            filename: file.filename,
            content_type: file.content_type,
            size: file.size,
            created_at: "13 Nov 2026",
            isNew: true,
          },
        ];
        setNotice(file.filename + " uploaded and placed at order " + next.length + ".");
        return next;
      });
    });
  }

  const errorList = [];
  if (errors.name) errorList.push(errors.name);
  if (errors.price) errorList.push(errors.price);
  if (errors.outbound_link) errorList.push(errors.outbound_link);

  const tokens = {
    "--canvas": brand.backgroundColor,
    "--fg": brand.primaryColor,
    "--muted": brand.neutralColor,
    "--accent": brand.accentColor,
    "--accent-ink": "color-mix(in srgb, " + brand.accentColor + " 45%, " + brand.primaryColor + ")",
    "--panel": "color-mix(in srgb, " + brand.primaryColor + " 4%, " + brand.backgroundColor + ")",
    "--panel-2": "color-mix(in srgb, " + brand.primaryColor + " 8%, " + brand.backgroundColor + ")",
    "--field": "color-mix(in srgb, " + brand.primaryColor + " 6%, " + brand.backgroundColor + ")",
    "--hairline": "color-mix(in srgb, " + brand.primaryColor + " 14%, transparent)",
    "--radius": brand.radius,
    fontFamily: brand.fontBody,
    color: brand.primaryColor,
  };

  const labelCls = "block text-[11px] uppercase tracking-[0.16em] mb-2";
  const labelStyle = { color: "var(--muted)", fontFamily: brand.fontBody };
  const fieldStyle = {
    backgroundColor: "var(--field)",
    borderColor: "var(--hairline)",
    borderWidth: "1px",
    borderStyle: "solid",
    color: "var(--fg)",
    borderRadius: "var(--radius)",
    fontFamily: brand.fontBody,
    width: "100%",
  };
  const invalidStyle = { borderColor: "var(--accent-ink)" };

  return (
    <div className="vel-root min-h-full px-4 py-8 sm:px-8 lg:px-10" style={tokens}>
      <style>{`
        .vel-root input::placeholder, .vel-root textarea::placeholder { color: color-mix(in srgb, var(--muted) 70%, transparent); }
        .vel-root input, .vel-root textarea, .vel-root select { outline: none; }
        .vel-root :focus-visible { outline: 2px solid var(--accent-ink); outline-offset: 2px; border-radius: 4px; }
        .vel-root input:focus, .vel-root textarea:focus, .vel-root select:focus { border-color: var(--accent-ink) !important; }
        .vel-root select option { background: var(--canvas); color: var(--fg); }
        .vel-row { animation: vel-rise .36s cubic-bezier(.2,.7,.3,1) both; }
        .vel-fade { animation: vel-fade .3s ease both; }
        @keyframes vel-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes vel-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vel-bar { from { width: 8%; } to { width: 92%; } }
        .vel-bar { animation: vel-bar 1.1s cubic-bezier(.3,.8,.4,1) forwards; }
        .vel-tabnum { font-variant-numeric: tabular-nums; }
        .vel-ghost:hover { background-color: var(--panel-2); }
        .vel-rowitem:hover { background-color: color-mix(in srgb, var(--fg) 3%, transparent); }
        @media (prefers-reduced-motion: reduce) {
          .vel-root *, .vel-root *::before, .vel-root *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1040px]">
        {/* Row 1 — back link + title */}
        <div className="grid grid-cols-12 gap-x-4 gap-y-4 items-start">
          <div className="col-span-12 md:col-span-2">
            <button
              type="button"
              data-wf="b-0-0"
              onClick={() => navigate("admin-products")}
              className="vel-ghost inline-flex items-center gap-2 h-11 px-3 -ml-3 text-sm transition-colors"
              style={{ color: "var(--muted)", borderRadius: "var(--radius)" }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Product list</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-10" data-wf="b-0-1">
            <p className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: "var(--muted)" }}>
              Catalog admin · Product editor
            </p>
            <h1
              className="text-[30px] leading-[1.2] sm:text-[36px] font-normal"
              style={{ fontFamily: brand.fontHeading, color: "var(--fg)" }}
            >
              Edit Product — {saved.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
              <span className="vel-tabnum">ID {INITIAL_PRODUCT.id}</span>
              <span aria-hidden="true" style={{ color: "var(--hairline)" }}>|</span>
              <span className="vel-tabnum">Created 04 Sep 2026</span>
              {dirty && (
                <Badge
                  className="vel-fade text-[11px] uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 22%, transparent)",
                    color: "var(--fg)",
                    border: "1px solid var(--accent-ink)",
                    borderRadius: "999px",
                    padding: "2px 10px",
                  }}
                >
                  Unsaved changes
                </Badge>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} noValidate>
          {/* Row 2 — product details */}
          <section
            data-wf="b-1-0"
            aria-labelledby="details-heading"
            className="mt-8 p-6 sm:p-8"
            style={{
              backgroundColor: "var(--panel)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius)",
            }}
          >
            <h2
              id="details-heading"
              className="text-[21px]"
              style={{ fontFamily: brand.fontHeading, color: "var(--fg)" }}
            >
              Product details
            </h2>
            <div className="mt-3 mb-8 h-px w-10" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />

            <div className="grid grid-cols-12 gap-x-6 gap-y-7">
              <div className="col-span-12">
                <Label htmlFor="product-name" className={labelCls} style={labelStyle}>
                  Name <span style={{ color: "var(--accent-ink)" }}>(required)</span>
                </Label>
                <Input
                  id="product-name"
                  data-wf="i-1-0-0"
                  ref={nameRef}
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g. Walnut Cutting Board"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-hint name-error" : "name-hint"}
                  className="h-11 px-3 text-[15px]"
                  style={errors.name ? { ...fieldStyle, ...invalidStyle } : fieldStyle}
                />
                <p id="name-hint" className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  Shown on the catalog grid and the product detail page.
                </p>
                {errors.name && (
                  <p id="name-error" className="vel-fade mt-1 text-xs" style={{ color: "var(--accent-ink)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="col-span-12">
                <Label htmlFor="product-description" className={labelCls} style={labelStyle}>
                  Description
                </Label>
                <Textarea
                  id="product-description"
                  data-wf="i-1-0-1"
                  rows={5}
                  value={form.description}
                  onChange={set("description")}
                  placeholder="Materials, dimensions, how it is made."
                  aria-describedby="description-hint"
                  className="px-3 py-3 text-[15px] leading-[1.6]"
                  style={{ ...fieldStyle, resize: "vertical" }}
                />
                <p id="description-hint" className="mt-2 text-xs vel-tabnum" style={{ color: "var(--muted)" }}>
                  {form.description.trim().length} characters · plain text, no formatting
                </p>
              </div>

              <div className="col-span-12 sm:col-span-4">
                <Label htmlFor="product-price" className={labelCls} style={labelStyle}>
                  Price <span style={{ color: "var(--accent-ink)" }}>(required)</span>
                </Label>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute left-3 top-0 h-11 flex items-center text-[15px]"
                    style={{ color: "var(--muted)" }}
                  >
                    £
                  </span>
                  <Input
                    id="product-price"
                    data-wf="i-1-0-2"
                    ref={priceRef}
                    value={form.price}
                    onChange={set("price")}
                    inputMode="decimal"
                    placeholder="0.00"
                    aria-invalid={errors.price ? "true" : undefined}
                    aria-describedby={errors.price ? "price-hint price-error" : "price-hint"}
                    className="h-11 pl-7 pr-3 text-[15px] vel-tabnum"
                    style={errors.price ? { ...fieldStyle, ...invalidStyle } : fieldStyle}
                  />
                </div>
                <p id="price-hint" className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  Numbers only, e.g. 68.00
                </p>
                {errors.price && (
                  <p id="price-error" className="vel-fade mt-1 text-xs" style={{ color: "var(--accent-ink)" }}>
                    {errors.price}
                  </p>
                )}
              </div>

              <div className="col-span-12 sm:col-span-4">
                <Label htmlFor="product-currency" className={labelCls} style={labelStyle}>
                  Currency
                </Label>
                <Select
                  id="product-currency"
                  data-wf="i-1-0-3"
                  value={form.currency}
                  onChange={() => {}}
                  disabled
                  aria-describedby="currency-hint"
                  className="h-11 px-3 text-[15px]"
                  style={{ ...fieldStyle, opacity: 0.7, cursor: "not-allowed" }}
                >
                  <option value="GBP">GBP — Pound sterling (£)</option>
                </Select>
                <p id="currency-hint" className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  The catalog displays one currency for every product.
                </p>
              </div>

              <div className="col-span-12">
                <Label htmlFor="product-link" className={labelCls} style={labelStyle}>
                  Outbound buy / learn more link <span className="normal-case tracking-normal">(optional)</span>
                </Label>
                <Input
                  id="product-link"
                  data-wf="i-1-0-4"
                  ref={linkRef}
                  value={form.outbound_link}
                  onChange={set("outbound_link")}
                  placeholder="https://"
                  aria-invalid={errors.outbound_link ? "true" : undefined}
                  aria-describedby={errors.outbound_link ? "link-hint link-error" : "link-hint"}
                  className="h-11 px-3 text-[15px]"
                  style={errors.outbound_link ? { ...fieldStyle, ...invalidStyle } : fieldStyle}
                />
                <p id="link-hint" className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  Leave empty and the detail page shows no link at all.
                </p>
                {errors.outbound_link && (
                  <p id="link-error" className="vel-fade mt-1 text-xs" style={{ color: "var(--accent-ink)" }}>
                    {errors.outbound_link}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Row 3 — validation / status line */}
          <div data-wf="b-2-0" className="mt-6">
            {errorList.length > 0 ? (
              <div
                role="alert"
                className="vel-fade flex items-start gap-3 p-4 sm:p-5"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 14%, var(--panel))",
                  border: "1px solid var(--accent-ink)",
                  borderRadius: "var(--radius)",
                }}
              >
                <AlertCircle className="h-5 w-5 mt-px shrink-0" style={{ color: "var(--accent-ink)" }} aria-hidden="true" />
                <p className="text-sm leading-[1.6]" style={{ color: "var(--fg)" }}>
                  {errorList.join(" ")} Your previous values have been kept.
                </p>
              </div>
            ) : saveState === "saved" ? (
              <div
                role="status"
                className="vel-fade flex items-start gap-3 p-4 sm:p-5"
                style={{
                  backgroundColor: "var(--panel)",
                  border: "1px solid var(--accent-ink)",
                  borderRadius: "var(--radius)",
                }}
              >
                <CheckCircle className="h-5 w-5 mt-px shrink-0" style={{ color: "var(--accent-ink)" }} aria-hidden="true" />
                <p className="text-sm leading-[1.6]" style={{ color: "var(--fg)" }}>
                  Saved. Shoppers see the updated product on their next view — returning you to the product list.
                </p>
              </div>
            ) : (
              <div
                className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 text-sm"
                style={{
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--radius)",
                  color: "var(--muted)",
                }}
              >
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="vel-tabnum">Last saved {savedAt} by s.ganaraju</span>
                <span aria-hidden="true" style={{ color: "var(--hairline)" }}>|</span>
                <span>{dirty ? "Edits on this page are not live until you save." : "Nothing to save — this matches the live product."}</span>
              </div>
            )}
          </div>

          {/* Row 4 — images */}
          <section
            data-wf="b-3-0"
            aria-labelledby="images-heading"
            className="mt-8 p-6 sm:p-8"
            style={{
              backgroundColor: "var(--panel)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius)",
            }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2
                id="images-heading"
                className="text-[21px] vel-tabnum"
                style={{ fontFamily: brand.fontHeading, color: "var(--fg)" }}
              >
                Images ({images.length})
              </h2>
              <p className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                Order shown to shoppers
              </p>
            </div>
            <div className="mt-3 mb-6 h-px w-10" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />

            <p aria-live="polite" className="sr-only">
              {notice || uploadError || ""}
            </p>

            {images.length === 0 && !uploading ? (
              <Empty
                title="No images on this product yet"
                description="Shoppers see a plain tile until at least one image is uploaded. Add a front-on shot first — it becomes the grid thumbnail."
                action={
                  <Button
                    type="button"
                    onClick={handleUpload}
                    className="inline-flex items-center gap-2 h-11 px-5 text-sm"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "var(--fg)",
                      border: "1px solid var(--accent)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <Upload className="h-4 w-4" aria-hidden="true" />
                    Upload images
                  </Button>
                }
              />
            ) : (
              <ul className="list-none m-0 p-0" style={{ borderTop: "1px solid var(--hairline)" }}>
                {images.map((img, idx) => (
                  <li
                    key={img.id}
                    className={"vel-rowitem flex items-center gap-4 py-4 px-2 -mx-2 transition-colors" + (img.isNew ? " vel-row" : "")}
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 grid place-items-center vel-tabnum text-[15px]"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "4px",
                        border: "1px solid var(--hairline)",
                        backgroundColor: "var(--panel-2)",
                        color: "var(--accent-ink)",
                        fontFamily: brand.fontHeading,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] truncate" style={{ color: "var(--fg)" }}>
                        {img.filename}
                      </p>
                      <p className="mt-1 text-xs vel-tabnum" style={{ color: "var(--muted)" }}>
                        order {idx + 1} · {img.size} · uploaded {img.created_at}
                      </p>
                    </div>
                    <Badge
                      className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.14em]"
                      style={{
                        backgroundColor: "transparent",
                        color: "var(--muted)",
                        border: "1px solid var(--hairline)",
                        borderRadius: "999px",
                        padding: "2px 10px",
                      }}
                    >
                      {TYPE_LABEL[img.content_type] || "IMAGE"}
                    </Badge>
                    <Button
                      type="button"
                      data-wf={"i-3-0-" + idx}
                      onClick={() => removeImage(img)}
                      aria-label={"Remove " + img.filename + " from this product"}
                      className="vel-ghost inline-flex items-center gap-2 h-11 px-3 text-sm transition-colors shrink-0"
                      style={{
                        backgroundColor: "transparent",
                        color: "var(--fg)",
                        border: "1px solid var(--hairline)",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      <Trash className="h-4 w-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Remove</span>
                    </Button>
                  </li>
                ))}

                {uploading && (
                  <li
                    className="vel-row flex items-center gap-4 py-4 px-2 -mx-2"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 grid place-items-center"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "4px",
                        border: "1px dashed var(--hairline)",
                        backgroundColor: "transparent",
                        color: "var(--muted)",
                      }}
                    >
                      <Upload className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] truncate" style={{ color: "var(--fg)" }}>
                        {uploading.filename}
                      </p>
                      <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                        Uploading to the catalog store…
                      </p>
                      <div
                        className="mt-2 h-[2px] w-full overflow-hidden"
                        style={{ backgroundColor: "var(--hairline)" }}
                        aria-hidden="true"
                      >
                        <div className="vel-bar h-full" style={{ backgroundColor: "var(--accent)" }} />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            )}

            {lastRemoved && (
              <div
                className="vel-fade mt-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3"
                style={{
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--radius)",
                  backgroundColor: "var(--panel-2)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--fg)" }}>
                  {lastRemoved.img.filename} removed. The other images kept their order.
                </p>
                <Button
                  type="button"
                  onClick={undoRemove}
                  className="h-10 px-4 text-sm"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--fg)",
                    border: "1px solid var(--accent-ink)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  Put it back
                </Button>
              </div>
            )}

            {uploadError && (
              <div
                role="alert"
                className="vel-fade mt-4 flex items-start gap-3 px-4 py-3"
                style={{
                  border: "1px solid var(--accent-ink)",
                  borderRadius: "var(--radius)",
                  backgroundColor: "color-mix(in srgb, var(--accent) 14%, var(--panel))",
                }}
              >
                <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "var(--accent-ink)" }} aria-hidden="true" />
                <p className="text-sm leading-[1.6]" style={{ color: "var(--fg)" }}>
                  {uploadError}
                </p>
              </div>
            )}

            {notice && !uploadError && !lastRemoved && (
              <p className="vel-fade mt-4 flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <Check className="h-4 w-4 shrink-0" style={{ color: "var(--accent-ink)" }} aria-hidden="true" />
                {notice}
              </p>
            )}

            {/* Row 5 — upload action */}
            <div className="mt-8 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4">
                <Button
                  type="button"
                  data-wf="b-4-0"
                  onClick={handleUpload}
                  disabled={!!uploading}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 text-sm transition-colors"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--fg)",
                    border: "1px solid var(--accent-ink)",
                    borderRadius: "var(--radius)",
                    opacity: uploading ? 0.6 : 1,
                    cursor: uploading ? "wait" : "pointer",
                  }}
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  {uploading ? "Uploading…" : "Upload images"}
                </Button>
              </div>
              <p data-wf="b-4-1" className="col-span-12 md:col-span-8 text-sm leading-[1.6]" style={{ color: "var(--muted)" }}>
                Accepted formats: JPG, PNG, WebP. Other files are rejected. Images are stored by the catalog and appear in the order above.
              </p>
            </div>
          </section>

          {/* Row 6 — save / cancel */}
          <div className="mt-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4">
              <Button
                type="submit"
                data-wf="b-5-0"
                disabled={saveState !== "idle"}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 text-[15px] transition-opacity"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--fg)",
                  border: "1px solid var(--accent)",
                  borderRadius: "var(--radius)",
                  opacity: saveState === "idle" ? 1 : 0.75,
                  cursor: saveState === "idle" ? "pointer" : "progress",
                }}
              >
                {saveState === "saving" && <Clock className="h-4 w-4" aria-hidden="true" />}
                {saveState === "saved" && <Check className="h-4 w-4" aria-hidden="true" />}
                {saveState === "saving" ? "Saving product…" : saveState === "saved" ? "Saved" : "Save product"}
              </Button>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Button
                type="button"
                data-wf="b-5-1"
                onClick={handleCancel}
                disabled={!dirty || saveState !== "idle"}
                className="vel-ghost w-full inline-flex items-center justify-center h-12 px-6 text-[15px] transition-colors"
                style={{
                  backgroundColor: "transparent",
                  color: dirty && saveState === "idle" ? "var(--fg)" : "var(--muted)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--radius)",
                  opacity: dirty && saveState === "idle" ? 1 : 0.6,
                  cursor: dirty && saveState === "idle" ? "pointer" : "not-allowed",
                }}
              >
                Cancel
              </Button>
              <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                Puts every field back to the last saved values.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
