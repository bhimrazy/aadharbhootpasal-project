// if(process.env.NODE_ENV !== 'production'){ 
//     require('dotenv') }
    
const express=require('express')
const app=express()
const expressLayouts =require('express-ejs-layouts')
const mongoose =require('mongoose')

const indexRouter = require('./routes/index')

// mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser:true
// })
// const db =mongoose.connection
// db.on('error',error => console.error(error))
// db.once('open',()=>console.log('Connected to Mongoose'))




mongoose.connect('mongodb://localhost:27017/aadharbhootpasal-projec',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB Connected');

    }else{
        console.log('error:'+err);

    }
});








app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','/layouts/layout')
app.set(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)

app.listen(process.env.PORT || 3000)