import { createContext } from 'react'
import type { Theme } from '../hooks/useTheme'

export type ThemeContextValue = {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
