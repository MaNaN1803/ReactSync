import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: 'incdec',
    initialState: 10,
    reducers: {
        INC : (state,action)=>{
            return state= state +1;

        },
        DEC : (state,action)=>{
            return state= state -1;

        }
    }

})

export const {INC,DEC} = incdecSlice.actions;
export default incdecSlice.reducer;