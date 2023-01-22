const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    try {
        res.send("<h1 style='font-weight: 500; font-family: Segoe UI;'>Hello World</h1>");
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post("/DownloadConsoleApp", (req, res) => {
    try {
        res.download(path.join(__dirname, "Downloads", "JJSploit Extended Files.zip"));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post("/suggestion", async (req, res) => {
    try {
        const date = new Date();
        var recievedData = {
            "Owner/Team": req.body.ownerTeam,
            "Url": req.body.url,
            "Time": `${date.getHours() - 12}-${date.getMinutes()}`,
            "Date": `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
        };
        await fs.readFile("./Suggestions.json", { encoding: "utf-8" }, async (err, data) => {
            if (err) {
                return console.log(err);
            }
            var jsonArray = JSON.parse(data);
            jsonArray.push(recievedData);
            await fs.writeFile("./Suggestions.json", JSON.stringify(jsonArray, null, 4), { encoding: "utf-8" }, (err) => {
                if (err) {
                    return console.log(err.message);
                }
                res.send("Suggestion submitted");
            });
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Express server is listening on port ${port}!`);
});