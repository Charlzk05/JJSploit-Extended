const fs = require("fs");

/*
var a = {
    "name": "test1",
    "desc": "test2",
}

console.log(JSON.parse(JSON.stringify(a))["name"]);
*/

fs.readFile("./results.json", {
    encoding: "utf-8"
}, (err, data) => {
    if (err) {
        return console.log(data);
    }

    // console.log(JSON.parse(JSON.stringify(data)));

    JSON.parse(data).forEach((item) => {
        console.log(JSON.parse(JSON.stringify(item))["name"]);
    });
});