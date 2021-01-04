require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport')

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, "../public/");
const DIST_PATH = path.join(__dirname, "../dist");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is now listening on port: ${PORT}`);
});
