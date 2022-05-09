import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

// load .env
dotenv.config()

// init app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type']
}
app.use(cors(corsOptions))

app.get('/api', (req: Request, res: Response) => res.send({ result: 'ok' }))

// handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(path.resolve(__dirname)))
  // handle spa
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`NODE_ENV is ${String(process.env.NODE_ENV)}`)
  console.log(`server running port 5000 at http://localhost:${port}`)
})
