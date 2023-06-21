const {userService} = require('../services');

const creatUser = async (req, res) =>{
try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
} catch (err) {
    console.log("aca se produjo el error");
    res.status(500).json({action: 'createUser', error: err.message})

}

};

const  getUser = async(req, res)=>{
    try {
        const user = await userService.getUser(req.params.userId);
         if(!user){
            res.status(404).json({action: 'getUser', error:'User Not found'})
    
         }else{

             res.json(user);
         }
    } catch (err) {
      res.status(500).json({action: 'getUser', error: err.message})
    
    }
};


const  createTicket = async(req, res)=>{
    try {
        const user = await userService.createTicket(req.params.userId, req.body);
         if(!user){
            res.status(404).json({action: 'getUser', error:'User Not found'})
    
         }else{

             res.json(user);
         }
    } catch (err) {
      res.status(500).json({action: 'getUser', error: err.message})
    
    }
};

module.exports = {creatUser, getUser, createTicket};