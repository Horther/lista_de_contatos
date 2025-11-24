import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filter'
import { saveContactsMiddleware } from './middleware/saveContactMiddleware'

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveContactsMiddleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
