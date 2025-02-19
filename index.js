const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).end("<h1>Welcome to the File Server</h1>");
});
