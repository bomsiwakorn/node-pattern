const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 5000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/auth', require("./routes/auth"))

app.listen(PORT, () => console.log(`Server is started node. Port ${PORT}`))


