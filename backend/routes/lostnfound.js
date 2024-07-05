const express = require('express');
const {handleGetItems,handleAddItem} = require('../controllers/lostnfound')
const router = express.Router();

router.get('/items', handleGetItems);
router.post('/add', handleAddItem)



module.exports = router;