const express = require('express')
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionctrl')

const router = express.Router()

router.post('/add-transection',addTransaction)

router.post('/edit-transection',editTransaction)

router.post('/delete-transection',deleteTransaction)

router.post('/get-transection',getAllTransaction)

module.exports = router