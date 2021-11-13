const mongoose = require("mongoose");



const profileSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    availability: {
        type: Boolean,
        required: true,

    }

})

module.exports = Profile = mongoose.model("profile", profileSchema);