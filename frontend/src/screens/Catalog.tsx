// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Label, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search } = Icons;

const HAIRLINE = "1px solid rgba(255,255,255,0.10)";
const SURFACE = "rgba(255,255,255,0.04)";
const SURFACE_UP = "rgba(255,255,255,0.06)";

const CATALOGUE_TOTAL = 486;
const PAGE_SIZE = 24;
const SAMPLE_PER_PAGE = 6;
const CURRENCY_SYMBOL = "£";

const PRODUCTS = [
  {
    id: "4101",
    wf: "i-2-0-0",
    name: "Walnut Cutting Board",
    description: "End-grain American walnut, hand-oiled. 40 × 28 cm.",
    price: 48.0,
    currency: "GBP",
  },
  {
    id: "4102",
    wf: "i-2-0-1",
    name: "Linen Apron, Natural",
    description: "Washed European flax with adjustable neck strap.",
    price: 32.0,
    currency: "GBP",
  },
  {
    id: "4103",
    wf: "i-2-0-2",
    name: "Stoneware Mug Set of 4",
    description: "Reactive glaze stoneware mugs, 300 ml. Dishwasher safe.",
    price: 26.5,
    currency: "GBP",
  },
  {
    id: "4104",
    wf: "i-2-0-3",
    name: "Cast Iron Skillet 26cm",
    description: "Pre-seasoned cast iron, oven safe to 260°C.",
    price: 64.0,
    currency: "GBP",
  },
  {
    id: "4105",
    wf: "i-2-0-4",
    name: "Olive Wood Spoon",
    description: "Carved from a single piece of Tunisian olive wood.",
    price: 11.0,
    currency: "GBP",
  },
  {
    id: "4106",
    wf: "i-2-0-5",
    name: "Ceramic Vase, Sand",
    description: "Matte ceramic bud vase in warm sand. 22 cm tall.",
    price: 39.0,
    currency: "GBP",
  },
  {
    id: "4107",
    name: "Brass Candle Snuffer",
    description: "Unlacquered brass with a long walnut handle.",
    price: 18.0,
    currency: "GBP",
  },
  {
    id: "4108",
    name: "Hand-thrown Dinner Plate",
    description: "Thrown in Stoke-on-Trent, speckled clay body. 27 cm.",
    price: 22.0,
    currency: "GBP",
  },
  {
    id: "4109",
    name: "Flax Tea Towel, Indigo",
    description: "Heavyweight linen with a woven indigo stripe.",
    price: 14.0,
    currency: "GBP",
  },
  {
    id: "4110",
    name: "Copper Jam Pan 24cm",
    description: "Tin-lined copper preserving pan with iron handle.",
    price: 96.0,
    currency: "GBP",
  },
  {
    id: "4111",
    name: "Beeswax Pillar Candles, Pair",
    description: "British beeswax, unscented. Around 40 hours each.",
    price: 16.5,
    currency: "GBP",
  },
  {
    id: "4112",
    name: "Rattan Bread Basket",
    description: "Open-weave rattan with a removable linen liner.",
    price: 28.0,
    currency: "GBP",
  },
];

function formatPrice(value) {
  return CURRENCY_SYMBOL + value.toFixed(2);
}

function monogram(name) {
  const parts = name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean);
  return ((parts[0] || "").charAt(0) + (parts[1] || "").charAt(0)).toUpperCase();
}

export default function Screen() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const label = {
    color: brand.neutralColor,
    letterSpacing: "0.18em",
    fontFamily: brand.fontBody,
  };

  const term = query.trim();
  const needle = term.toLowerCase();
  const searching = term.length > 0;

  const matches = searching
    ? PRODUCTS.filter((p) =>
        (p.name + " " + p.description).toLowerCase().includes(needle)
      )
    : PRODUCTS.slice(0, page * SAMPLE_PER_PAGE);

  const upperBound = Math.min(page * PAGE_SIZE, CATALOGUE_TOTAL);
  const exhausted = page * SAMPLE_PER_PAGE >= PRODUCTS.length;

  let countText;
  if (searching && matches.length === 0) {
    countText = "No products match “" + term + "”";
  } else if (searching) {
    countText =
      "Showing " +
      matches.length +
      " of " +
      CATALOGUE_TOTAL +
      " products for “" +
      term +
      "”";
  } else {
    countText = "Showing 1–" + upperBound + " of " + CATALOGUE_TOTAL + " products";
  }

  function clearSearch() {
    setQuery("");
  }

  function loadMore() {
    if (loading || exhausted || searching) return;
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setPage((p) => p + 1);
      setLoading(false);
    }, 550);
  }

  return (
    <div
      className="space-y-8"
      style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}
    >
      <style>{`
        @keyframes vlRise {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
        .vl-rise { animation: vlRise 320ms ease-out both; }
        .vl-card:hover .vl-rule { width: 56px; }
        @media (prefers-reduced-motion: reduce) {
          .vl-rise, .vl-pulse { animation: none !important; }
          .vl-anim, .vl-rule { transition: none !important; }
        }
      `}</style>

      {/* Row 1 — search */}
      <form
        data-wf="b-0-0"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex items-center gap-4 px-5 py-3"
        style={{
          backgroundColor: SURFACE,
          border: HAIRLINE,
          borderRadius: brand.radius,
        }}
      >
        <Label htmlFor="catalog-search" className="sr-only">
          Search products by keyword
        </Label>
        <Icons.Search
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
          style={{ color: brand.neutralColor }}
        />
        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products by keyword"
          autoComplete="off"
          className="vl-anim h-10 flex-1 bg-transparent text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{
            borderBottom: HAIRLINE,
            color: brand.primaryColor,
            outlineColor: brand.accentColor,
          }}
        />
        {query ? (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="vl-anim flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              border: HAIRLINE,
              borderRadius: brand.radius,
              color: brand.neutralColor,
              outlineColor: brand.accentColor,
            }}
          >
            <Icons.X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <span className="hidden text-xs uppercase sm:inline" style={label}>
            Name or description
          </span>
        )}
      </form>

      {/* Row 2 — title + count */}
      <div className="grid grid-cols-12 items-end gap-x-6 gap-y-3">
        <div data-wf="b-1-0" className="col-span-12 md:col-span-8">
          <h1
            className="text-4xl leading-tight"
            style={{ fontFamily: brand.fontHeading }}
          >
            All Products
          </h1>
          <span
            className="mt-3 block h-px w-16"
            style={{ backgroundColor: brand.accentColor }}
            aria-hidden="true"
          />
        </div>
        <p
          data-wf="b-1-1"
          aria-live="polite"
          className="col-span-12 text-xs uppercase tabular-nums md:col-span-4 md:text-right"
          style={label}
        >
          {countText}
        </p>
      </div>

      {/* Row 3 — product grid */}
      <section data-wf="b-2-0" aria-labelledby="catalog-products-heading">
        <h2
          id="catalog-products-heading"
          className="text-xs uppercase"
          style={label}
        >
          Products
        </h2>

        {matches.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((p, i) => (
              <li key={p.id} className="vl-rise" style={{ animationDelay: i * 40 + "ms" }}>
                <button
                  type="button"
                  data-wf={p.wf}
                  onClick={() => navigate("product-detail")}
                  className="vl-card vl-anim group flex h-full w-full flex-col p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white/[0.07]"
                  style={{
                    backgroundColor: SURFACE,
                    border: HAIRLINE,
                    borderRadius: brand.radius,
                    outlineColor: brand.accentColor,
                  }}
                >
                  <span
                    className="flex aspect-[4/3] w-full items-center justify-center"
                    style={{
                      backgroundColor: SURFACE_UP,
                      border: HAIRLINE,
                      borderRadius: brand.radius,
                    }}
                    aria-hidden="true"
                  >
                    <span className="flex flex-col items-center gap-2">
                      <span
                        className="text-3xl"
                        style={{
                          fontFamily: brand.fontHeading,
                          color: brand.primaryColor,
                        }}
                      >
                        {monogram(p.name)}
                      </span>
                      <span
                        className="vl-rule vl-anim block h-px w-8 transition-all duration-300"
                        style={{ backgroundColor: brand.accentColor }}
                      />
                    </span>
                  </span>

                  <span className="mt-4 flex items-center gap-2">
                    <Icons.Package
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                      style={{ color: brand.neutralColor }}
                    />
                    <span className="text-xs uppercase tabular-nums" style={label}>
                      No. {p.id}
                    </span>
                  </span>

                  <h3
                    className="mt-2 text-lg leading-snug"
                    style={{ fontFamily: brand.fontHeading }}
                  >
                    {p.name}
                  </h3>

                  <span
                    className="mt-1 line-clamp-2 text-sm"
                    style={{ color: brand.neutralColor }}
                  >
                    {p.description}
                  </span>

                  <span
                    className="mt-4 flex items-center justify-between pt-3"
                    style={{ borderTop: HAIRLINE }}
                  >
                    <span className="text-base tabular-nums" style={{ fontFamily: brand.fontHeading }}>
                      {formatPrice(p.price)}
                    </span>
                    <span className="flex items-center gap-1 text-xs uppercase" style={label}>
                      View
                      <Icons.ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </li>
            ))}

            {loading
              ? [0, 1, 2].map((s) => (
                  <li key={"skeleton-" + s} aria-hidden="true">
                    <div
                      className="vl-pulse h-full animate-pulse p-4"
                      style={{
                        backgroundColor: SURFACE,
                        border: HAIRLINE,
                        borderRadius: brand.radius,
                      }}
                    >
                      <div
                        className="aspect-[4/3] w-full"
                        style={{ backgroundColor: SURFACE_UP, borderRadius: brand.radius }}
                      />
                      <div className="mt-4 h-3 w-20" style={{ backgroundColor: SURFACE_UP }} />
                      <div className="mt-3 h-4 w-3/4" style={{ backgroundColor: SURFACE_UP }} />
                      <div className="mt-2 h-3 w-1/2" style={{ backgroundColor: SURFACE_UP }} />
                    </div>
                  </li>
                ))
              : null}
          </ul>
        ) : (
          <div
            className="mt-4 px-5 py-6 text-sm"
            style={{
              backgroundColor: SURFACE,
              border: HAIRLINE,
              borderRadius: brand.radius,
              color: brand.neutralColor,
            }}
          >
            The catalogue is quiet right now — nothing to show in this view.
          </div>
        )}
      </section>

      {/* Row 4 — load more */}
      <div data-wf="b-3-0" className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={loadMore}
          disabled={loading || exhausted || searching}
          aria-describedby="catalog-load-note"
          className="vl-anim flex min-h-[44px] items-center justify-center gap-2 px-8 py-3 text-xs uppercase transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-45"
          style={{
            backgroundColor: brand.accentColor,
            color: brand.primaryColor,
            borderRadius: brand.radius,
            letterSpacing: "0.18em",
            outlineColor: brand.primaryColor,
          }}
        >
          {loading ? (
            <>
              <Icons.Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
              Loading products
            </>
          ) : (
            <>
              <Icons.ChevronDown className="h-4 w-4" aria-hidden="true" />
              Load more products
            </>
          )}
        </button>
        <p
          id="catalog-load-note"
          className="text-xs uppercase tabular-nums"
          style={label}
          aria-live="polite"
        >
          {searching
            ? "Clear the search to keep browsing the full catalogue"
            : exhausted
            ? "End of this set — " + CATALOGUE_TOTAL + " products in the full catalogue"
            : upperBound + " of " + CATALOGUE_TOTAL + " shown"}
        </p>
      </div>

      {/* Row 5 — no results */}
      {searching && matches.length === 0 ? (
        <div
          data-wf="b-4-0"
          className="vl-rise px-6 py-10"
          style={{
            backgroundColor: SURFACE,
            border: HAIRLINE,
            borderRadius: brand.radius,
          }}
        >
          <Empty
            title="Nothing in the catalogue by that name"
            description={
              "No products match “" +
              term +
              "”. Clear the search to see the full catalogue."
            }
            action={
              <Button
                type="button"
                onClick={clearSearch}
                className="vl-anim min-h-[44px] px-6 text-xs uppercase focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: "transparent",
                  border: HAIRLINE,
                  borderRadius: brand.radius,
                  color: brand.primaryColor,
                  letterSpacing: "0.18em",
                  outlineColor: brand.accentColor,
                }}
              >
                Clear search
              </Button>
            }
          />
        </div>
      ) : null}
    </div>
  );
}
