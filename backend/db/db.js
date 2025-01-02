const mongoose = require("mongoose");

const connectToDB =()=>{
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("connected to DB")
    }).catch(err=>console.log(err))
}
module.exports = connectToDB