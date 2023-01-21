const fs = require("fs");

fs.readFile("./jsonTest/results.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        return console.log(err);
    }
    var dataArray = JSON.parse(data);

    for (var i = 0; i < dataArray.length; i++) {
        if (JSON.parse(JSON.stringify(dataArray[i]))["name"] == "delete me") {
            delete dataArray[i];
            break;
        }
    }

    console.log(dataArray);

    /*
    dataArray.forEach((dat, index) => {
        if (JSON.parse(JSON.stringify(dat))["name"] == "delete me") {
            console.log(index);
        }
    });
    */
});