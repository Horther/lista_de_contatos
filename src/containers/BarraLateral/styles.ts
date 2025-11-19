import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'
import { AdicionaBotao } from '../../components/BotaoAdicionar/styles'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${variaveis.verde};
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Title = styled(Link)`
  gap: 0.5rem;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: ${variaveis.vermelho};
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.16rem;
  }
`

export const BackBtn = styled(AdicionaBotao)``

export const Logo = styled.div`
  img {
    width: 32px;
    height: 32px;
  }
`
