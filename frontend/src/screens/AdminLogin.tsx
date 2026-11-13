// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, AlertCircle, CheckCircle } = Icons;

const ADMIN_CREDENTIALS = { username: "e.thorne", password: "baskerville" };

const CATALOGUE_FACTS = [
  { label: "Objects published", value: "428" },
  { label: "Images stored", value: "1,206" },
  { label: "Catalogue edition", value: "Autumn 2026" },
  { label: "Last update", value: "11 Nov 2026" },
];

export default function Screen() {
  const navigate = useNavigate();
  const toRgba = (hex, alpha) => {
    const raw = String(hex || "").replace("#", "");
    const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
    const n = parseInt(full, 16);
    if (Number.isNaN(n)) return `rgba(255,255,255,${alpha})`;
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
  };

  const ink = brand.primaryColor;
  const muted = brand.neutralColor;
  const accent = brand.accentColor;
  const canvas = brand.backgroundColor;
  const surface = toRgba(ink, 0.035);
  const field = toRgba(ink, 0.05);
  const hairline = toRgba(ink, 0.12);
  const radius = brand.radius;

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | submitting | error | success
  const [attempts, setAttempts] = React.useState(0);
  const [capsLock, setCapsLock] = React.useState(false);
  const [focused, setFocused] = React.useState(null);
  const [noticeOpen, setNoticeOpen] = React.useState(true);

  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const timers = React.useRef([]);

  React.useEffect(() => {
    const list = timers.current;
    return () => list.forEach((t) => clearTimeout(t));
  }, []);

  const track = (id) => {
    timers.current.push(id);
    return id;
  };

  const busy = status === "submitting" || status === "success";

  const handleCaps = (event) => {
    if (typeof event.getModifierState === "function") {
      setCapsLock(event.getModifierState("CapsLock"));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (busy) return;

    const next = {};
    if (!username.trim()) next.username = "Enter the username on your staff account.";
    if (!password) next.password = "Enter your password to continue.";
    setFieldErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus("idle");
      if (next.username) usernameRef.current && usernameRef.current.focus();
      else passwordRef.current && passwordRef.current.focus();
      return;
    }

    setStatus("submitting");
    track(
      setTimeout(() => {
        const ok =
          username.trim().toLowerCase() === ADMIN_CREDENTIALS.username &&
          password === ADMIN_CREDENTIALS.password;
        if (ok) {
          setStatus("success");
          track(setTimeout(() => navigate("admin-products"), 760));
        } else {
          setStatus("error");
          setAttempts((a) => a + 1);
          track(setTimeout(() => passwordRef.current && passwordRef.current.focus(), 40));
        }
      }, 950)
    );
  };

  const fieldStyle = (key, invalid) => ({
    backgroundColor: field,
    border: `1px solid ${invalid ? toRgba(accent, 0.6) : focused === key ? toRgba(ink, 0.45) : hairline}`,
    borderRadius: radius,
    color: ink,
    boxShadow: focused === key ? `0 0 0 3px ${toRgba(ink, 0.14)}` : "none",
    transition: "border-color .18s ease, box-shadow .18s ease, background-color .18s ease",
    fontVariantNumeric: "tabular-nums",
  });

  const labelStyle = {
    color: muted,
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600,
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: canvas, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{`
        .velvet-focus:focus-visible { outline: 2px solid ${ink}; outline-offset: 2px; border-radius: ${radius}; }
        .velvet-input::placeholder { color: ${muted}; opacity: .65; }
        @keyframes velvetRise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes velvetSpin { to { transform: rotate(360deg); } }
        .velvet-rise { animation: velvetRise .5s cubic-bezier(.22,.7,.3,1) both; }
        .velvet-spin { animation: velvetSpin .9s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .velvet-rise, .velvet-spin { animation: none !important; }
          .velvet-anim { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto grid min-h-screen w-full max-w-[1320px] grid-cols-1 lg:grid-cols-12">
        {/* ── Editorial plate ─────────────────────────────── */}
        <aside
          className="order-2 flex flex-col justify-between gap-12 px-6 py-12 lg:order-1 lg:col-span-5 lg:px-16 lg:py-16"
          style={{ borderRight: `1px solid ${hairline}` }}
        >
          <div className="velvet-rise">
            <p style={labelStyle}>Maison Thorne · Catalogue of objects</p>
            <div className="mt-6 h-px w-16" style={{ backgroundColor: accent }} aria-hidden="true" />
            <p
              className="mt-6 max-w-[34ch] text-2xl leading-snug lg:text-[28px]"
              style={{ fontFamily: brand.fontHeading, color: ink }}
            >
              Four hundred and twenty-eight objects, photographed, described and
              priced by hand.
            </p>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed" style={{ color: muted }}>
              The public catalogue needs no account. This door is for the two
              people who keep it accurate.
            </p>
          </div>

          <dl
            className="velvet-rise grid grid-cols-2 gap-x-8"
            style={{ animationDelay: "90ms", borderTop: `1px solid ${hairline}` }}
          >
            {CATALOGUE_FACTS.map((fact) => (
              <div key={fact.label} className="py-5" style={{ borderBottom: `1px solid ${hairline}` }}>
                <dt style={labelStyle}>{fact.label}</dt>
                <dd
                  className="mt-2 text-xl"
                  style={{ fontFamily: brand.fontHeading, color: ink, fontVariantNumeric: "tabular-nums" }}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="velvet-rise" style={{ animationDelay: "150ms" }}>
            <p className="text-xs leading-relaxed" style={{ color: muted }}>
              Prototype access — username{" "}
              <span style={{ color: ink, fontVariantNumeric: "tabular-nums" }}>e.thorne</span>, password{" "}
              <span style={{ color: ink }}>baskerville</span>.
            </p>
          </div>
        </aside>

        {/* ── Credentials ─────────────────────────────────── */}
        <main
          className="order-1 flex items-center px-6 py-12 lg:order-2 lg:col-span-7 lg:px-20 lg:py-16"
          style={{ backgroundColor: surface }}
        >
          <form onSubmit={handleSubmit} noValidate className="w-full max-w-[520px]">
            {/* b-0-0 page title */}
            <div data-wf="b-0-0" className="velvet-rise">
              <p style={labelStyle}>Staff access</p>
              <h1
                className="mt-3 text-[34px] leading-tight lg:text-[40px]"
                style={{ fontFamily: brand.fontHeading, color: ink, fontWeight: 400 }}
              >
                Admin Sign In
              </h1>
              <div className="mt-5 h-px w-24" style={{ backgroundColor: accent }} aria-hidden="true" />
            </div>

            {/* b-1-0 intro text */}
            <div data-wf="b-1-0" className="velvet-rise mt-6" style={{ animationDelay: "60ms" }}>
              <p className="max-w-[60ch] text-[15px] leading-relaxed" style={{ color: muted }}>
                This area is for catalogue staff. Shoppers can browse the catalogue
                without signing in.
              </p>

              {noticeOpen && (
                <div
                  className="velvet-rise mt-5 flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: toRgba(ink, 0.05),
                    border: `1px solid ${hairline}`,
                    borderLeft: `2px solid ${accent}`,
                    borderRadius: radius,
                  }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                  <p className="flex-1 text-sm leading-relaxed" style={{ color: ink }}>
                    <span className="font-semibold">Manage Products is closed to visitors.</span>{" "}
                    <span style={{ color: muted }}>
                      Sign in with your staff account to add, edit or remove catalogue entries.
                    </span>
                  </p>
                  <button
                    type="button"
                    aria-label="Dismiss access notice"
                    onClick={() => setNoticeOpen(false)}
                    className="velvet-focus velvet-anim -m-2 flex h-11 w-11 shrink-0 items-center justify-center"
                    style={{ color: muted, background: "transparent", border: "none" }}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>

            {/* b-2-0 credentials form block */}
            <fieldset
              data-wf="b-2-0"
              className="velvet-rise mt-10 min-w-0 border-0 p-0"
              style={{ animationDelay: "110ms" }}
              disabled={busy}
            >
              <legend style={labelStyle} className="mb-5">
                Credentials
              </legend>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="admin-username" className="block text-sm font-medium" style={{ color: ink }}>
                    Username
                  </Label>
                  <Input
                    data-wf="i-2-0-0"
                    id="admin-username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    spellCheck="false"
                    autoCapitalize="none"
                    ref={usernameRef}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (fieldErrors.username) setFieldErrors((p) => ({ ...p, username: undefined }));
                    }}
                    onFocus={() => setFocused("username")}
                    onBlur={() => setFocused(null)}
                    aria-invalid={fieldErrors.username ? "true" : "false"}
                    aria-describedby={fieldErrors.username ? "admin-username-error" : "admin-username-hint"}
                    placeholder="e.thorne"
                    className="velvet-input velvet-focus mt-2 w-full px-3.5 py-3 text-[15px]"
                    style={fieldStyle("username", !!fieldErrors.username)}
                  />
                  {fieldErrors.username ? (
                    <p
                      id="admin-username-error"
                      className="velvet-rise mt-2 flex items-center gap-2 text-sm"
                      style={{ color: ink }}
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      {fieldErrors.username}
                    </p>
                  ) : (
                    <p id="admin-username-hint" className="mt-2 text-xs" style={{ color: muted }}>
                      The staff name on your account, not an email address.
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <Label htmlFor="admin-password" className="block text-sm font-medium" style={{ color: ink }}>
                      Password
                    </Label>
                    <span className="text-xs" style={{ color: muted }}>
                      Stored hashed — never readable
                    </span>
                  </div>
                  <div className="relative mt-2">
                    <Input
                      data-wf="i-2-0-1"
                      id="admin-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      ref={passwordRef}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (fieldErrors.password) setFieldErrors((p) => ({ ...p, password: undefined }));
                      }}
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused(null)}
                      onKeyUp={handleCaps}
                      onKeyDown={handleCaps}
                      aria-invalid={fieldErrors.password ? "true" : "false"}
                      aria-describedby={fieldErrors.password ? "admin-password-error" : "admin-password-hint"}
                      className="velvet-input velvet-focus w-full py-3 pl-3.5 pr-24 text-[15px]"
                      style={fieldStyle("password", !!fieldErrors.password)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-pressed={showPassword}
                      className="velvet-focus velvet-anim absolute right-1.5 top-1/2 flex h-11 min-w-[64px] -translate-y-1/2 items-center justify-center px-3 text-xs font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color: ink,
                        background: toRgba(ink, 0.06),
                        border: `1px solid ${hairline}`,
                        borderRadius: radius,
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  {fieldErrors.password ? (
                    <p
                      id="admin-password-error"
                      className="velvet-rise mt-2 flex items-center gap-2 text-sm"
                      style={{ color: ink }}
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      {fieldErrors.password}
                    </p>
                  ) : (
                    <p id="admin-password-hint" className="mt-2 text-xs" style={{ color: muted }}>
                      Sessions close after 30 minutes without activity.
                    </p>
                  )}

                  <p aria-live="polite" className="sr-only">
                    {capsLock ? "Caps Lock is on." : ""}
                  </p>
                  {capsLock && (
                    <p className="velvet-rise mt-2 flex items-center gap-2 text-xs" style={{ color: ink }}>
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      Caps Lock is on — passwords are case sensitive.
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* b-3-0 sign-in result */}
            <div data-wf="b-3-0" role="status" aria-live="polite" className="mt-6">
              {status === "error" && (
                <div
                  className="velvet-rise flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: toRgba(accent, 0.14),
                    border: `1px solid ${toRgba(accent, 0.5)}`,
                    borderRadius: radius,
                  }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" style={{ color: ink }} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold" style={{ color: ink }}>
                      Sign in failed. Your username or password is incorrect.
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: muted }}>
                      We don&apos;t say which of the two it was — that is deliberate. Your
                      entries are still here; correct them and try again.
                    </p>
                    {attempts >= 3 && (
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: muted }}>
                        <span style={{ color: ink, fontVariantNumeric: "tabular-nums" }}>
                          {attempts} attempts have failed.
                        </span>{" "}
                        Passwords are stored hashed and cannot be looked up — ask Elinor
                        Thorne to set a new one for you.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {status === "success" && (
                <div
                  className="velvet-rise flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: toRgba(ink, 0.06),
                    border: `1px solid ${hairline}`,
                    borderRadius: radius,
                  }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                  <p className="text-sm" style={{ color: ink }}>
                    Signed in as{" "}
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>{username.trim()}</span> — opening Manage
                    Products.
                  </p>
                </div>
              )}

              {status === "submitting" && (
                <p className="text-sm" style={{ color: muted }}>
                  Checking your credentials against the staff directory…
                </p>
              )}
            </div>

            {/* b-4-0 primary action */}
            <div data-wf="b-4-0" className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                type="submit"
                disabled={busy}
                className="velvet-focus velvet-anim inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 px-6 text-[15px] font-semibold sm:w-5/12"
                style={{
                  backgroundColor: accent,
                  color: ink,
                  border: `1px solid ${toRgba(accent, 0.9)}`,
                  borderRadius: radius,
                  opacity: busy ? 0.75 : 1,
                  cursor: busy ? "default" : "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                {status === "submitting" && (
                  <span
                    className="velvet-spin inline-block h-4 w-4 rounded-full"
                    aria-hidden="true"
                    style={{
                      border: `2px solid ${toRgba(ink, 0.3)}`,
                      borderTopColor: ink,
                    }}
                  />
                )}
                {status === "success" && <Check className="h-4 w-4" aria-hidden="true" />}
                {status === "submitting" ? "Signing in…" : status === "success" ? "Signed in" : "Sign in"}
              </Button>

              <p className="text-xs leading-relaxed sm:max-w-[26ch]" style={{ color: muted }}>
                Only catalogue staff accounts can reach product management.
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
