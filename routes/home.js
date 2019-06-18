exp=require("express")
mj=require("mongojs")
const appdata=require("../constant");

conn=mj(appdata.uri)

rout=exp.Router()

rout.get('/getdata',function(req,res){
    console.log("getdata")
    conn.productdata.find(function(err,result){
        res.send(result)
        console.log(result)
    });
    // res.send("complited")
})

rout.post('/getUserInfo',function(req,res){
    dt=req.body
    console.log("getdata")
    conn.users.find({username:dt.username},{password:0},function(err,result){
        res.send(result)
        console.log(result)
    });
    // res.send("complited")
})

module.exports=rout;