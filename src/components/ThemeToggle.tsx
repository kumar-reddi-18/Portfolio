"use client";

/**
 * Sun/moon button. The page starts from the device setting; clicking saves the
 * visitor's choice. Which icon shows is handled in CSS (.theme-icon-*), so the
 * right one appears on first paint with no flash.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const set = root.dataset.theme;
    const isDark =
      set === "dark" ||
      (set !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="relative grid size-9 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg transition-colors"
    >
      {/* Moon: shown in light mode (click for dark) */}
      <svg viewBox="0 0 24 24" className="theme-icon theme-icon-moon size-5" aria-hidden>
        <path fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      {/* Sun: shown in dark mode (click for light) */}
      <svg viewBox="0 0 24 24" className="theme-icon theme-icon-sun size-5" aria-hidden>
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M4.6 19.4L6 18M18 6l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}
