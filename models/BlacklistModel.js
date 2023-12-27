const mongoose = require("mongoose")

const blacklistScehma = mongoose.Schema({
        blacklist:{type:[String],require:true}
})


 const blacklistModel = mongoose.model("blacklist",blacklistScehma);
   
 module.exports = blacklistModel;