import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT || 3000
console.log('>>> Check port: ', port)

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`I'm Noblesse KJ`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})