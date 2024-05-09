import { createSlice } from "@reduxjs/toolkit";


const Slice=createSlice({
    name:"edit",
    initialState:{
        arr:[]
    },
    reducers:{
        handleArr:(state,action)=>{
            state.arr=action.payload
        }
    }
})

export default Slice.reducer
export const {handleArr}=Slice.actions