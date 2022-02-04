import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../configureStore'
import initialState from '../initialState'

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  list: Category[];
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState().categories as CategoryState,
  reducers: {}
})

export const selectCategories = (state : RootState) => state.categories.list

export default categoriesSlice.reducer
