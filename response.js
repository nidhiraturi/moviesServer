var success= function(response,res) {
return	 res.json({
    success:true,
    status:200,
    message:"GET request",
    body: response,
    
})
};


var error1=function(error,res)
{
    return res.json({
    success:false,
    message:"not found and is empty ",
    body:error
    
    });
}
module.exports={error1,success}