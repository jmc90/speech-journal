const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Entry", entrySchema)