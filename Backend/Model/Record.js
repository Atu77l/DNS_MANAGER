const { express } = require('express');
const mongoose=require('mongoose');

const record=mongoose.Schema(
    {
        type:{
            type:String
        },
        value:{
            type:String
        }
    }
);

module.exports=new mongoose.model('record',record);