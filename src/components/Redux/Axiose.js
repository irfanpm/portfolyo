import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    data: [],
    error: null, 
  };

export const portfolioData = createAsyncThunk(
    'get/fetchData',
    async ()=>{
        const res = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")  
        return res.data
    }
)
const portfolioDataSlice = createSlice({
    name: 'fetchData',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(portfolioData.pending,(state) => {
          state.loading = true;
          state.error = null; 
        })
        .addCase(portfolioData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null; 
        })
        .addCase(portfolioData.rejected, (state, action) => {
          state.loading = true;
          state.data = [];
          state.error = action.error.message;
        });
    },
  });
  export default portfolioDataSlice.reducer;