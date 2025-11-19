import { useSelector } from 'react-redux'
import { useState } from 'react'
import Contact from '../../components/Contato'
import ContactType from '../../models/Contact'
import { Content } from '../../styles'
import * as S from './styles'
import type { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { category } = useSelector((state: RootReducer) => state.filter)
  const [search, setSearch] = useState('')

  const filterContacts = (): ContactType[] => {
    let filteredContacts = itens

    if (category && category !== 'all') {
      if (category === 'favorite') {
        filteredContacts = filteredContacts.filter((c) => c.favorite)
      } else {
        filteredContacts = filteredContacts.filter(
          (c) => c.category === category
        )
      }
    }

    if (search.trim()) {
      const term = search.toLowerCase()
      filteredContacts = filteredContacts.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.email.toLowerCase().includes(term) ||
          c.pNumber.toString().includes(term)
      )
    }

    return filteredContacts
  }

  const fContats = filterContacts()

  return (
    <S.MainContainer>
      <S.SearchContainer>
        <S.SearchBar
          placeholder="Name, email or number"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </S.SearchContainer>
      <S.TitleContainer>
        <h2>Contatos {fContats.length}</h2>
      </S.TitleContainer>

      <Content>
        <h4>Name</h4>
        <h4>E-mail</h4>
        <h4>Telefone</h4>
      </Content>
      <S.Container>
        {fContats.length == 0 ? (
          <>
            <h3>🐱‍💻 Xiii, nenhum contato, vai ter que adicionar!</h3>
          </>
        ) : (
          fContats.map((contact) => (
            <Contact
              key={contact.id}
              category={contact.category}
              email={contact.email}
              name={contact.name}
              pNumber={contact.pNumber}
              id={contact.id}
              favorite={contact.favorite}
            />
          ))
        )}
      </S.Container>
    </S.MainContainer>
  )
}

export default ContactList
