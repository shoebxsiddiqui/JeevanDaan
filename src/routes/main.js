const express=require('express')
const routes=express.Router()

routes.get("/", (req, res)=>{
    res.render("index")
})
routes.get("/index", (req, res)=>{
    res.render("index")
})
routes.get("/about", (req, res)=>{
    res.render("about")
})
routes.get("/doctors", (req, res)=>{
    res.render("doctors")
})
routes.get("/blog", (req, res)=>{
    res.render("blog")
})
routes.get("/contact", (req, res)=>{
    res.render("contact")
})
routes.get("/login", (req, res)=>{
    res.render("login")
})
routes.get("/appointment", (req, res)=>{
    res.render("appointment")
})
routes.get("/blog-details", (req, res)=>{
    res.render("blog-details")
})
routes.get("/SignIn", (req, res)=>{
    res.render("SignIn")
})

module.exports=routes;