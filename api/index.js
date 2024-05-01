const express = require('express')
const cors = require('cors')
const booksData = require('./data/booksDataApi.json')

const app = express()

app.use(cors())

app.get('/random-book', (req, res) => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const data = booksData[randomIndex]

    res.json(data)
})

app.get('/random-book-delay', (req, res) => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const data = booksData[randomIndex]
    setTimeout(() => {
        res.json(data)
    }, 3000)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

