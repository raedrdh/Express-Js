const close=(req,res,next)=>{
    let dat=new Date()

    let day = dat.getDay();
    let hours =dat.getHours(); 

    if(day==0||day==6||hours<9||hours>17){
        res.send("we are closed")
    }
    else {
        next();
    }
}
    module.exports=close