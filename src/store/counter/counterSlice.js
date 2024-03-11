import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 100 }

export const counterSlice = createSlice({


  
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
     
      state.value++;
    },
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer