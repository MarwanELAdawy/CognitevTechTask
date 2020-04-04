const petRoutes = (app,fs)=>{
    const dataPath = './data/pet.json';

    const readFile = (callback,returnJson=false,filePath=dataPath,encoding='utf8')=>{
        fs.readFile(filePath,encoding,(err,data)=>{
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData,callback,filePath=dataPath,encoding='utf8')=>{
        fs.writeFile(filePath,fileData,encoding,(err)=>{
            if (err) {
                throw err;
            }
            callback();
        });
    };
    
    app.get('/pets',(req,res)=>{
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
    app.post('/pets',(req,res)=>{
        readFile(data=>{
            const newUserId = Object.keys(data).length+1;

            data[newUserId] = JSON.parse(req.body.data);
            
            writeFile(JSON.stringify(data,null,2),()=>{
                res.status(200).send('new pet added');
            });
        },true);
    });
};
module.exports = petRoutes;