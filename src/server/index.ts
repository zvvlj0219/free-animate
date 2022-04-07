import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api', (req: express.Request, res: express.Response) => {
  res.send({ result: 'youtube' })
})

// handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(path.resolve(__dirname)))
  // handle spa
  app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, '/index.html'))
  })
}

app.listen(5000, () => {
  console.log(
    `NODE_ENV is ${
      process.env.NODE_ENV === 'production'
        ? 'production'
        : 'development'
    }
    server running port 5000`
  )
})

// $set NODE_ENV=production
