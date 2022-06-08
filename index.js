const express = require('express');
const app =express();
// const seedDB=require('./seed');

const path=require('path');
const methodOverride = require('method-override')
const productRoutes=require('./routes/product');
app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,'/views'));
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
const Product=require('./models/product');
// app.get('/', (req,res)=>{
    //     res.send("connected");
    // })
    mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(()=>{
        console.log("DB connected");
    })
    .catch(err=>{
        console.log("error in connecting to DB");
        console.log(err);
    });


// seedDB();
app.use(productRoutes);

app.listen(3000, ()=>{
    console.log("server running on port 3000");
})