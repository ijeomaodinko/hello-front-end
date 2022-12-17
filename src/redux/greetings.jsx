import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = []

const FETCH_GREETING = 'FETCH_GREETING';
const apiUrl = 'http://127.0.0.1:3001/api/v1/greetings'

// eslint-disable-next-line
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case `${FETCH_GREETING}/fulfilled`:
      return [...state, action.payload]
    default: return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch(apiUrl);
  const result = await response.json();
  //console.log(result);
  return result;
});


export default greetingReducer;
