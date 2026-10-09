import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 border transition-all duration-200 flex items-center justify-center group relative ${
        isDark
          ? 'bg-brand-surface border-brand-border text-brand-text hover:text-brand-orange hover:border-brand-orange'
          : 'bg-brand-surface border-brand-border text-brand-text hover:text-brand-orange hover:border-brand-orange'
      } ${className}`}
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-brand-orange group-hover:-rotate-12 transition-transform" />
      )}
      <span className="sr-only">
        {isDark ? 'Mode Terang' : 'Mode Gelap'}
      </span>
    </button>
  );
}
