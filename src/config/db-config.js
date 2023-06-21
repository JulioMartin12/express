const {Sequelize} = require('sequelize');

//Instanciamos la base de datos
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
});
//Método para inicializar la base de dato
const initializeDB = async () => {
    try {
        await sequelize.authenticate();// Para saber si la conexion es exitosa
        console.log("Conexión a la base de datos establecida.");
        await sequelize.sync({force: false})

    } catch (error) {
        console.log("Hubo un error al inicializar la base de datos")
        
    }
};

module.exports = {sequelize, initializeDB};