import jwt from 'jsonwebtoken'

const protectRoute = (req, res, next) => {
    try {
        const token = req.cookie._auth
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided' })
        }
    } catch (error) {
        console.log('Error in protectRoute middleware: ', error.message)
        res.status(500).json({ error: 'Internal server error' })
    }
}
