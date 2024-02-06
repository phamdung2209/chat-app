import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import connectDB from './config/connectDB.js'
import messageRoutes from './routes/message.routes.js'

dotenv.config()

const app = express()
app.use(express.json()) // for parsing application/json req.body
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
    connectDB()
    console.log(`Server at http://localhost:${PORT}`)
})
