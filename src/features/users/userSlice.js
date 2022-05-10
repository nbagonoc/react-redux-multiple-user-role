import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService'

const initialState = {
    selectedUser: {},
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const view = createAsyncThunk('user/view', async (param, thunkAPI) => {
    try {
        return await userService.view(param)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAll = createAsyncThunk('user/getAll', async (thunkAPI) => {
    try {
        return await userService.getAll()
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const update = createAsyncThunk('user/update', async (data, thunkAPI) => {
    try {
        return await userService.update(data)
    } catch (error) {
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
            .addCase(update.pending, (state) => {
                state.isLoading = true
            })
            .addCase(update.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(update.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(view.pending, (state) => {
                state.isLoading = true
            })
            .addCase(view.fulfilled, (state, action) => {
                state.selectedUser = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(view.rejected, (state, action) => {
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