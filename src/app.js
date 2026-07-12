require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        message: process.env.APP_NAME,
        version: "2.5.0"
    });
});

app.use("/health", healthRoutes);
app.use("/users", userRoutes);

module.exports = app;