const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    try {
        res.render("main");
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

app.get("/suggestions", (req, res) => {
    try {
        fs.readFile("./Suggestions.json", { encoding: "utf-8" }, (err, data) =>{
            if (err) {
                return console.log(err);
            }
            var jsonData = JSON.parse(data);
            res.render("suggestions", { 
                result: jsonData
            });
        });
    } catch (err) {
        res.sendStatus(500);
    }
});

app.post("/suggestion", (req, res) => {
    try {
        const date = new Date();

        if (date.getHours() > 12) {
            var recievedData = {
                "Owner/Team": req.body.ownerTeam,
                "Url": req.body.url,
                "Time": `${date.getHours() -12}:${date.getMinutes()} PM`,
                "Date": `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
            };
        } else {
            var recievedData = {
                "Owner/Team": req.body.ownerTeam,
                "Url": req.body.url,
                "Time": `${date.getHours()}:${date.getMinutes()} AM`,
                "Date": `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
            };
        }

        fs.readFile("./Suggestions.json", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                return console.log(err);
            }
            var jsonArray = JSON.parse(data);
            jsonArray.push(recievedData);
            fs.writeFile("./Suggestions.json", JSON.stringify(jsonArray, null, 4), { encoding: "utf-8" }, (err) => {
                if (err) {
                    return console.log(err);
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