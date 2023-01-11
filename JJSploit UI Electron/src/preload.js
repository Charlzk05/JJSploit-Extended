const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    execPageExecuteButton: (content) => ipcRenderer.send("execPageExecuteButton", content),
    openFileButton_Call: () => ipcRenderer.send("openFileButton_Call"),
    openFileButton_Content: (content) => ipcRenderer.on("openFileButton_Content", content),
    saveFileButton: (content) => ipcRenderer.send("saveFileButton", content),
    explorerLoad: () => ipcRenderer.send("explorerLoad"),
    explorerLoad_Files: (files) => ipcRenderer.on("explorerLoad_Files", files),
    explorerSelectedFile: (file) => ipcRenderer.send("explorerSelectedFile", file),
    explorerSelectedFile_Content: (content) => ipcRenderer.on("explorerSelectedFile_Content", content),
    scriptsLibraryLoad: () => ipcRenderer.send("scriptsLibraryLoad"),
    scriptsLibraryLoad_Scripts: (jsonItems) => ipcRenderer.on("scriptsLibraryLoad_Scripts", jsonItems),
    scriptLibraryAdd: (name, desc, url) => ipcRenderer.send("scriptLibraryAdd", name, desc, url),
    scriptLibraryDeleteItem: (name) => ipcRenderer.send("scriptLibraryDeleteItem", name),
});