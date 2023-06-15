const logging = (req,res, next)=>{
    console.log(`call made to source ${req.url} with method ${req.method}`);
    req.user={ name:"Julio"};
    next();
};

module.exports = logging;