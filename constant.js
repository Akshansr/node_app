 const appdata={
    companyName:"Myapp",
    uri:"mongodb://myapp:Anusha450@ds249035.mlab.com:49035/myapp",
    // uri:"mongodb://localhost:27017/myapp",
    emailaddress:{
        user: 'myapp4354@gmail.com',
        pass: 'Anusha450@'
    },
    get forgotPwdContent(){
        return "You recently requested to reset your "+this.companyName+" account password."
    },
    forgotURL:"http://localhost:3000"
}
module.exports=appdata;
