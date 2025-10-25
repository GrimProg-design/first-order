import express from 'express'
import cors from 'cors'
import { printUsersToConsole } from './controllers/usersControllers.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send(printUsersToConsole())
})

printUsersToConsole()

app.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'))