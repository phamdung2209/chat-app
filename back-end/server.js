import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectDB from './config/connectDB.js'
import { app, server } from './socket/socket.js'

dotenv.config()

app.use(express.json()) // for parsing application/json req.body
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT ?? 8080

server.listen(PORT, () => {
    connectDB()
    console.log(`Server at http://localhost:${PORT}`)
})
