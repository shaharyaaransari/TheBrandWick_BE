const mongoose = require("mongoose")

  const UserScehma = mongoose.Schema({
       name:{type:String,require:true},
       username:{type:String,require:true},
       email:{type:String,require:true},
       phone:{type:Number,require:true},
       password:{type:String,require:true},
       
  })


  UserModel = mongoose.model("UserDetail",UserScehma)
  module.exports = UserModel;