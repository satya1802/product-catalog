import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Icons } from "@/lib/icons";
import Catalog from "@/screens/Catalog";
import ProductDetail from "@/screens/ProductDetail";
import AdminLogin from "@/screens/AdminLogin";
import AdminProducts from "@/screens/AdminProducts";
import AdminProductEdit from "@/screens/AdminProductEdit";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
  ].join(" ");

// The app's menu, drawn around every screen except the ones routed outside it below.
function AppShellLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex items-center gap-6 px-6 py-2">
          <p
            className="shrink-0 text-sm font-semibold"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {"Product Catalog"}
          </p>
          <nav aria-label="App menu" className="flex flex-wrap items-center gap-1">
            <NavLink to="/catalog" className={navLinkClass}>
              <Icons.Home size={16} />
              {"Catalogue"}
            </NavLink>
            <NavLink to="/admin-products" className={navLinkClass}>
              <Icons.Settings size={16} />
              {"Manage Products"}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/admin-product-edit" element={<AdminProductEdit />} />
      </Route>
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="*" element={<Navigate to="/catalog" replace />} />
    </Routes>
  );
}
