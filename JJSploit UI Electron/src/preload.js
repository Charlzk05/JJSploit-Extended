const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    execPageExecuteButton: (script) => ipcRenderer.send("execPageExecuteButton", script),
    openFileButton_Call: () => ipcRenderer.send("openFileButton_Call"),
    openFileButton_Content: (script) => ipcRenderer.on("openFileButton_Content", script),
    saveFileButton: (script) => ipcRenderer.send("saveFileButton", script),
    explorerLoad_Call: () => ipcRenderer.send("explorerLoad_Call"),
    explorerLoad_Files: (files) => ipcRenderer.on("explorerLoad_Files", files),
});