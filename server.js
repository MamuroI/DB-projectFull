const express = require('express');
const cors = require('cors');
const colors = require('colors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoute = require('./Routes/AuthRoute');
const reserveRoute = require('./Routes/ReserveRoute');

app.use('/auth',authRoute);
app.use('/reserve',reserveRoute);

app.listen(5000,console.log(`Server is running`.green.bgMagenta));