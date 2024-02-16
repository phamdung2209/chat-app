import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

import * as authService from '../../services/authService'

let data = {}

const fetchData = async () => {
    try {
        const res = await authService.authMe()
        if (res.error) throw new Error(res.error)
        data = res
        return res
    } catch (error) {
        console.log('Error in fetchData redux', error.message)
        return {}
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState: {
        auth: !_.isEmpty(await fetchData()),
        data: data,
    },
    reducers: {
        login: (state, action) => {
            state.auth = true
            state.data = action.payload?.data
        },

        logout: (state) => {
            state.auth = false
            state.data = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions
export default auth.reducer
