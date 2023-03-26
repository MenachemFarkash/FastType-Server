const express = require("express");
const Record = require("../Schema/RecordScheme");
const app = express.Router();
app.use(express.json());

// app.post("/", function (req, res) {
//     res.send("POST request to the homepage");
// });

app.post("/", async (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    try {
        const nameExist = await Record.findOne({ name: name });
        if (nameExist === null) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = app;
