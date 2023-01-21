const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    initializeExploit: () => ipcRenderer.send("initializeExploit"),
    developerToolsClick: () => ipcRenderer.send("developerToolsClick"),
    attachClick: () => ipcRenderer.send("attachClick"),
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
    executeScriptLibraryItem: (name) => ipcRenderer.send("executeScriptLibraryItem", name),

    // Buttons

    executeButton: (scriptName) => ipcRenderer.send("executeButton", scriptName),

    // Script hub

    executeScriptHub: (scriptName) => ipcRenderer.send("executeScriptHub", scriptName),
    suggestionSubmit: (ownerTeam, url) => ipcRenderer.send("suggestionSubmit", ownerTeam, url),

    // About

    openLink: (url) => ipcRenderer.send("openLink", url),
});