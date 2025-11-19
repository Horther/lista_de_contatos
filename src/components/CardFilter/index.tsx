import * as S from './styles'

type Props = {
  ativo: boolean
  title: string
  counter: number
  icon: string
  onClick: () => void
}

const CardFilter = ({ ativo, title, counter, icon, onClick }: Props) => {
  return (
    <>
      <S.Filter ativo={ativo} onClick={onClick}>
        <S.Icon>
          <img src={icon} alt={title} />
        </S.Icon>
        <S.Details>
          <span>{counter}</span>
        </S.Details>
      </S.Filter>
    </>
  )
}

export default CardFilter
