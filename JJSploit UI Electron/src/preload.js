const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    execPageExecuteButton: (script) => ipcRenderer.send("execPageExecuteButton", script),
    openFileButton_Call: () => ipcRenderer.send("openFileButton_Call"),
    openFileButton_Content: (callback) => ipcRenderer.on("openFileButton_Content", callback),
    saveFileButton_click: () => ipcRenderer.on("openFileButton_Content"),
});