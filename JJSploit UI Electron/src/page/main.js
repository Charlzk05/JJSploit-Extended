const executorPage = document.getElementsByClassName("executorPage")[0];
const buttonsPage = document.getElementsByClassName("buttonsPage")[0];
const scriptsLibPage = document.getElementsByClassName("scriptsLibPage")[0];
const navigatorBar = document.getElementsByClassName("navigatorBar")[0];
const gotoTop = document.getElementsByClassName("gotoTop")[0];
const scriptName = document.getElementById("scriptName");
const scriptDesc = document.getElementById("scriptDesc");
const scriptContent = document.getElementById("scriptContent");
const explorer = document.getElementsByClassName("explorer")[0];
const scriptsExplorer = document.getElementsByClassName("explorer")[0].getElementsByClassName("scripts")[0];

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
}

buttons_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: block;");
    scriptsLibPage.setAttribute("style", "display: none;");
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
}

addScript_click = () => {
    if (scriptName.value.length >= 5 && scriptContent.value.length >= 5) {
        if (scriptDesc.value == "") {
            var scriptContainer = document.createElement("div");
            scriptContainer.setAttribute("class", "script");
        
            var scriptH3 = document.createElement("h3");
            scriptH3.innerText = scriptName.value;
        
            var scriptP = document.createElement("p");
            scriptP.innerText = "(No description provided)";
        
            var scriptButtons = document.createElement("div");
            scriptButtons.setAttribute("class", "buttons");
        
            var scriptContentContainer = document.createElement("div");
            scriptContentContainer.setAttribute("class", "content");
            scriptContentContainer.setAttribute("style", "display: none;");
        
            var scriptContentP = document.createElement("p");
            scriptContentP.innerText = "Script";
        
            var scriptContentTextArea = document.createElement("textarea");
            scriptContentTextArea.value = scriptContent.value;
        
            scriptContentContainer.appendChild(scriptContentP);
            scriptContentContainer.appendChild(scriptContentTextArea);
        
            var executeButton = document.createElement("button");
            executeButton.innerText = "Execute";
        
            executeButton.addEventListener("click", () => {
                console.log(scriptContentContainer.value);
            });
        
            var viewButton = document.createElement("button");
            viewButton.innerText = "View script";
        
            var isViewed = false;
            viewButton.addEventListener("click", () => {
                if (isViewed == false) {
                    isViewed = true;
                    scriptContentContainer.setAttribute("style", "display: block;");
                } else {
                    isViewed = false;
                    scriptContentContainer.setAttribute("style", "display: none;");
                }
            });
        
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
        
            scriptButtons.appendChild(executeButton);
            scriptButtons.appendChild(viewButton);
            scriptButtons.appendChild(deleteButton);
        
            scriptContainer.appendChild(scriptH3);
            scriptContainer.appendChild(scriptP);
            scriptContainer.appendChild(scriptButtons);
            scriptContainer.appendChild(scriptContentContainer);
        
            deleteButton.addEventListener("click", () => {
                scriptsLibPage.getElementsByClassName("row")[0].removeChild(scriptContainer);
                window.localStorage.setItem("scriptsLibrary", scriptsLibPage.getElementsByClassName("row")[0].innerHTML);
            });
            
            scriptsLibPage.getElementsByClassName("row")[0].appendChild(scriptContainer);
        } else {
            var scriptContainer = document.createElement("div");
            scriptContainer.setAttribute("class", "script");
        
            var scriptH3 = document.createElement("h3");
            scriptH3.innerText = scriptName.value;
        
            var scriptP = document.createElement("p");
            scriptP.innerText = scriptDesc.value;
        
            var scriptButtons = document.createElement("div");
            scriptButtons.setAttribute("class", "buttons");
        
            var scriptContentContainer = document.createElement("div");
            scriptContentContainer.setAttribute("class", "content");
            scriptContentContainer.setAttribute("style", "display: none;");
        
            var scriptContentP = document.createElement("p");
            scriptContentP.innerText = "Script";
        
            var scriptContentTextArea = document.createElement("textarea");
            scriptContentTextArea.value = scriptContent.value;
        
            scriptContentContainer.appendChild(scriptContentP);
            scriptContentContainer.appendChild(scriptContentTextArea);
        
            var executeButton = document.createElement("button");
            executeButton.innerText = "Execute";
        
            executeButton.addEventListener("click", () => {
                console.log(scriptContentContainer.value);
            });
        
            var viewButton = document.createElement("button");
            viewButton.innerText = "View script";
        
            var isViewed = false;
            viewButton.addEventListener("click", () => {
                if (isViewed == false) {
                    isViewed = true;
                    scriptContentContainer.setAttribute("style", "display: block;");
                } else {
                    isViewed = false;
                    scriptContentContainer.setAttribute("style", "display: none;");
                }
            });
        
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
        
            scriptButtons.appendChild(executeButton);
            scriptButtons.appendChild(viewButton);
            scriptButtons.appendChild(deleteButton);
        
            scriptContainer.appendChild(scriptH3);
            scriptContainer.appendChild(scriptP);
            scriptContainer.appendChild(scriptButtons);
            scriptContainer.appendChild(scriptContentContainer);

            deleteButton.addEventListener("click", () => {
                scriptsLibPage.getElementsByClassName("row")[0].removeChild(scriptContainer);
                window.localStorage.setItem("scriptsLibrary", scriptsLibPage.getElementsByClassName("row")[0].innerHTML);
            });
        
            scriptsLibPage.getElementsByClassName("row")[0].appendChild(scriptContainer);
        }
    } else {
        scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning warningActive");
        setTimeout(() => {
            scriptsLibPage.getElementsByClassName("warning")[0].setAttribute("class", "warning");
        }, 3000);
    }

    window.localStorage.setItem("scriptsLibrary", scriptsLibPage.getElementsByClassName("row")[0].innerHTML);
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

window.addEventListener("DOMContentLoaded", () => {
    window.electronAPI.explorerLoad();
    scriptsLibPage.getElementsByClassName("row")[0].innerHTML = window.localStorage.getItem("scriptsLibrary");
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