const express=require('express')
const bodyparser=require('body-parser')
// connection with database
const connectDB=require('./DB/connectDB')
// Routes
const userRoutes=require('./Routes/User')
const recordRoutes=require('./Routes/DnsRecord')
// dotenv import
require('dotenv').config();
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

connectDB();

app.use('/users', userRoutes);
app.use('/record', recordRoutes)

app.listen(4000,()=>{
    console.log("connected to port");
})