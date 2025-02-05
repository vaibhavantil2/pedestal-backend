const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: "",
    },
    employment_type: String,
    employment_status: String,
    description: {
        type: String,
        default: "",
    },
    start_date: {
        type: Date,
    },
    current_job: {
        type: Boolean,
    },
    end_date: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
});
