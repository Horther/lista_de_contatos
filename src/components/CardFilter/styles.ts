import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Filter = styled.div<Props>`
  background-color: ${(props) =>
    props.ativo ? variaveis.branco : variaveis.verdeClaro};
  border-radius: 2rem 0 0 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0;
  margin-right: -1rem;
  position: relative;
  height: 3rem;
  margin-bottom: 0.25rem;

  &::after {
    content: '';
    position: absolute;
    border-radius: 2rem 0 0 2rem;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
  }
  &:hover::after {
    background-color: ${variaveis.cinzaClaro};
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Icon = styled.div`
  margin-left: 1.2rem;
  display: flex;
  position: relative;

  img {
    height: 20px;
  }

  &::after {
    content: '';
    border-radius: 50%;
    inset: 0;
    background-color: transparent;
    position: absolute;
    padding: 0%.9rem;
    top: -0.25rem;
    left: -0.3rem;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 1rem;
  font-size: 0.9rem;

  p {
    font-weight: bold;
  }
`
