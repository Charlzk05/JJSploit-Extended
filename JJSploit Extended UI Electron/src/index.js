const { app, BrowserWindow, ipcMain, dialog, shell, MenuItem } = require('electron');
const path = require('path');
const fs = require("fs");
const childProcess = require("child_process");
const axios = require("axios");
const extract = require("extract-zip");

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 1000,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    title: "JJSploit++ by Charlzk05",
    icon: path.join(__dirname, "page", "Resources", "Logo.ico")
  });

  mainWindow.loadFile(path.join(__dirname, "page", 'index.html'));
  // mainWindow.maximize();
  mainWindow.title = "JJSploit++ by Charlzk05";

  ipcMain.on("initializeSoftware", async (event) => {
    try {
      await fs.readFile("./Bin/Settings/Topmost.txt", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        if (data == "true") {
          await mainWindow.webContents.send("topMostData", true);
        } else {
          await mainWindow.webContents.send("topMostData", false);
        }
      });
      await fs.readFile("./Bin/Settings/ShowMenu.txt", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        if (data == "true") {
          await mainWindow.webContents.send("showMenuData", true);
        } else {
          await mainWindow.webContents.send("showMenuData", false);
          mainWindow.menuBarVisible = false; 
        }
      });
      await axios({
        method: "post",
        url: "https://JJSploit-Extended-Server.charlzk.repl.co/DownloadConsoleApp",
        responseType: "stream"
      }).then((result) => {
        result.data.pipe(fs.createWriteStream(path.join(__dirname, "page", "JJSploit Extended Files.zip")));
        result.data.on("end", async () => {
          if (fs.existsSync(path.join("page", "Console App")) == false) {
            await extract(path.resolve(path.join(__dirname, "page", "JJSploit Extended Files.zip")), { dir: path.resolve(path.join(__dirname, "page", "Console App")) });
          }
        });
      }).catch((err) => {
        return console.log(err.message);
      });
      if (fs.existsSync("./Scripts") == false) {
        await fs.mkdir("./Scripts", async () => {
          await fs.writeFile("./Scripts/Hello World.lua", 'print("Hello World - Lua file")', { encoding: "utf-8" }, async (err) => {
            if (err) {
              return console.log(err.message);
            }
          });
          await fs.writeFile("./Scripts/Hello World.txt", 'print("Hello World - Txt file")', { encoding: "utf-8" }, async (err) => {
            if (err) {
              return console.log(err.message);
            }
          });
        });
      }
      if (fs.existsSync("./Bin") == false) {
        var scriptsLibraryData = [
          {
            "name": "BTools Script (Example)",
            "desc": "Gives your player the old system of building tools. (Example) (Description is optional)",
            "url": "https://pastebin.com/raw/NjttFM2K"
          }
        ]
        await fs.mkdir("./Bin", async () => {
          await fs.mkdir("./Bin/Settings", async () => {
            await fs.writeFile("./Bin/Settings/ShowMenu.txt", "false", { encoding: "utf-8" }, (err) => { 
              if (err) {
                return console.log(err.message);
              }
            });
            await fs.writeFile("./Bin/Settings/Topmost.txt", "false", { encoding: "utf-8" }, (err) => { 
              if (err) {
                return console.log(err.message);
              }
            });
          });
          await fs.writeFile("./Bin/ScriptsLibrary.json", JSON.stringify(scriptsLibraryData, null, 4), { encoding: "utf-8" }, async (err) => {
            if (err) {
              return console.log(err.message);
            }
            await mainWindow.webContents.send("restartRequiredCall");
          });
        });
      }
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("attachClick", async (event) => {
    try {
      await childProcess.exec(`"JJSploit Extended Console App.exe" --attach`, { 
        cwd: path.join(__dirname, "page", "Console App")
       }, (err, stdout) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(stdout);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("execPageExecuteButton", async (event, content) => {
    try {
      await fs.writeFile(path.join(__dirname, "page", "Console App", "Script.txt"), content, async (err) => {
        if (err) {
          return console.log(err.message);
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeScriptTxt`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err.message);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
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
              return console.log(err.message);
            }
            await mainWindow.webContents.send("openFileButton_Content", data);
          });
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
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
              return console.log(err.message);
            }
          });
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("explorerLoad", async (event) => {
    try {
      await fs.readdir("./Scripts", async (err, files) => {
        if (err) {
          return console.log(err.message);
        }
        await mainWindow.webContents.send("explorerLoad_Files", files);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("explorerSelectedFile", async (event, file) => {
    try {
      await fs.readFile(path.join("./Scripts", file), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        await mainWindow.webContents.send("explorerSelectedFile_Content", data);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  var selectedFolder = "";
  ipcMain.on("selectFolder_call", async (event) => {
    try {
      await dialog.showOpenDialog(mainWindow, {
        properties: [
          "openDirectory"
        ]
      }).then(async (result) => {
        if (result.canceled == false) {
          selectedFolder = result.filePaths.toString();
          await fs.readdir(result.filePaths.toString(), { encoding: "utf-8" }, (err, data) => {
            if (err) {
              return console.log(err.message);
            }
            mainWindow.webContents.send("openFolder_selectedFolder", data);
          });
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("openFolder_selectedFile", async (event, file) => {
    try {
      await fs.readFile(path.join(selectedFolder, file), { encoding: "utf-8" }, (err, data) => {
        if (err) {
          return console.log (err);
        }
        mainWindow.webContents.send("openFolder_SelectedFile_Content", data);
      });
      console.log(path.join(selectedFolder, file));
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("scriptsLibraryLoad", async (event) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        await mainWindow.webContents.send("scriptsLibraryLoad_Scripts", data);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("scriptLibraryAdd", async (event, name, desc, url) => {
    try {
      fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        var dataArray = JSON.parse(data);
        dataArray.push({
          "name": name,
          "desc": desc,
          "url": url
        });
        await fs.writeFile("./Bin/ScriptsLibrary.json", JSON.stringify(dataArray, null, 4), { encoding: "utf-8" }, (err) => {
          if (err) {
            return console.log(err.message);
          }
        });
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("scriptLibraryDeleteItem", async (event, name) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        var dataArray = JSON.parse(data);
        for (var i = 0; i < dataArray.length; i++) {
          if (dataArray[i] != null) {
            if (JSON.parse(JSON.stringify(dataArray[i]))["name"] == name) {
              delete dataArray[i];
              await fs.writeFile("./Bin/ScriptsLibrary.json", JSON.stringify(dataArray, null, 4), { encoding: "utf-8" }, async (err) => {
                if (err) {
                  return console.log(err.message);
                }
              });
              break;
            }
          }
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("executeScriptLibraryItem", async (event, name) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err.message);
        }
        var dataArray = JSON.parse(data);
        for (var i = 0; i < dataArray.length; i++) {
          if (dataArray[i] != null) {
            if (JSON.parse(JSON.stringify(dataArray[i]))["name"] == name) {
              await childProcess.exec(`"JJSploit Extended Console App.exe" --executeUrl "${JSON.parse(JSON.stringify(dataArray[i]))["url"]}"`, { 
                cwd: path.join(__dirname, "page", "Console App")
               }, (err, stdout) => {
                if (err) {
                  return console.log(err.message);
                }
                console.log(stdout);
              });
              break;
            }
          }
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("executeButton", async (event, scriptName) => {
    try {
      await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
        cwd: path.join(__dirname, "page", "Console App")
       }, (err, stdout) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(stdout);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("executeScriptHub", async (event, scriptName) => {
    try {
      await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Script Hub/${scriptName}"`, { 
        cwd: path.join(__dirname, "page", "Console App")
       }, (err, stdout) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(stdout);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("openLink", async (event, url) => {
    try {
      await shell.openExternal(url);
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("suggestionSubmit", async (event, ownerTeam, url) => {
    try {
      await axios({
        method: "post",
        url: "https://jjsploit-extended-server.charlzk.repl.co/suggestion",
        data: {
          ownerTeam: ownerTeam,
          url: url
        }
      }).then((response) => {
        // console.log(response);
      }).catch((err) => {
        console.log(err.message);
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("showMenu", async (event) => {  
    try {
      mainWindow.menuBarVisible = true; 
      await fs.writeFile("./Bin/Settings/ShowMenu.txt", "true", (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("hideMenu", async (event) => {  
    try {
      mainWindow.menuBarVisible = false; 
      await fs.writeFile("./Bin/Settings/ShowMenu.txt", "false", (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("topMost", async (event) => {  
    try {
      mainWindow.setAlwaysOnTop(true);
      await fs.writeFile("./Bin/Settings/Topmost.txt", "true", (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("noTopMost", async (event) => {  
    try {
      mainWindow.setAlwaysOnTop(false);
      await fs.writeFile("./Bin/Settings/Topmost.txt", "false", (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
      });
    }
  });

  ipcMain.on("restartApp", async (event) => {
    try {
      app.relaunch();
      app.quit();
    } catch (err) {
      await dialog.showMessageBox(mainWindow, {
        type: "error",
        message: err.message
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
