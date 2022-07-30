import { createSlice } from '@reduxjs/toolkit';

/**
 * @interface CounterState
 * @description esta interface es para tipar el estado inicialde la aplicacion y se exporta para poder acceder a este tipado
 * en otro loado.
*/

export interface CounterState {

}

/**
 * @objet initialState
 * @description este objeto es para agregar todo el estado inicial que deve tener a aplicacion
*/

const initialState: CounterState = {

};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    }
});

/**
 * @function actions
 * @description en este objeto sa manda todoa los metodos de los reducers para su posterior uso 
 */

export const { } = registerSlice.actions;


export default registerSlice.reducer;