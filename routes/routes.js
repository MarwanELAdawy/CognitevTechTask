const petRoutes = require('./pets');


const appRouter = (app,fs)=>{

    app.get('/',(req,res)=>{
        res.send('welcome to the development api-server');
    });


    petRoutes(app,fs);
    
};
module.exports = appRouter;