const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');


router.post('/',userController.creatUser);
router.get('/:userId',userController.getUser);
router.post('/:userId/ticket',userController.createTicket);
 

module.exports = router;