const express = require('express');
const mysql = require('mysql');
const colors = require('colors');

const app = express.Router();

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'omakase',
    multipleStatements:true
})

con.connect((err,resp)=>{
    if(err)throw err;
    console.log(`Database in RESERVE_ROUTE is connecting`.green.bgMagenta);
})

app.get('/getReservationList',(req,res)=>{
    con.query(`select * from trip_detail`,(err,resp)=>{
        res.json(resp);
    })
})

app.post('/InsertTrip',(req,res)=>{
    const {name,desp,date,price} = req.body;
    const sql = `insert into trip_detail(T_name,T_description,T_date,T_price) values('${name}','${desp}','${date}','${price}')`;
    con.query(sql,(err,resp)=>{
        console.log(resp);
    })
})

app.get('/DeleteTrip/:id',(req,res)=>{
    con.query(`delete from trip_detail where(Trip_id='${req.params.id}')`,(err,resp)=>{
        console.log(resp);
    })
})

app.post('/OrderTrip',(req,res)=>{

    const {c_id,t_id,seat,sumSeat} = req.body;
    let sql = `insert into account(Customer_id,Trip_id) values(${c_id},${t_id})`;
    for(let i = 0;i<seat-1;i++){
        sql += `,(${c_id},${t_id})`;
    }
    con.query(sql,(err,resp)=>{
        console.log(sql,resp)
    })
    con.query(`update trip_detail set T_seat = ${sumSeat} where Trip_id = ${t_id};`,(err,resp)=>{
        console.log(resp)
    })
})

app.get(`/account_trip/:id`,(req,res)=>{
    const sql = `select * from account inner join trip_detail on account.Trip_id = trip_detail.Trip_id where(Customer_id = ${req.params.id})`
    con.query(sql,(err,resp)=>{
        res.json(resp);
    })
})

module.exports = app;