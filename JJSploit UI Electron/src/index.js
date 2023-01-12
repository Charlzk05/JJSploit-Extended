const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require("fs");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 1000,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "page", 'index.html'));

  mainWindow.title = "JJSploit++ by Charlzk05";

  ipcMain.on("execPageExecuteButton", async (event, content) => {
    try {
      await fs.writeFile("./Bin/Script.txt", content, (err) => {
        if (err) {
          return console.log(err);
        }
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("openFileButton_Call", async (event) => {
    try {
      await dialog.showOpenDialog(mainWindow, {
        filters: [
          { name: "Txt Files", extensions: ["txt"] },
          { name: "Lua Files", extensions: ["lua"] },
          { name: "All Files", extensions: ["*"] }
        ]
      }).then(async (result) => {
        if (result.canceled == false) {
          await fs.readFile(result.filePaths.toString(), { encoding: "utf-8" }, async (err, data) => {
            if (err) {
              return console.log(err);
            }
            await mainWindow.webContents.send("openFileButton_Content", data);
          });
        }
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("saveFileButton", async (event, content) => {
    try {
      await dialog.showSaveDialog(mainWindow, {
        filters: [
          { name: "Txt Files", extensions: ["txt"] },
          { name: "Lua Files", extensions: ["lua"] },
          { name: "All Files", extensions: ["*"] }
        ]
      }).then(async (result) => {
        if (result.canceled == false) {
          await fs.writeFile(result.filePath, content, { encoding: "utf-8" }, (err) => {
            if (err) {
              return console.log(err);
            }
          });
        }
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("explorerLoad", async (event) => {
    try {
      await fs.readdir("./Scripts", async (err, files) => {
        if (err) {
          return console.log(err);
        }
        await mainWindow.webContents.send("explorerLoad_Files", files);
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("explorerSelectedFile", async (event, file) => {
    try {
      await fs.readFile(path.join("./Scripts", file), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err);
        }
        await mainWindow.webContents.send("explorerSelectedFile_Content", data);
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("scriptsLibraryLoad", async (event) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err);
        }
        await mainWindow.webContents.send("scriptsLibraryLoad_Scripts", data);
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });}
  });

  ipcMain.on("scriptLibraryAdd", async (event, name, desc, url) => {
    try {
      fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err);
        }
        var dataArray = JSON.parse(data);
        dataArray.push({
          "name": name,
          "desc": desc,
          "url": url
        });
        await fs.writeFile("./Bin/ScriptsLibrary.json", JSON.stringify(dataArray, null, 4), { encoding: "utf-8" }, (err) => {
          if (err) {
            return console.log(err);
          }
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("scriptLibraryDeleteItem", async (event, name) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err);
        }
        var dataArray = JSON.parse(data);
        for (var i = 0; i < dataArray.length; i++) {
          if (dataArray[i] != null) {
            if (JSON.parse(JSON.stringify(dataArray[i]))["name"] == name) {
              delete dataArray[i];
              await fs.writeFile("./Bin/ScriptsLibrary.json", JSON.stringify(dataArray, null, 4), { encoding: "utf-8" }, async (err) => {
                if (err) {
                  return console.log(err);
                }
              });
              break;
            }
           } 
        }
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
