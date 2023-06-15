const fs= require('fs');
fs.readFile('package.json','utf-8',(err,data)=>{
    if(err) console.error('Thera was a error',error);
    console.log('Data:\n',data);
})

const data = fs.readFileSync('package.json','utf-8');
console.log("Data Sync:\n", data);