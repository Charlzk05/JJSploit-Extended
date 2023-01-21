const fs = require("fs");

fs.readFile("./Settings.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        return console.log(err);    
    }
    // JSON.parse(data)["Topmost"] = "WTF";
    var jsonData = JSON.parse(JSON.stringify(data));
    jsonData["Topmost"] = "true";
    fs.writeFile("./Settings.json", jsonData, { encoding: "utf-8" }, (err) => {
        if (err) {
            return console.log(err);
        }
    });
});