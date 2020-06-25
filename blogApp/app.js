const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const app = express()
const admin = require("./routes/admin")
const path= require("path")
const mongoose = require('mongoose')
const session = require("express-session");
const flash = require("connect-flash")
//configuracoes
    //sessao
    app.use(session({
        secret: 'cursodenode',
        resave: true,
        saveUninitialized:true
    }));
    app.use(flash())
    //middleware
        app.use((req, res, next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    //bodyparser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    //handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars');
    //mongoose
    mongoose.Promise=global.Promise;
    mongoose.connect("mongodb://localhost/blogapp", { useNewUrlParser: true, useUnifiedTopology: true  }).then(()=>{console.log("conectado ao mongo")}).catch((err)=>{console.log("erro ao se conectar: "+err)})
    //public
        app.use(express.static(path.join(__dirname,"public")))

        app.use((req,res,next)=>{
            console.log("OI EU SOU UM MIDDLEWARE")
            next();
        })
//rotas
    app.use('/admin', admin)
//outros
const PORT=8081;
app.listen(PORT, ()=>{
    console.log("servidor rodando")
})