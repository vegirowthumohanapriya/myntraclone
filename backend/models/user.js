const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: { type: String, required: [true, 'userId cannot be empty'], unique: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("User", userSchema)