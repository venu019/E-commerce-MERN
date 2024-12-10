import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isAuthenticated: false,
    isLoading:false,
    user:null
}

const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers :{
        setUser:(state,action)=>{
            state.isAuthenticated = true;
            state.user = action.payload;
        },
    }
})

export const{setUser} = authslice.actions;
export default authslice.reducer;