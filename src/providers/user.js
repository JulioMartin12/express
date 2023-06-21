const {User, Ticket} = require('../models');
const createUser = async (user) => {
    try {
      const newUser = User.create(user)
    return newUser;
    } catch (err) {
        console.error("Error when creating User",err);
        throw err;
        
    }
};

const getUser = async (userId) => {
    try {
      const user = User.findByPk( userId, { include:{ all:true}})
    return user;
    } catch (err) {
        console.error("Error when feching User",err);
        throw err;
        
    }
};


const createTicket = async (userId) => {
    try {
      const newTicket = Ticket.create( {...Ticket, UserId: userId})
    return newTicket;
    } catch (err) {
        console.error("Error when feching Ticket",err);
        throw err;
        
    }
};

module.exports = {createUser, getUser, createTicket};

