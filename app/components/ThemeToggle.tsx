'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme: Theme = savedTheme ?? (systemPrefersDark ? 'dark' : 'light')

    applyTheme(nextTheme)
    setTheme(nextTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      className="button header-button ml-[1.5rem]"
      data-selected={mounted && theme === 'dark'}
      onClick={toggleTheme}
      aria-label="Toggle dark theme"
      title="Toggle dark theme"
    >
      ◐
    </button>
  )
}
