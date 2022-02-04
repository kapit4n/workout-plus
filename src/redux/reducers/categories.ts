import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../configureStore'
import initialState from '../initialState'

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  list: Category[];
  selectedCategory: string;
}

export interface ActionCategory {
  payload: string
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState().categories as CategoryState,
  reducers: {
    selectCategory: (state, action: ActionCategory) => {
      state.selectedCategory = action.payload
    },
  },
})

export const selectCategories = (state : RootState) => state.categories.list
export const selectSelectedCategory = (state : RootState) => state.categories.selectedCategory

export const { selectCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
