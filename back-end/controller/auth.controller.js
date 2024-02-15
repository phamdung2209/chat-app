import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import generateJWT from '../utils/generateJWT.js'
import { hashPassword } from '../config/hassPassword.js'
import User from '../models/user.model.js'

export const authMe = async (req, res) => {
    try {
        const { _auth: token } = req.cookies

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.json({
                error: 'Unauthorized - Invalid token',
            })
        }

        const user = await User.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        return res.status(200).json(user)
    } catch (error) {
        console.log('Error in AuthMe controller', error.message)
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password ?? '')

        if (!user || !isPasswordCorrect) {
            return res.json({ error: 'Invalid username or password' })
        }

        // generate jwt
        generateJWT(user._id, res)

        return res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log('Error in LoginUser controller', error.message)
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const logoutUser = (req, res) => {
    try {
        res.clearCookie('_auth')
        return res.status(200).json({ message: 'User logged out' })
    } catch (error) {
        console.log('Error in LogoutUser controller', error.message)
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export const signupUser = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Password do not match' })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.json({ error: 'User already exists' })
        }

        // hash password
        const hashedPassword = await hashPassword(password)

        // https://avatar.iran.liara.run/public/boy?username=[value]
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        })

        if (newUser) {
            // generate jwt
            generateJWT(newUser._id, res)
            await newUser.save()

            return res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
            })
        }
        return res.status(400).json({ error: 'Invalid user data' })
    } catch (error) {
        console.log('Error in LoginUser controller', error.message)
        return res.status(500).json({ error: 'Internal server error' })
    }
}
