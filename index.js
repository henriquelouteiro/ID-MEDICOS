const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize  = require('sequelize')
const mysql = require('mysql')
const sql = require('./db/request')

/* TEMPLATE ENGINE */
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    app.use(express.static('public'))

app.get('/buscar', (req,res)=>{
    
    res.render('formulario')
})


app.get('/lista', async(req,res)=>{

    let medicos = await sql.dbSelectPACS(req.query.nome)
 
    res.render('lista',{dados:medicos.rows})
})


app.listen(8081, ()=>{
    console.log("URL 192.168.100.78:8081")
})