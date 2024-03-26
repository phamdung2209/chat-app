import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectDB from './config/connectDB.js'
import { app, server } from './socket/socket.js'

dotenv.config()
const __dirname = path.resolve()
const PORT = process.env.PORT ?? 8080

app.use(express.json()) // for parsing application/json req.body
app.use(cookieParser())
app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

// Serve static assets if in production
app.use(express.static(path.join(__dirname, './front-end/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './front-end/dist/index.html'))
})

server.listen(PORT, () => {
    connectDB()
    console.log(`Server at http://localhost:${PORT}`)
})
