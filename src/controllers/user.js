const {userService} = require('../services');

const creatUser = (req, res) =>{
try {
    const newUser = userService.createUser(req.body);
   req.json(newUser);
} catch (err) {
    res.status(400).json({
        action:'creatUser',
        error: err.message});

}
};

const getUser = (req, res) =>{

};

module.exports = {creatUser, getUser};