const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/soldierEvaluation');

// find spec 
router.get('/soldierEvaluation/:id', findById)
//find all
router.get('/soldierEvaluation', find)
//add 
router.post('/soldierEvaluation',create); /**/ 
//update 
router.put('/soldierEvaluation/:id', update)
//delete 
router.delete('/soldierEvaluation/:id', remove )

module.exports = router;