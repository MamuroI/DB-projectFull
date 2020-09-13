const express = require('express');
const mysql = require('mysql');
const colors = require('colors');

const app = express.Router();

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'omakase'
})

con.connect((err,resp)=>{
    if(err)throw err;
    console.log(`Database in AUTH_ROUTE is connecting`.green.bgMagenta);
})

app.get('/get_user/:id',(req,res)=>{

    const id = req.params.id;

    con.query(`select * from customers where (Customer_id='${id}')`,(err,resp)=>{
        res.json(resp[0]);
    })
})

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    
    con.query(`select Customer_id,C_Name from customers where(C_Username='${username}' and C_Password='${password}')`,(err, resp) => {
        console.log('log',resp)
        if(resp.length>0){
            res.json({
                auth:true,
                id:resp[0].Customer_id,
                name:resp[0].name
            })
        }else{
            res.json({
                auth:false
            })
        }
    });

});

app.post("/signup", (req, res) => {
    const { username, password, tel, name, email } = req.body;
    
    con.query(`insert into customers(C_Name,C_Email,C_TelNo,C_Username,C_Password) 
    values('${name}','${email}','${tel}','${username}','${password}')`,(err, resp) => {
        console.log(resp.insertId)
        res.json({
            auth:true,
            id:resp.insertId
        })
    });
});

app.post('/hasUsername',(req,res)=>{

    const {username} = req.body;

    con.query(`select * from customers where (C_Username='${username}')`,(err,resp)=>{
        if(resp.length>0){
            res.json({
                has:true
            })
        }else{
            res.json({
                has:false
            })
        }
    })

})

app.post('/hasEmail',(req,res)=>{
    const {email} = req.body;

    con.query(`select * from customers where (C_Email='${email}')`,(err,resp)=>{
        if(resp.length>0){
            res.json({
                has:true
            })
        }else{
            res.json({
                has:false
            })
        } 
    })

})

module.exports = app;
