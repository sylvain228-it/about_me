import { useContext } from 'react'
import { ThemeContext, type ThemeContextValue } from '../context/theme-context'

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return ctx
}
