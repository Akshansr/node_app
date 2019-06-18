exp=require("express")
mj=require("mongojs")
var ObjectId = require('mongodb').ObjectID;
const appdata=require("../constant");

conn=mj(appdata.uri)

rout=exp.Router()

rout.post('/productDetails',function(req,res){
    data=req.body
    console.log("productView",data._id)
    // if(typeof(data._id) == 'object'){
    //     id=ObjectId(data._id)
    // }else{
    //     id=data._id
    // }
    conn.productdata.find({_id:ObjectId(data._id)},function(err,result){
        console.log(result)
        res.send(result)
    });
    // res.send("complited")
})


module.exports=rout;