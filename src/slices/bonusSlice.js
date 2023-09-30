import { createSlice,createAction } from '@reduxjs/toolkit'
// import { useSelector,useDispatch } from 'react-redux'

const initialState = {
  points: 10,
}

const incrementByAmount = createAction('account/incrementByAmount');

// const amount = useSelector(state=>state.account.amount)
export const bonusSlice = createSlice({
   
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.points += 1 //immer
        },
    extraReducers:(builder)=> {
            console.log(builder)
        builder.addCase(incrementByAmount,(state,action)=>{
            console.log(action)
            if(action.payload>=100){
                state.points += 1;
            }

        })

    }
    
    
  },
})


// Action creators are generated for each case reducer function
// these names should be same as cases  in reducer see above
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer