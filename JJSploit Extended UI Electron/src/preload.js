const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
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

    // Buttons

    fly: (scriptName) => ipcRenderer.send("fly", scriptName),
    aimbot: (scriptName) => ipcRenderer.send("aimbot", scriptName),
    gravitySwitch: (scriptName) => ipcRenderer.send("gravitySwitch", scriptName),
    clickTP: (scriptName) => ipcRenderer.send("clickTP", scriptName),
    
    humanFlashlight: (scriptName) => ipcRenderer.send("humanFlashlight", scriptName),
    removeLegs: (scriptName) => ipcRenderer.send("removeLegs", scriptName),
    floatCharacter: (scriptName) => ipcRenderer.send("floatCharacter", scriptName),
    highHips: (scriptName) => ipcRenderer.send("highHips", scriptName),

    BTools: (scriptName) => ipcRenderer.send("BTools", scriptName),
    nightToggle: (scriptName) => ipcRenderer.send("nightToggle", scriptName),
    limpCharacter: (scriptName) => ipcRenderer.send("limpCharacter", scriptName),
    blockHead: (scriptName) => ipcRenderer.send("blockHead", scriptName),

    highLightPlayer: (scriptName) => ipcRenderer.send("highLightPlayer", scriptName),
    removeArms: (scriptName) => ipcRenderer.send("removeArms", scriptName),
    invisibleCharacter: (scriptName) => ipcRenderer.send("invisibleCharacter", scriptName),
    magnetizePlayer: (scriptName) => ipcRenderer.send("magnetizePlayer", scriptName),

    teleportToPlayer: (scriptName) => ipcRenderer.send("teleportToPlayer", scriptName),
    unlockWorkspaceBase: (scriptName) => ipcRenderer.send("unlockWorkspaceBase", scriptName),
    WRDEsp: (scriptName) => ipcRenderer.send("WRDEsp", scriptName),
    infiniteJump: (scriptName) => ipcRenderer.send("infiniteJump", scriptName),
});