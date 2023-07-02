const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
 
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
//->test route
app.use("/api/v1/test", require("./routes/testRoutes"));

//port
const PORT= process.env.PORT || 8080;
 app.listen(PORT,()=>{
    console.log(`Node Server running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
    .bgBlue.white
    );
 })