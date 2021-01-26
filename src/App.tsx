import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { light, dark } from './styles/themes'

import Header from './components/Header'
import GlobalStyle from './styles/global'
import usePersistedState from './utils/usePersistedState'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    console.log(`Mudando o tema para ${theme.title === 'light' ? 'dark' : 'light'}`)
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
