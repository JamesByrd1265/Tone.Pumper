const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8000

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname))
app.use(express.static('./public'))
app.use(express.json())



app.use((req, res, next) => {
	res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
	console.log(err.stack)
	res.status(500).send(err)
})

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))