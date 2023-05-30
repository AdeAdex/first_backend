const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 560;
const mongoose_URI = process.env.URI;

mongoose
  .connect(mongoose_URI)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({limit: "50mb"}));
const userRoute = require("./routes/user.route");
const { startServer } = require("./controllers/user.controller");
// const infoRoute = require("./routes/info.route");
app.use("/user", userRoute);
// app.use("/info", infoRoute);

app.listen(PORT, startServer);
