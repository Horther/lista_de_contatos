import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filter'
import BtnAdd from '../../components/BotaoAdicionar'

type Props = {
  showFilters: boolean
}

const BarraLateral = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const { category } = useSelector((state: RootReducer) => state.filter)
  const { itens } = useSelector((state: RootReducer) => state.contact)

  const contactList = (category: string) => {
    if (category === 'all') return itens.length
    if (category === 'favorite') return itens.filter((c) => c.favorite).length
    return itens.filter((c) => c.category === category).length
  }

  const filterHandler = (
    newCategory: 'friend' | 'family' | 'work' | 'favorite' | 'all'
  ) => {
    dispatch(changeFilter(newCategory))
  }

  return (
    <>
      <S.Aside>
        <S.Title to={'/'}>
          <S.Logo>
            <img src="contact.png" alt="logo" />
          </S.Logo>
          <h1> Contacts</h1>
        </S.Title>

        {showFilters ? (
          <>
            <BtnAdd />

            <CardFilter
              $ativo={category === 'all'}
              counter={contactList('all')}
              title="Contacts"
              icon="icons/contatos.png"
              onClick={() => filterHandler('all')}
            />
            <CardFilter
              $ativo={category === 'family'}
              counter={contactList('family')}
              title="Family"
              icon="icons/familia.png"
              onClick={() => filterHandler('family')}
            />
            <CardFilter
              $ativo={category === 'friend'}
              counter={contactList('friend')}
              title="Friends"
              icon="icons/amigos.png"
              onClick={() => filterHandler('friend')}
            />
            <CardFilter
              $ativo={category === 'work'}
              counter={contactList('work')}
              title="Work"
              icon="icons/escritorio.png"
              onClick={() => filterHandler('work')}
            />
            <CardFilter
              $ativo={category === 'favorite'}
              counter={contactList('favorite')}
              title="Favorite"
              icon="icons/estrela-fill.png"
              onClick={() => filterHandler('favorite')}
            />
          </>
        ) : (
          <>
            {' '}
            <S.BackBtn to="/"> {`-`} </S.BackBtn>{' '}
          </>
        )}
      </S.Aside>
    </>
  )
}

export default BarraLateral
