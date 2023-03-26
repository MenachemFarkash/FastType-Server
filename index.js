const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const login = require("./routes/login");
const records = require("./routes/records");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

app.use("/login", login);
app.use("/records", records);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(console.log("connected to db"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
