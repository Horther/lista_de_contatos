import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import TypeContact from '../../models/Contact'
import { remove, edit, swapFavorite } from '../../store/reducers/contact'

type Props = TypeContact

const categoryCheck = (categoria: string) => {
  if (categoria === 'friend') {
    return 'icons/amigos.png'
  } else if (categoria === 'family') {
    return 'icons/familia.png'
  } else {
    return 'icons/escritorio.png'
  }
}

const Contact = ({
  name: cName,
  email: cEmail,
  category,
  pNumber: cNumber,
  favorite: cFavorite,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [pNumber, setPNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editing, setEditing] = useState(false)
  const [favorite, setFavorite] = useState(cFavorite)
  const [pError, setPError] = useState('')

  useEffect(() => {
    if (cNumber > 0) setPNumber(cNumber.toString())
    if (cName.length > 0) setName(cName)
    if (cEmail.length > 0) setEmail(cEmail)
    setFavorite(cFavorite)
  }, [cNumber, cName, cEmail, cFavorite])

  const checkPNumber = (numero: string) => {
    const checaNumeros = numero.replace(/\D/g, '')
    if (checaNumeros.length < 12) {
      setPError('The phone number must contain at least 12 digits.')
      return false
    } else {
      setPError('')
      return true
    }
  }

  const changePNumber = (numero: string) => {
    const phoneNumber = numero.replace(/\D/g, '')
    setPNumber(phoneNumber)
    checkPNumber(phoneNumber)
  }

  const noEdit = () => {
    setEditing(false)
    setName(cName)
    setEmail(cEmail)
    setPNumber(cNumber.toString())
    setFavorite(cFavorite)
    changePNumber(cNumber.toString())
  }

  const save = () => {
    if (!checkPNumber(pNumber)) {
      return
    }
    dispatch(
      edit({
        name,
        email,
        category,
        pNumber: parseInt(pNumber),
        favorite,
        id
      })
    )
    setEditing(false)
  }

  const Delete = () => {
    if (window.confirm('Are you sure about that?')) {
      dispatch(remove(id))
    }
  }

  const changeFavorite = () => {
    setFavorite(!favorite)
    dispatch(swapFavorite(id))
  }

  return (
    <S.ContactBar key={id}>
      <S.NameCollumn>
        <div>
          {editing ? (
            <img src="icons/caneta.png" alt={category} />
          ) : (
            <img src={categoryCheck(category)} alt={category} />
          )}
        </div>
        <S.Input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          disabled={!editing}
        />
      </S.NameCollumn>
      <div>
        <S.Input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          disabled={!editing}
        />
      </div>
      <div>
        <S.Input
          type="tel"
          value={pNumber}
          onChange={({ target }) => setPNumber(target.value)}
          disabled={!editing}
        />
        {pError && <S.Error>{pError}</S.Error>}
      </div>
      <S.Options>
        {editing ? (
          <>
            <S.BtnFunctions title="Favorite" onClick={changeFavorite}>
              <img
                src={favorite ? 'icons/estrela-fill.png' : 'icons/estrela.png'}
                alt="Favorite"
                width="12px"
                height="12px"
              />
            </S.BtnFunctions>
            <S.BtnFunctions onClick={save} title="Save">
              <img src="icons/save.png" alt="Save" width="12px" height="12px" />
            </S.BtnFunctions>
            <S.BtnFunctions onClick={noEdit} title="Cancel">
              <img
                src="icons/cancel.png"
                alt="Delete"
                width="12px"
                height="12px"
              />
            </S.BtnFunctions>
          </>
        ) : (
          <>
            <S.BtnFunctions title="Favorite" onClick={changeFavorite}>
              <img
                src={favorite ? 'icons/estrela-fill.png' : 'icons/estrela.png'}
                alt="Favorite"
                width="12px"
                height="12px"
              />
            </S.BtnFunctions>
            <S.BtnFunctions onClick={() => setEditing(!editing)} title="Edit">
              <img
                src="icons/caneta.png"
                alt="Edit"
                width="12px"
                height="12px"
              />
            </S.BtnFunctions>
            <S.BtnFunctions onClick={Delete}>
              <img
                src="icons/lata-de-lixo.png"
                alt="Delete"
                width="12px"
                height="12px"
              />
            </S.BtnFunctions>
          </>
        )}
      </S.Options>
    </S.ContactBar>
  )
}

export default Contact
