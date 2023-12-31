// Traemos express , con esto no hacemos nada.
const express = require('express')
const PORT = 8090;

const { bookRouter, userRouter } = require('./routes');
//tenemos que construir la aplicación, instanciamos la aplicación
const app = express();
const bookFile = 'book.json';
const {loggingMdw} = require('./middleware');
const {initializeDB}= require('./config/db-config')


//Es para que use un middleware
app.use(express.json());

app.use(loggingMdw);

app.use('/book',bookRouter);
app.use('/user',userRouter);


app.get('/',(req,res)=>{
    console.log("User",req.user);
 res.send('<h1>Hello Word</h1>');
/*  fs.readFileSync("book.json", JSON.stringify(req.body));
 res.send(req); */
}); 


   
const errorHandler = (err, req, res, next)=> {
    if(err.message === 'File Exists'){
        res.status(500);
        res.json({message:`File ${bookFile} exists`});
    }else{
        res.status(500);
        res.json({message: err.message});
        res.send(err);
    
    }
}

app.use(errorHandler);

app.listen( PORT, async()=> {
   await initializeDB()
    console.log( `Server running in ${PORT}`);
});
