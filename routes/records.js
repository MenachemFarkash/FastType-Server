const express = require("express");
const app = express.Router();

const Record = require("../Schema/RecordScheme");

app.get("/", async (req, res) => {
    const records = await Record.find().limit(10);
    res.send(records);
});

app.post("/", async (req, res) => {
    console.log(req.body);
    const { name, a10, a15, a20, a30, w10, w15, w20, w30 } = req.body;

    try {
        const nameExist = await Record.findOne({ name: name });
        if (nameExist === null) {
            const record = await new Record({
                name,
                a10,
                a15,
                a20,
                a30,
                w10,
                w15,
                w20,
                w30,
            });
            const result = record.save();
            res.send(record);
        } else {
            const record = await Record.findOneAndUpdate(
                { name: name },
                { a10, a15, a20, a30, w10, w15, w20, w30 },
                { new: true }
            );
            res.send(record);
        }
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = app;
