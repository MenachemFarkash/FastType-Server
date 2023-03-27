const mongoose = require("mongoose");

const Record = new mongoose.model(
    "Record",
    new mongoose.Schema({
        name: {
            type: String,
        },
        a10: {
            type: String,
        },
        a15: {
            type: String,
        },
        a20: {
            type: String,
        },
        a30: {
            type: String,
        },
        w10: {
            type: String,
        },
        w15: {
            type: String,
        },
        w20: {
            type: String,
        },
        w30: {
            type: String,
        },
    })
);

module.exports = Record;
