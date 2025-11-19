import { useDispatch } from 'react-redux'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { register } from '../../store/reducers/contact'
import * as enums from '../../utils/enums/Contacts'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [pNumber, setPNumber] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState(enums.Category.FRIEND)
  const [pError, setPError] = useState('')

  const checkPNumber = (val: string) => {
    const numReplace = val.replace(/\D/g, '')
    if (numReplace.length < 12) {
      setPError('The phone number must contain at least 12 digits.')
      return false
    } else {
      setPError('')
      return true
    }
  }

  const managePNumber = (val: string) => {
    const numReplace = val.replace(/\D/g, '')
    setPNumber(numReplace)
    checkPNumber(numReplace)
  }

  const registerContact = (event: FormEvent) => {
    event.preventDefault()

    if (!checkPNumber(pNumber)) {
      return
    }

    setTimeout(() => {
      dispatch(
        register({
          name,
          pNumber: Number(pNumber),
          email,
          category,
          favorite: false
        })
      )
    }, 500)
    navigate('/')
  }

  return (
    <>
      <S.FormContainer onSubmit={registerContact}>
        <h2>New contact</h2>

        <div>
          <img src="icons/amigos.png" />

          <div>
            <S.Input
              type="text"
              id="name"
              required
              onChange={({ target }) => setName(target.value)}
              value={name}
              placeholder=""
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div>
          <img src="icons/email.png" />

          <div>
            <S.Input
              type="email"
              id="email"
              required
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              placeholder=""
            />
            <label htmlFor="email">E-mail</label>
          </div>
        </div>
        <div>
          <img src="icons/telefone.png" />

          <div>
            <S.Input
              type="tel"
              id="tel"
              required
              onChange={({ target }) => managePNumber(target.value)}
              value={pNumber}
              placeholder=""
            />
            <label htmlFor="tel">Number</label>
            {pError && <S.Error>{pError}</S.Error>}
          </div>
        </div>
        <S.CategoryField>
          <legend>Category</legend>
          {Object.values(enums.Category).map((category) => (
            <div key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                id={category}
                defaultChecked={category === enums.Category.FRIEND}
                onChange={({ target }) =>
                  setCategory(target.value as enums.Category)
                }
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </S.CategoryField>
        <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
      </S.FormContainer>
    </>
  )
}

export default Formulario
