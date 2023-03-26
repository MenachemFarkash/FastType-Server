const express = require("express");
const app = express.Router();

const Record = require("../Schema/RecordScheme");

const exampleRecord = {
    name: "farkash",
    accuracy: 99.5,
    wpm: 52,
    wordsCount: 10,
};

app.get("/", async (req, res) => {
    const records = await Record.find().limit(10);
    res.send(records);
});

app.post("/", async (req, res) => {
    console.log(req.body);
    const { name, accuracy, wpm, wordCount } = req.body;
    const record = await new Record({
        name,
        accuracy,
        wpm,
        wordCount,
    });
    const result = record.save();
    res.send(record);
});

module.exports = app;
