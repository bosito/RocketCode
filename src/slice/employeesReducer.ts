import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {

}

const initialState: CounterState = {

};


export const employessSlice = createSlice({
    name: 'employess',
    initialState,
    reducers: {

    }
});

export const { } = employessSlice.actions;


export default employessSlice.reducer;