import CORS from "cors";
import env from "dotenv";
import express from "express";

env.config();

const app = express();
const port = 3001;

app.use(CORS());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/health", (req, res) => {
  res.send("Health Check Completed");
});

app.listen(port);
