import express from 'express'

const app = express()
app.use(express.json())

app.listen(5005, () => {
    console.log("http://localhost:5005")
})