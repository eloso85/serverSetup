const db = require('./models')

db.sequelize.sync().then(function(){
    console.log('this Worked')
})
// var express = require ("express")

// //Sets up the Express App
// var app = express();
// var PORT = process.env.PORT || 8080;// process.env.port or 8080 this is just in case your hosting web app on a service like heroku and they may independently set the enviorment 

// //sets up the express app to handle data parsing.
// app.use(express.urlencoded({ extended:true }));
// app.use(express.json());

// //static directory
// app.use(express.static("public"));

// app.get('/', (req,res)=>{
//     res.send('Hello World1')
// })

// app.listen(PORT, ()=>{
//     console.log(`Example app listening at http//localhost:${PORT}`)
// })

//npm init-y
//npm install mysql2
//npm install sequelize
//npm --sve-dev sequelize-cli
//npx sequelize init