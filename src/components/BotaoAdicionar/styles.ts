import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const AdicionaBotao = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  &:hover {
    box-shadow: 2px 2px 1px ${variaveis.cinza};
    opacity: 1;
    border: none;
  }

  margin-bottom: 24px;
`
