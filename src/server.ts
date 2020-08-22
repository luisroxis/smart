import express from 'express'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(Routes)

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
