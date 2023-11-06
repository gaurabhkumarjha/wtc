
const mongoose= require("mongoose");
const clientschema = new mongoose.Schema({

    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    emailid:{
        type: String,
    },
    phonenumber:{
        type: Number,
    },
    projectdetails:{
        type: String,
    },
});

const clientregistration= mongoose.model('clientregistration', clientschema);
module.exports= clientregistration;