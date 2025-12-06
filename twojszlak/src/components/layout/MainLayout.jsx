import { Link, NavLink } from "react-router-dom";

export function MainLayout({ children }) {
  return (
    <div>
      <header style={{ background: "#1f2937", color: "#fff", padding: "1rem" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <NavLink to="/" style={{ color: "white" }}>
            Strona główna
          </NavLink>
          <NavLink to="/trips" style={{ color: "white" }}>
            Moje podróże
          </NavLink>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>{children}</main>

      <footer
        style={{
          background: "#1f2937",
          color: "#9ca3af",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        TwojSzlak.pl © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
