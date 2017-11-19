var md5 = require('md5');
var passwordEncryption=function(password)
{ 
   
    return md5(password);
}
module.exports={passwordEncryption};