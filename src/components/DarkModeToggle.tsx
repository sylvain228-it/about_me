import { useThemeContext } from '../hooks/useThemeContext'
import { cn } from '../utils/cn'

export function DarkModeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'relative inline-flex h-10 w-[4.25rem] shrink-0 items-center rounded-full border border-slate-200/80 bg-white/80 px-1 shadow-sm backdrop-blur-sm transition-colors dark:border-slate-700 dark:bg-slate-900/80',
        className,
      )}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      <span
        className={cn(
          'pointer-events-none absolute left-1 flex h-8 w-8 translate-x-0 items-center justify-center rounded-full bg-cyan-500 text-white shadow-md transition-transform duration-300 dark:translate-x-[2.15rem]',
        )}
      >
        {isDark ? (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM5.64 5.64a1 1 0 011.41 0l.71.71a1 1 0 11-1.41 1.41l-.71-.71a1 1 0 010-1.41zM18.36 18.36a1 1 0 01-1.41 0l-.71-.71a1 1 0 111.41-1.41l.71.71a1 1 0 010 1.41zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm14-1a1 1 0 100 2h1a1 1 0 100-2h-1zM5.64 18.36a1 1 0 010-1.41l.71-.71a1 1 0 111.41 1.41l-.71.71a1 1 0 01-1.41 0zM18.36 5.64a1 1 0 010 1.41l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 011.41 0z" />
          </svg>
        )}
      </span>
      <span className="sr-only">{isDark ? 'Mode sombre' : 'Mode clair'}</span>
    </button>
  )
}
