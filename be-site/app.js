const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const booksRoute = require("./route/books");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use("/books", booksRoute);

mongoose
  .connect(
    "mongodb://mongoadmin:mongopass@localhost:27017/crud?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

app.listen(4000);
