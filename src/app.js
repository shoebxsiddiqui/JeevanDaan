const express=require("express")
const hbs=require('hbs')
const app=express()
const mongoose=require("mongoose")
const routes=require('./routes/main')

app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/JeevanDaan", ()=>{
    console.log("db connected")
})

app.listen(process.env.PORT | 5556, ()=>{
    console.log("server started")
})