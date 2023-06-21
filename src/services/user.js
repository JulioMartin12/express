const {userProvider} = require('../providers');

const createUser = (user) =>{
    userProvider.createUser(user);

};

module.exports = {createUser};
