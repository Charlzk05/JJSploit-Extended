const executorPage = document.getElementsByClassName("executorPage")[0];
const buttonsPage = document.getElementsByClassName("buttonsPage")[0];
const scriptsLibPage = document.getElementsByClassName("scriptsLibPage")[0];
const navigatorBar = document.getElementsByClassName("navigatorBar")[0];
const gotoTop = document.getElementsByClassName("gotoTop")[0];

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
    var scriptName = document.getElementById("scriptName");
    var scriptDesc = document.getElementById("scriptDesc");
    var scriptContent = document.getElementById("scriptContent");
    var scriptsLibPage = document.getElementsByClassName("scriptsLibPage")[0];

    Array.from(scriptsLibPage.getElementsByClassName("column")).forEach((column) => {
        if (column.getElementsByClassName("script").length >= 3) { } else {
            var scriptContainer = document.createElement("div");
            scriptContainer.setAttribute("class", "script");
            var scriptH3 = document.createElement("h3");
            scriptH3.innerText = scriptName.value;
            var scriptP = document.createElement("p");
            scriptP.innerText = scriptDesc.value;
            var scriptButtons = document.createElement("div");
            scriptButtons.setAttribute("class", "buttons");
            var executeButton = document.createElement("button");
            executeButton.innerText = "Execute";
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            scriptButtons.appendChild(executeButton);
            scriptButtons.appendChild(deleteButton);
            var scriptTextArea = document.createElement("textarea");
            scriptTextArea.setAttribute("style", "display: none;");
            scriptTextArea.value = scriptContent.value;

            scriptContainer.appendChild(scriptH3);
            scriptContainer.appendChild(scriptP);
            scriptContainer.appendChild(scriptButtons);
            scriptContainer.appendChild(scriptTextArea);

            column.appendChild(scriptContainer);
        }
    });
}

addRow_click = () => {
    var scriptsLibPage = document.getElementsByClassName("scriptsLibPage")[0];
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "column");
    scriptsLibPage.appendChild(newRow);
}