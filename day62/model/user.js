const mongoose = require("mongoose");
const { stringify } = require("querystring");

const userSchema = mongoose.Schema({
    
    username : {
        type : string,
        required : true,
    },
    email : {
        type : string,
        required : true,
    },
    password : {
        type : string,
        required : true,
    },
    createdAt : {
        type : Date,
        required : Date.now(),
    },
});

module.exports = mongoose.model("user", userSchema);