const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');


router.post('/',userController.creatUser);

 module.exports = router;