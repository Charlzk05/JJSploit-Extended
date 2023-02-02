const executorPage = document.getElementsByClassName("executorPage")[0];
const buttonsPage = document.getElementsByClassName("buttonsPage")[0];
const scriptsLibPage = document.getElementsByClassName("scriptsLibPage")[0];
const navigatorBar = document.getElementsByClassName("navigatorBar")[0];
const gotoTop = document.getElementsByClassName("gotoTop")[0];
const scriptName = document.getElementById("scriptName");
const scriptDesc = document.getElementById("scriptDesc");
const scriptUrl = document.getElementById("scriptUrl");
const scriptsLibraryRow = document.getElementsByClassName("scriptsLibPage")[0].getElementsByClassName("row")[0]
const explorer = document.getElementsByClassName("explorer")[0];
const scriptsExplorer = document.getElementsByClassName("explorer")[0].getElementsByClassName("scripts")[0];
const scriptHubPage = document.getElementsByClassName("scriptHubPage")[0];
const aboutPage = document.getElementsByClassName("aboutPage")[0];
const suggestionOwnerTeamTextBox = document.getElementById("suggestionOwnerTeamTextBox");
const suggestionUrlTextBox = document.getElementById("suggestionUrlTextBox");
const settingsPage = document.getElementsByClassName("settingsPage")[0];
const restartRequired = document.getElementsByClassName("restartRequired")[0];
const mainUI = document.getElementById("main");

attach_click = () => {
    window.electronAPI.attachClick();
}

luaExecutor_click = () => {
    executorPage.setAttribute("style", "display: block;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
    settingsPage.setAttribute("style", "display: none;");
    aboutPage.setAttribute("style", "display: none;");
}

buttons_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: block;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
    settingsPage.setAttribute("style", "display: none;");
    aboutPage.setAttribute("style", "display: none;");
}

scriptsLib_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: block;");
    scriptHubPage.setAttribute("style", "display: none;");
    settingsPage.setAttribute("style", "display: none;");
    aboutPage.setAttribute("style", "display: none;");
}

scriptHubButton_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: block;");
    settingsPage.setAttribute("style", "display: none;");
    aboutPage.setAttribute("style", "display: none;");
}

aboutButton_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
    settingsPage.setAttribute("style", "display: none;");
    aboutPage.setAttribute("style", "display: block;");
}

settingsButton_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
    settingsPage.setAttribute("style", "display: block;");
    aboutPage.setAttribute("style", "display: none;");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navigatorBar.setAttribute("class", "navigatorBarActive");
        gotoTop.setAttribute("class", "gotoTop gotoTopActive");
    } else {
        navigatorBar.setAttribute("class", "navigatorBar");
        gotoTop.setAttribute("class", "gotoTop");
    }
});

gotoTop_click = () => {
    window.scroll(0, 0);
}


addScript_click = () => {
    for (var i = 0; i < scriptsLibraryRow.getElementsByClassName("script").length; i++) {
        if (scriptName.value == scriptsLibraryRow.getElementsByClassName("script")[i].getElementsByTagName("h3")[0].innerText) {
            scriptsLibPage.getElementsByClassName("existsWarning")[0].setAttribute("class", "existsWarning existsWarningActive");
                setTimeout(() => {
                    scriptsLibPage.getElementsByClassName("existsWarning")[0].setAttribute("class", "existsWarning");
                }, 3000);
            return;
        }
    }

    if (scriptName.value.length >= 5 && scriptUrl.value.slice(0, 4) == "http" || scriptUrl.value.slice(0, 5) == "https") {
        if (scriptName.value.length >= 5) {
            if (scriptDesc.value == "") {
                window.electronAPI.scriptLibraryAdd(scriptName.value, "(No description provided)", scriptUrl.value);
                scriptLibraryCreator(scriptName.value, "(No description provided)", scriptUrl.value, scriptsLibraryRow);
            } else {
                scriptLibraryCreator(scriptName.value, scriptDesc.value, scriptUrl.value, scriptsLibraryRow);
                window.electronAPI.scriptLibraryAdd(scriptName.value, scriptDesc.value, scriptUrl.value);
            }
        }
        else {
            scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning warningActive");
            setTimeout(() => {
                scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning");
            }, 3000);   
        }
        
    } else {
        scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning warningActive");
        setTimeout(() => {
            scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning");
        }, 3000);
    }
}

execPageExecuteButton_click = () => {
    window.electronAPI.execPageExecuteButton(editor.getValue());
}

execPageClearButton_click = () => {
    editor.setValue("");
}

openFileButton_click = () => {
    window.electronAPI.openFileButton_Call();
}

window.electronAPI.openFileButton_Content((event, content) => {
    editor.setValue(content);
});

saveFileButton_click = () => {
    window.electronAPI.saveFileButton(editor.getValue());
}

isHidden = true;
explorerButton_click = () => {
    if (isHidden == false) {
        isHidden = true;
        explorer.setAttribute("class", "explorer explorerHidden");
    } else {
        isHidden = false;
        explorer.setAttribute("class", "explorer");
    }
}

window.addEventListener("load", () => {
    window.electronAPI.initializeSoftware();
});


window.addEventListener("DOMContentLoaded", () => {
    window.electronAPI.explorerLoad();
    window.electronAPI.scriptsLibraryLoad();
});

window.electronAPI.scriptsLibraryLoad_Scripts((event, jsonItems) => {
    JSON.parse(jsonItems).forEach((item) => {
        if (item != null) {
            var name = JSON.parse(JSON.stringify(item))["name"];
            var desc = JSON.parse(JSON.stringify(item))["desc"];
            var url = JSON.parse(JSON.stringify(item))["url"];
            scriptLibraryCreator(name, desc, url, scriptsLibraryRow);
        }
    });
});

window.electronAPI.explorerLoad_Files((event, files) => {
    files.forEach((file) => {
        if (file.includes(".txt") || file.includes(".lua")) {
            var script = document.createElement("p");
            script.innerText = file;
            
            script.addEventListener("click", () => {
                window.electronAPI.explorerSelectedFile(file);
            });

            scriptsExplorer.appendChild(script);
        }
    });
});

window.electronAPI.explorerSelectedFile_Content((event, content) => {
    editor.setValue(content);
});

window.electronAPI.openFolder_selectedFolder((event, files) => {
    document.getElementsByClassName("scripts")[0].innerHTML = "";

    files.forEach((file) => {
        if (file.includes(".txt") || file.includes(".lua")) {
            var script = document.createElement("p");
            script.innerText = file;
            
            script.addEventListener("click", () => {
                window.electronAPI.openFolder_selectedFile(file);
            });

            scriptsExplorer.appendChild(script);
        }
    });
});

window.electronAPI.openFolder_SelectedFile_Content((event, content) => {
    editor.setValue(content);
});

submitSuggestion_click = (e) => {
    if (suggestionOwnerTeamTextBox.value.length >= 3 && suggestionUrlTextBox.value.length >= 0 && suggestionUrlTextBox.value.slice(0, 4) == "http" || suggestionUrlTextBox.value.slice(0, 5) == "https") {
        if (suggestionOwnerTeamTextBox.value.length >= 3 ) {
            window.electronAPI.suggestionSubmit(suggestionOwnerTeamTextBox.value, suggestionUrlTextBox.value);
            scriptHubPage.getElementsByClassName("success")[0].setAttribute("class", "success successActive");
            setTimeout(() => {
                scriptHubPage.getElementsByClassName("success")[0].setAttribute("class", "success");
            }, 3000);
            e.disabled = true;
            setTimeout(() => {
                e.disabled = false;
            }, 10000);
        } else {
            scriptHubPage.getElementsByClassName("warning")[0].setAttribute("class", "warning warningActive");
            setTimeout(() => {
                scriptHubPage.getElementsByClassName("warning")[0].setAttribute("class", "warning");
            }, 3000);
        }
    } else {
        scriptHubPage.getElementsByClassName("warning")[0].setAttribute("class", "warning warningActive");
        setTimeout(() => {
            scriptHubPage.getElementsByClassName("warning")[0].setAttribute("class", "warning");
        }, 3000);
    }
}

const showMenuCheckBox = document.getElementById("showMenuCheckBox");
showMenu_click = () => {
    if (showMenuCheckBox.checked == true) {
        window.electronAPI.showMenu();
    } else {
        window.electronAPI.hideMenu();
    }
}

const topMostCheckBox = document.getElementById("topMostCheckBox");
const topMost_click = () => {
    if (topMostCheckBox.checked == true) {
        window.electronAPI.topMost();   
    } else {
        window.electronAPI.noTopMost();
    }
}

window.electronAPI.topMostData((event, data) => {
    topMostCheckBox.checked = data;
});

window.electronAPI.showMenuData((event, data) => {
    showMenuCheckBox.checked = data;
});

window.electronAPI.restartRequiredCall((event) => {
    restartRequired.setAttribute("style", "display: block;");
    mainUI.setAttribute("style", "display: none;");
});

search_oninput = (event) => {
    var searchFor = document.getElementById("searchFor");
    searchFor.innerText = "Search for " + event.value;
    var scripts = scriptsLibraryRow.getElementsByClassName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].getElementsByTagName("h3")[0].innerText.includes(event.value)) {
            scripts[i].setAttribute("style", "display: block;");
        } else {
            scripts[i].setAttribute("style", "display: none;");
        }
    }
}