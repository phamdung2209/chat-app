import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies._auth
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                error: 'Unauthorized - Invalid token',
            })
        }

        const user = await User.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        req.user = user

        next()
    } catch (error) {
        console.log('Error in protectRoute middleware: ', error.message)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default protectRoute
