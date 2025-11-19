import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  category: string
  filter: 'friend' | 'family' | 'work' | 'favorite' | 'all'
}

const initialState: FilterState = {
  category: '',
  filter: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    changeFilter: (
      state,
      action: PayloadAction<'friend' | 'family' | 'work' | 'favorite' | 'all'>
    ) => {
      state.category = action.payload
    }
  }
})

export default filterSlice.reducer
export const { changeCategory, changeFilter } = filterSlice.actions
