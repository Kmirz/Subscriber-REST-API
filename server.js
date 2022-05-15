require("dotenv").config();

const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const subscribersRouter = require("./routes/subscribers");

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use("/subscribers", subscribersRouter);
app.use(express.static("public"));

app.listen(3000, () => console.log("Server Started"));
