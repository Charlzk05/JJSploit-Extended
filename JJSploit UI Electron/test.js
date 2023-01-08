const fs = require("fs");

fs.readdir("./Scripts", async (err, filenames) => {
    if (err) {
        return console.log(err);
    }
    console.log(filenames);
});