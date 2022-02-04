import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../configureStore'
import initialState from '../initialState'

export interface SprintInterval {
  value: number;
}

export interface SprintIntervalsState {
  list: SprintInterval[];
  counter: number;
}

export interface ActionSprintInterval {
  payload: number
}

export const sprintIntervalsSlice = createSlice({
  name: 'sprintIntervals',
  initialState: initialState().sprintIntervals as SprintIntervalsState,
  reducers: {
    addCounter: (state, interval: ActionSprintInterval) => {
      state.counter +=  interval.payload
    }
  }
})

export const selectSprintIntervals = (state : RootState) => state.sprintIntervals.list
export const selectCounter = (state : RootState) => state.sprintIntervals.counter

export const { addCounter } = sprintIntervalsSlice.actions

export default sprintIntervalsSlice.reducer
