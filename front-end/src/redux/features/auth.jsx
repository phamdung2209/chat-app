import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast'
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
        console.log('Error fetching data in auth redux:', error.message)
        // toast.error(error.message)
        return {}
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState: {
        auth: _.isEmpty(await fetchData()) ? false : true,
        data: data,
    },
    reducers: {
        login: (state, action) => {
            state.auth = true
            // state.token = action.payload.token
            state.data = action.payload?.data
        },

        logout: (state) => {
            state.auth = false
            // state.token = ''
            state.data = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions
export default auth.reducer
