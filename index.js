const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).end("<h1>Welcome to the File Server</h1>");
});

app.get("/files", (req, res) => {
  const dirPath = path.join(__dirname, "/files");
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(404).json({ message: "Directory not found." });
    }
    return res.status(200).json(files);
  });
});
