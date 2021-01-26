import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 30px;
  height: 60px;
  
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
