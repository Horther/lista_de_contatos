import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
    scrollbar-width: none;

    color: ${variaveis.btnTextContact};

    body::-webkit-scrollbar{
      width: none;
    }

    &:hover{
      transition: .3s ease-in-out;
    }
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  z-index: 1;
  background-color: ${variaveis.branco};
  h4 {
    margin-left: 1rem;
  }

  button {
    display: none;
    cursor: pointer;
  }
`

export const Btn = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-right: 1rem;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.6;
    border: 1px solid ${variaveis.cinza};
    cursor: pointer;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 90vh;
  gap: 0.5rem;
`

export const InputStyle = styled.input`
  color: ${variaveis.btnTextContact};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${variaveis.vermelho};
  padding: 0.25rem 0.5rem;

  &:focus {
    color: ${variaveis.azulEscuro};
  }
`

export default EstiloGlobal
