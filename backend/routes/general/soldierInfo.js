const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/soldierInfo');

// find spec 
router.get('/soldierInfo/:id', findById)
//find all
router.get('/soldierInfo', find)
//add 
router.post('/soldierInfo',create); /**/ 
//update 
router.put('/soldierInfo/:soldierInfoId', update)
//delete 
router.delete('/soldierInfo/:id', remove )

module.exports = router;