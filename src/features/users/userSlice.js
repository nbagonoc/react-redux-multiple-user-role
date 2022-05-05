import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService'

const initialState = {
    user: {},
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const get = createAsyncThunk('user/get', async (param, thunkAPI) => {
    try {
        return await userService.get(param)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAll = createAsyncThunk('user/getAll', async (thunkAPI) => {
    try {
        return await userService.getAll()
    } catch (error) {
        // console.log(error)
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(get.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = userSlice.actions
export default userSlice.reducer