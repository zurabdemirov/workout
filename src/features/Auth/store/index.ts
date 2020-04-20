import {createAction, createReducer} from '@reduxjs/toolkit'

interface initialState {
    loading: boolean;
}

export const startLoading = createAction<boolean, 'startLoading'>('startLoading')
export const stopLoading = createAction<boolean, 'stopLoading'>('stopLoading')
const initialState: initialState = {
    loading: false,
};
const exampleReducer = createReducer(initialState, {
    [startLoading.type]: (state, action) => {
        const loading = action
        return {...state, loading}
    },
    [stopLoading.type]: (state, action) => {
        const loading = action
        return {...state, loading}
    }
})
export default exampleReducer;
