const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
   fullName:{
    firstName:{
        type:String,
        required:true,
        minlength:[3,'first name must be at least 3 char..']
    },
    lastName:{
       type:String,
       required:true,
       minlength:[3,'last name must be at least 3 char..']
    },
   },
   email:{
    type:String,
    required:true,
    unique:true,
    minlength:[5,'Email must be at 5 characters']
   },
   password:{
    type:String,
    required:true
   },
   socketId:{
     type:String
   }
})

// module.exports = userSchema

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id},process.JWT_SECRET)
    return token
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}
const userModel  = mongoose.model('user',userSchema)
module.exports = userModel;