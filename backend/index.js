const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
// console.log(process.env.MONGO_URI);
require("./utils/db")();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(
  session({
    name: "beautyparlour.sid",
    secret: "beautyparlour",
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 8, // 8 hours
    },
  })
);

app.use("/api/auth", require("./routes/authRoute"));


app.use(require("./middlewares/error"));

app.listen(8000, () => console.log("server listening on port 8000"));