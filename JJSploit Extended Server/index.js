const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1 style='font-weight: 500; font-family: Segoe UI;'>Hello World</h1>");
});

app.post("/DownloadConsoleApp", (req, res) => {
    res.download(path.join(__dirname, "Downloads", "JJSploit Extended Server.zip"));
});

app.listen(port, () => {
    console.log(`Express server is listening on port ${port}!`);
});