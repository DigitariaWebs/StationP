'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-2 text-sm font-medium text-[color:var(--color-foreground)] shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
    >
      {isLight ? (
        <Moon size={16} className="text-[color:var(--color-foreground)]" />
      ) : (
        <Sun size={16} className="text-[color:var(--color-foreground)]" />
      )}
      <span className="hidden sm:inline">
        {isLight ? 'Mode sombre' : 'Mode clair'}
      </span>
    </button>
  );
}
