const express = require('express')
const morgan = require('morgan')
const app = express()

const router = express.Router()
const numbercontroller = require('./../controllers/numbercontroller')
app.use(morgan('dev'))
app.use(express.json())

router.get('/:numberid',numbercontroller.getnumbers)
module.exports = router

