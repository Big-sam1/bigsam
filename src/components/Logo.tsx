import React from 'react';
import { Link } from 'react-router-dom';
export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="w-9 h-9 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 flex items-center justify-center font-bold text-lg transition-transform group-hover:rotate-6">
        B
      </span>
      <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
        Bigsam<span className="text-ink-400">.dev</span>
      </span>
    </Link>);

}