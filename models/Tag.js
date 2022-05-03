const mongoose = require('mongoose')

const tagSchema = mongoose.Schema({
    nameTag: {
        type:String,
        required: true
    }
})



module.exports = mongoose.model("Tag", tagSchema);