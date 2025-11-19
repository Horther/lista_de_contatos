import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contacts'

type ContactState = {
  itens: Contact[]
}

const cContact: Contact[] = [
  {
    name: 'Felipe',
    email: 'felipe@email.com',
    category: enums.Category.FAMILY,
    pNumber: 123123123123,
    favorite: false,
    id: 1
  },
  {
    name: 'Kleber',
    email: 'Kleber@email.com',
    category: enums.Category.FRIEND,
    pNumber: 123123123123,
    favorite: false,
    id: 2
  },
  {
    name: 'Sam',
    email: 'Sam@email.com',
    category: enums.Category.WORK,
    pNumber: 123123123123,
    favorite: true,
    id: 3
  }
]

function showContacts(): Contact[] {
  const savedContacts = localStorage.getItem('contatos')
  if (savedContacts) {
    try {
      return JSON.parse(savedContacts)
    } catch {
      return []
    }
  }

  return []
}

const savedContacts = showContacts()

const initialState: ContactState = {
  itens: savedContacts.length > 0 ? savedContacts : cContact
}

function saveContacts(contatos: Contact[]) {
  localStorage.setItem('contatos', JSON.stringify(contatos))
}

const contactSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
      saveContacts(state.itens)
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
        saveContacts(state.itens)
      }
    },
    swapFavorite: (state, action: PayloadAction<number>) => {
      const contato = state.itens.find((c) => c.id === action.payload)

      if (contato) {
        contato.favorite = !contato.favorite
        saveContacts(state.itens)
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const findName = state.itens.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      const findEmail = state.itens.find(
        (c) => c.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      const findPNumber = state.itens.find(
        (c) => c.pNumber === action.payload.pNumber
      )

      if (findName) {
        alert('Name already exists!!')
      } else if (findEmail) {
        alert('Email already exists!!')
      } else if (findPNumber) {
        alert('Phone number already exists!!')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
          favorite: false
        }
        state.itens.push(newContact)
        saveContacts(state.itens)
      }
    }
  }
})

export const { remove, edit, swapFavorite, register } = contactSlice.actions

export default contactSlice.reducer
