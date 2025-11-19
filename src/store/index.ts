import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filter'
const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
