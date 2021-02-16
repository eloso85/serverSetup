var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

db
.sequelize
.sync()
.then(()=>{
    app
    .listen(PORT, ()=>{
        console.log("App listening on Port" + PORT)
    })
})






// const db = require('./models')

// async function run(){

//     await db.sequelize.sync();//create table if it dont exist

//     const pushArray = []

//      pushArray.push(db.Task.create({
//         text:"remeber await async and what it is for",
//         complete:true
//     }));//insert rows

//     pushArray.push(db.Task.findAll())// get rows

//     const result = await Promise.all(pushArray);
//     const rows = result[1]

//     console.log(JSON.stringify(rows,null,2));
// }

// run();

//db.sequelize.sync().then(function(){
//     console.log('this Worked')

//     db
//     .Task
//     .destroy({
//         where:{
//             id:1
//         }
//     }).then(data => console.log(data))

    // db
    // .Task
    // .create({
    //     text: "Make Sequelize work",
    //     complete:1
    // }).then(function(data){
    //     console.log(data);
    // })

    // db
    // .Task
    // .findAll()
    // .then(data=>console.log(JSON.stringify(data,null,2)));//

//     db
//     .Task
//     .update({
//         text:"Make Updates Work"
//     },{
//         where:{
//             id:1
//         }
//     })
// .then(data =>  console.log(data))

//});


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