import express from 'express'
import { loginUser, logoutUser, signupUser, authMe } from '../controller/auth.controller.js'

const router = express.Router()

router.get('/me', authMe)

router.post('/signup', signupUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

export default router
