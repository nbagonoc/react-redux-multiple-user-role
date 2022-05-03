import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import jwt_decode from 'jwt-decode'
const lStorage = JSON.parse(localStorage.getItem('user'))
const payload = lStorage ? jwt_decode(JSON.parse(localStorage.getItem('user'))) : null
const user = payload !== null ? { name: payload.name, role: payload.role, token: lStorage } : null

const initialState = {
    user: lStorage ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        return await authService.register(data)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        return await authService.login(data)
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const test = createAsyncThunk('auth/test', async (thunkAPI) => {
    try {
        return await authService.test()
    } catch (error) {
        const message = error.message
        return thunkAPI.rejectWithValue(message)
    }

})

export const authSlice = createSlice({
    name: 'auth',
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
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})
export const { reset } = authSlice.actions
export default authSlice.reducer