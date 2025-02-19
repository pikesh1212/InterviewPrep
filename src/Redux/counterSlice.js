import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const initialState={
    count:0,
    users:[],
    loading: false
}


export const fetchUsers = createAsyncThunk("counter/fetchUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  });
  
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
          state.error = action.error.message;
        });
        builder.addCase(fetchUsers.pending, (state, action) => {
          state.loading = true;
        })
      }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;