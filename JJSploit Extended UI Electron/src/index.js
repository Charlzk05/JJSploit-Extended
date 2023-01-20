const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require("fs");
const childProcess = require("child_process");
const { stdout } = require('process');

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
  });

  mainWindow.loadFile(path.join(__dirname, "page", 'index.html'));

  mainWindow.maximize();

  mainWindow.title = "JJSploit++ by Charlzk05";

  ipcMain.on("attachClick", async (event) => {
    try {
      await childProcess.exec(`"JJSploit Extended Console App.exe" --attach`, { 
        cwd: path.join(__dirname, "page", "Console App")
       }, (err, stdout) => {
        if (err) {
          return console.log(err);
        }
        console.log(stdout);
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("execPageExecuteButton", async (event, content) => {
    try {
      await fs.writeFile(path.join(__dirname, "page", "Console App", "Script.txt"), content, async (err) => {
        if (err) {
          return console.log(err);
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeScriptTxt`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
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

  ipcMain.on("executeScriptLibraryItem", async (event, name) => {
    try {
      await fs.readFile("./Bin/ScriptsLibrary.json", { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err);
        }
        var dataArray = JSON.parse(data);
        for (var i = 0; i < dataArray.length; i++) {
          if (dataArray[i] != null) {
            if (JSON.parse(JSON.stringify(dataArray[i]))["name"] == name) {
              await childProcess.exec(`"JJSploit Extended Console App.exe" --executeUrl "${JSON.parse(JSON.stringify(dataArray[i]))["url"]}"`, { 
                cwd: path.join(__dirname, "page", "Console App")
               }, (err, stdout) => {
                if (err) {
                  return console.log(err);
                }
                console.log(stdout);
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

  // Buttons

  ipcMain.on("fly", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("aimbot", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("gravitySwitch", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("clickTP", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("humanFlashlight", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("removeLegs", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("floatCharacter", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("highHips", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("BTools", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("nightToggle", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("limpCharacter", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("blockHead", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("highLightPlayer", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("removeArms", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("invisibleCharacter", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("magnetizePlayer", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("teleportToPlayer", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("unlockWorkspaceBase", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("WRDEsp", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
      });
    } catch (err) {
      await dialog.showMessageBox(err, {
        type: "error"
      });
    }
  });

  ipcMain.on("infiniteJump", async (event, scriptName) => {
    try {
      await fs.readFile(path.join(__dirname, "page", "Console App", "Buttons", scriptName), { encoding: "utf-8" }, async (err, data) => {
        if (err) {
          return console.log(err)
        }
        await childProcess.exec(`"JJSploit Extended Console App.exe" --executeFile "Buttons/${scriptName}"`, { 
          cwd: path.join(__dirname, "page", "Console App")
         }, (err, stdout) => {
          if (err) {
            return console.log(err);
          }
          console.log(stdout);
        });
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
