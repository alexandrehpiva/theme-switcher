import React from 'react'
import Switch from 'react-switch'
import { useTheme } from 'styled-components'
import { Container } from './styles'
import { shade } from 'polished'

type HeaderProps = {
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme()

  return (
    <Container>
      Hello World
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        disabled={false}
        offColor={shade(0.15, theme.colors.primary)}
        onColor={theme.colors.secondary}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
    </Container>
  )
}

export default Header
