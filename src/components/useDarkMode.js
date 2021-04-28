import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    // eslint-disable-next-line no-unused-expressions
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}

export default useDarkMode
