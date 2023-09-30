import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
// const decrement = createAction('counter/decrement')
// const incrementByAmount = createAction('counter/incrementByAmount')

const initialState = { points: 99 }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
   
})
export default rewardReducer;