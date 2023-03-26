const mongoose = require("mongoose");

const Record = new mongoose.model(
    "Record",
    new mongoose.Schema({
        name: {
            type: String,
        },
        accuracy: {
            type: String,
        },
        wpm: {
            type: String,
        },
        wordCount: {
            type: String,
        },
    })
);

module.exports = Record;
