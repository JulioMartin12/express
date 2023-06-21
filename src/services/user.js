const { constant } = require('lodash');
const {userProvider} = require('../providers');

const createUser = async(user) =>{
   return await userProvider.createUser(user);

};

const getUser = async(userId) =>{
    const user = await userProvider.getUser(userId);
    if(user){
    // Lógica de negocio
    console.log(user.firstName)
    }
        return user;
    
 };

 const createTicket = async(userId,ticket) =>{
    const user = await userProvider.getUser(userId);
      if(user){
        const newTicket = await userProvider.createTicket(userId,ticket);
  return newTicket;
    }
  
        return null;
    
 };



module.exports = {createUser, getUser, createTicket};
