import styled from 'styled-components'
import { Btn, Content, InputStyle } from '../../styles'
import variaveis from '../../styles/variaveis'

export const ContactBar = styled(Content)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
    margin-top: 0.5rem;
    padding: 2rem;
    top: -2rem;
    z-index: -1;
    left: -1rem;
  }

  &:hover::after {
    background-color: ${variaveis.cinzaClaro};
  }

  &:hover button {
    display: inline-block;
  }

  &:hover div div::after {
    background-color: ${variaveis.branco};
  }

  div {
    position: relative;
  }
`

export const Input = styled(InputStyle)`
  border: none;
`

export const Options = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: -0.25rem;
`

export const BtnFunctions = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 36px;
  width: 40px;
  text-align: center;
`

export const NameCollumn = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    margin-bottom: 1rem;

    img {
      margin-top: 0.25rem;
      height: 20px;
      position: relative;
    }
  }

  div::after {
    content: '';
    border-radius: 50%;
    background-color: ${variaveis.verde};
    opacity: 0.3;
    position: absolute;
    padding: 0.9rem;
    top: 0;
    left: -0.3rem;
    z-index: 1;
  }
`

export const Error = styled.span`
  color: ${variaveis.vermelho};
  font-size: 10px;
  font-weight: 500;
  position: absolute;
  bottom: 2px;
`
