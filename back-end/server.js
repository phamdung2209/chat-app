import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectDB from './config/connectDB.js'

dotenv.config()

const app = express()
app.use(express.json()) // for parsing application/json req.body

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
    connectDB()
    console.log(`Server at http://localhost:${PORT}`)
})
