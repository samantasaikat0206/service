const mongoose = require ("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required..."]
    },
    email:{
        type:String,
        unique:[true, " Email already Exists..."],
        required: [true, " Email is Required..."]
    },
    password:{
        type: String,
        required:[true,"Password is Required..."]
    },
    role:{
        type:String,
        enum:["Admin", "Technician", "Store Worker"]
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel