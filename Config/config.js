const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.DB)

}
module.exports=connect;