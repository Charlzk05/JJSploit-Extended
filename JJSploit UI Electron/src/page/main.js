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

var editor;

require(["vs/editor/editor.main"], () => {
    editor = monaco.editor.create(document.getElementById("editor"), {
        value: '',
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true
    });
});

luaExecutor_click = () => {
    executorPage.setAttribute("style", "display: block;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
}

buttons_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: block;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: none;");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navigatorBar.setAttribute("class", "navigatorBar navigatorBarActive");
        gotoTop.setAttribute("class", "gotoTop gotoTopActive");
    } else {
        navigatorBar.setAttribute("class", "navigatorBar");
        gotoTop.setAttribute("class", "gotoTop");
    }
});

gotoTop_click = () => {
    window.scroll(0, 0);
}

scriptsLib_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: block;");
    scriptHubPage.setAttribute("style", "display: none;");
}

scriptHubButton_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibPage.setAttribute("style", "display: none;");
    scriptHubPage.setAttribute("style", "display: block;");
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
        if (scriptDesc.value == "") {
            window.electronAPI.scriptLibraryAdd(scriptName.value, "(No description provided)", scriptUrl.value);
            scriptLibraryCreator(scriptName.value, "(No description provided)", scriptUrl.value, scriptsLibraryRow);
        } else {
            scriptLibraryCreator(scriptName.value, scriptDesc.value, scriptUrl.value, scriptsLibraryRow);
            window.electronAPI.scriptLibraryAdd(scriptName.value, scriptDesc.value, scriptUrl.value);
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

scriptLibraryCreator = (name, desc, url, parent) => {
    var div = document.createElement("div");
    div.setAttribute("class", "script");

    var h3 = document.createElement("h3");
    h3.innerText = name;

    var p = document.createElement("p");
    p.innerText = desc;

    var input = document.createElement("input");
    input.type = "text";
    input.readOnly = true;
    input.value = url;

    var buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    var execute = document.createElement("button");
    execute.innerText = "Execute";
    execute.addEventListener("click", () => {
        console.log(input.value);
    });

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        window.electronAPI.scriptLibraryDeleteItem(name);
        parent.removeChild(div);
    });

    buttons.appendChild(execute);
    buttons.appendChild(deleteButton);

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(buttons);

    parent.appendChild(div);
}

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