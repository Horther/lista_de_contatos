import { Middleware } from '@reduxjs/toolkit'

export const saveContactsMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action)
    // só persiste quando ações do slice "contatos" forem executadas
    const typed = action as { type: string }
    if (typed.type.startsWith('contatos/')) {
      const state = store.getState()
      if (state.contatos?.itens) {
        localStorage.setItem('contatos', JSON.stringify(state.contatos.itens))
        console.log(state.contatos.itens)
      }
    }

    return result
  }
