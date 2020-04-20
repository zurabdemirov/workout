import {createAction, createReducer} from '@reduxjs/toolkit'

interface initialState {
    loading: boolean;
    user: {
        name: string;
        email: string;
    };
}

export const startLoading = createAction<boolean, 'startLoading'>('startLoading')
export const stopLoading = createAction<boolean, 'stopLoading'>('stopLoading')
export const updateUser = createAction<object, 'updateUser'>('updateUser')

const initialState: initialState = {
    loading: false,
    user: {
        name: '',
        email: '',
    },
};

const exampleReducer = createReducer(initialState, {
    [startLoading.type]: (state, action) => {
        const loading = action.payload
        return {...state, loading}
    },
    [stopLoading.type]: (state, action) => {
        const loading = action.payload
        return {...state, loading}
    },
    [updateUser.type]: (state, action) => {
        const user = action.payload
        return {...state, user}
    },
})

export default exampleReducer;
