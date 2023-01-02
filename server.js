require("dotenv").config();
const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logs");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions"); // pass into CORS
const PORT = process.env.PORT || 3500;

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json()); // recieve and parse JSON data

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: " 404 not found" });
  } else {
    res.type(txt).send("404");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`server is listening on: ${PORT}` || 3500));
