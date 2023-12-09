import { configureStore, createSlice } from '@reduxjs/toolkit';


export const login = createSlice({
    name:'login',
    initialState: "",
    reducers: {
        login: (state:any, actions) => {
            return actions.payload
        },
        logout: (state:any) => {
            return ""
        }
    }
})



export const store = configureStore({
    reducer:{
        login: login.reducer,
    }
});