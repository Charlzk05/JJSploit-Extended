const fs = require("fs");

var jsonArray = [
    {
        "name": "test-name",
        "desc": "test-nesc",
        "url": "test-url"
    },
    {
        "name": "test-name1",
        "desc": "test-nesc1",
        "url": "test-url1"
    }
]

jsonArray.push({
    "name": "test-append",
    "desc": "test-append",
    "url": "test-append"
});

fs.writeFile("./jsonTest/results.json", JSON.stringify(jsonArray, null, 4), { 
    encoding: "utf-8" 
}, (err) => {
    if (err) {
        return console.log(err);
    }
});